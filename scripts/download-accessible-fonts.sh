#!/usr/bin/env bash
# Legacy download script for manual self-hosting.
# NOTE: Project now prefers Fontsource packages (@fontsource/atkinson-hyperlegible, @fontsource/opendyslexic).
# Use this only if you need fully local copies without npm dependencies or for subsetting.
# Fonts covered: Atkinson Hyperlegible (OFL), OpenDyslexic (OFL)
# Proprietary / restricted fonts NOT downloaded (Lexie, Sylexiad, Tiresias, Braille variants).
# Requirements: curl, woff2_compress (optional) or fonttools (pyftsubset) for conversion.
# Usage: bash scripts/download-accessible-fonts.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FONT_DIR="$ROOT_DIR/public/fonts"
WORK_DIR="$ROOT_DIR/.tmp-font-download"

mkdir -p "$FONT_DIR" "$WORK_DIR"

echo "[info] Working directory: $WORK_DIR"

echo "[info] Downloading Atkinson Hyperlegible (Regular & Bold) from Google Fonts CSS API (legacy path)..."
# Google Fonts provides a CSS with URLs; we parse for woff2 links.
ATKINSON_CSS_URL="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
curl -sS "$ATKINSON_CSS_URL" -o "$WORK_DIR/atkinson.css"
# Extract all woff2 URLs
grep -Eo 'https:[^")]*\.woff2' "$WORK_DIR/atkinson.css" > "$WORK_DIR/atkinson_urls.txt"

ATKINSON_REG_URL=$(grep 'wght@400' "$WORK_DIR/atkinson_urls.txt" | head -n1 || true)
ATKINSON_BOLD_URL=$(grep 'wght@700' "$WORK_DIR/atkinson_urls.txt" | head -n1 || true)

if [[ -z "$ATKINSON_REG_URL" || -z "$ATKINSON_BOLD_URL" ]]; then
  echo "[warn] Could not extract Atkinson font URLs. CSS content:" >&2
  cat "$WORK_DIR/atkinson.css" >&2
  exit 1
fi

curl -L "$ATKINSON_REG_URL" -o "$WORK_DIR/Atkinson-Hyperlegible-Regular.woff2"
curl -L "$ATKINSON_BOLD_URL" -o "$WORK_DIR/Atkinson-Hyperlegible-Bold.woff2"

echo "[info] Downloading OpenDyslexic Regular/Bold (OTF) from jsDelivr NPM mirror (legacy path)..."
# Using OTF -> convert to WOFF2 if tool exists
OD_BASE="https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.0/otf"
curl -L "$OD_BASE/OpenDyslexic-Regular.otf" -o "$WORK_DIR/OpenDyslexic-Regular.otf"
curl -L "$OD_BASE/OpenDyslexic-Bold.otf" -o "$WORK_DIR/OpenDyslexic-Bold.otf"

# Conversion function (OTF/TTF -> WOFF2)
convert_to_woff2() {
  local input_file="$1"
  local base_name="$(basename "$input_file" | sed 's/\.[ot]tf$//')"
  if command -v woff2_compress >/dev/null 2>&1; then
    echo "[info] Converting $input_file -> $base_name.woff2 (woff2_compress)"
    cp "$input_file" "$WORK_DIR/tmp-font.ttf" 2>/dev/null || cp "$input_file" "$WORK_DIR/tmp-font.otf"
    woff2_compress "$WORK_DIR/tmp-font.ttf" 2>/dev/null || woff2_compress "$WORK_DIR/tmp-font.otf"
    mv "$WORK_DIR/tmp-font.woff2" "$WORK_DIR/${base_name}.woff2"
    rm -f "$WORK_DIR/tmp-font.ttf" "$WORK_DIR/tmp-font.otf"
  elif command -v pyftsubset >/dev/null 2>&1; then
    echo "[info] Converting $input_file -> $base_name.woff2 (pyftsubset full copy)"
    pyftsubset "$input_file" --output-file="$WORK_DIR/${base_name}.woff2" --flavor=woff2 --layout-features='*' --glyphs='*'
  else
    echo "[warn] No conversion tool found (woff2_compress or pyftsubset). Keeping original $input_file."
    return 1
  fi
  return 0
}

convert_to_woff2 "$WORK_DIR/OpenDyslexic-Regular.otf" || true
convert_to_woff2 "$WORK_DIR/OpenDyslexic-Bold.otf" || true

# If conversion failed, copy original OTF (fallback) — though CSS expects woff2; user must adjust if needed.
if [[ ! -f "$WORK_DIR/OpenDyslexic-Regular.woff2" ]]; then
  cp "$WORK_DIR/OpenDyslexic-Regular.otf" "$WORK_DIR/OpenDyslexic-Regular.otf.keep"
  echo "[warn] Regular OpenDyslexic not converted. Consider installing woff2_compress or fonttools." >&2
fi
if [[ ! -f "$WORK_DIR/OpenDyslexic-Bold.woff2" ]]; then
  cp "$WORK_DIR/OpenDyslexic-Bold.otf" "$WORK_DIR/OpenDyslexic-Bold.otf.keep"
  echo "[warn] Bold OpenDyslexic not converted. Consider installing woff2_compress or fonttools." >&2
fi

# Move resulting woff2 fonts into public directory
mv "$WORK_DIR"/*.woff2 "$FONT_DIR" 2>/dev/null || true

echo "[info] Fonts placed in $FONT_DIR:"
ls -1 "$FONT_DIR" || true

echo "[next] Fontsource is active; if you want to switch to pure self-hosting remove fontsource imports and re-enable local @font-face blocks."

echo "[done] Download & preparation complete."
