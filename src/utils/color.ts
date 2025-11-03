// Utility functions for color manipulation and WCAG contrast calculations.
// We keep this intentionally minimal to avoid overengineering.

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const normalized = hex.trim().toLowerCase();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(normalized)) return null;
  const full = normalized.length === 4
    ? `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
    : normalized;
  const num = parseInt(full.slice(1), 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function relativeLuminance(hex: string): number | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const transform = (channel: number) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const R = transform(rgb.r);
  const G = transform(rgb.g);
  const B = transform(rgb.b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function contrastRatio(foreground: string, background: string): number | null {
  const L1 = relativeLuminance(foreground);
  const L2 = relativeLuminance(background);
  if (L1 == null || L2 == null) return null;
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export function bestTextColor(bg: string): 'black' | 'white' | null {
  const cBlack = contrastRatio('#000000', bg);
  const cWhite = contrastRatio('#ffffff', bg);
  if (cBlack == null || cWhite == null) return null;
  return cBlack >= cWhite ? 'black' : 'white';
}

export function isAAA(contrast: number, largeText = false): boolean {
  // AAA: Small text >= 7, Large text (>=18pt or bold >=14pt) >= 4.5
  return contrast >= (largeText ? 4.5 : 7);
}

export function normalizeHex(value: string): string | null {
  const hex = value.trim().toLowerCase();
  if (!hex.startsWith('#')) return null;
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(hex)) return null;
  return hex.length === 4
    ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
    : hex;
}
