# Lokales Hosting barrierefreier Schriften

Dieses Dokument beschreibt, wie du barrierefreie Schriftarten in Comet Astro selbst hostest und performant einbindest.

## Ziele

- WCAG-konforme Lesbarkeit (klare Glyph-Differenzierung, ausreichende Zeilenhöhe)
- Performante Auslieferung (Preload nur kritischer Schnitte)
- Privacy: Keine externen CDNs notwendig
- Einfache Wartung und Lizenzübersicht

## Schritte

Zwei Ansätze: Fontsource (empfohlen) oder manuelles Self-Hosting.

### Variante A: Fontsource (empfohlen)

1. Abhängigkeiten installiert (siehe `package.json`): `@fontsource/atkinson-hyperlegible`, `@fontsource/opendyslexic`.
2. Datei `src/styles/fontsource.css` importiert benötigte Schnitte (400,700).
3. `BaseLayout.astro` importiert `fontsource.css` + Utility-Klassen bleiben bestehen.
4. Aktivierung über `fontMode="atkinson"` oder `fontMode="opendyslexic"`.
5. Preload kann entfallen (Fontsource liefert lokale Dateien aus `node_modules`).

### Variante B: Manuelles Self-Hosting

1. Font-Dateien (WOFF2 bevorzugt) in `public/fonts/` ablegen.
2. Dateinamen gemäß Schema: `Familienname-Weight.woff2` (z.B. `Atkinson-Hyperlegible-Regular.woff2`).
3. Lizenzen prüfen (`LICENSES-FONTS.md`).
4. `accessible-fonts.css` enthält lokale `@font-face` Blöcke (auskommentierte für proprietäre Fonts bei Bedarf aktivieren).
5. Aktivierung über `fontMode` Prop.
6. Optional Preload via `preloadFont={true}` für kritische Schnitte.

## Beispiel

```astro
<BaseLayout
  title="Lesbare Seite"
  fontMode="atkinson"
  preloadFont={true}
  highLegibility={true}
>
  <p>
    Diese Seite verwendet Atkinson Hyperlegible für verbesserte
    Unterscheidbarkeit.
  </p>
</BaseLayout>
```

## Font Modi

| Mode         | Beschreibung                                               |
| ------------ | ---------------------------------------------------------- |
| default      | System / Inter fallback (keine Preloads)                   |
| atkinson     | Atkinson Hyperlegible (OFL)                                |
| opendyslexic | OpenDyslexic (OFL)                                         |
| lexie        | Lexie Readable (nicht mehr via fontsource – selbst hosten) |
| opensans     | Open Sans (OFL)                                            |
| nunito       | Nunito (OFL)                                               |
| lato         | Lato (OFL)                                                 |
| ubuntu       | Ubuntu (Ubuntu Font License)                               |
| sourcesans   | Source Sans Pro (OFL)                                      |
| sourcecode   | Source Code Pro (OFL, Monospace)                           |
| firacode     | Fira Code (OFL, Monospace, Ligaturen optional)             |
| ibmplexsans  | IBM Plex Sans (SIL OFL)                                    |
| ibmplexmono  | IBM Plex Mono (SIL OFL)                                    |
| spacegrotesk | Space Grotesk (OFL)                                        |
| sylexiad     | Sylexiad (Lizenz prüfen)                                   |
| tiresias     | Tiresias PC (Lizenz prüfen)                                |
| braille      | Visuelle Braille-Darstellung (optional)                    |

## Performance Tipps

### Fontsource

- Importiere nur benötigte Gewichte (z.B. 400,700).
- Kein zusätzliches Preload nötig (Dateien sind lokal, Browser cached schnell).

### Self-Hosting

- Nur 400 & 700 Schnitte preloaden (Normal + Bold).
- Zusätzliche Kursivvarianten nur laden, wenn wirklich genutzt.
- `font-display: swap` verhindert Render-Blocking.
- Lighthouse & WebPageTest ausführen und FOUT beurteilen.

## Accessibility Hinweise

- Dyslexie-Schriften sind subjektiv: nicht erzwingen; optional nutzbar machen.
- Line-Height >= 1.5 (siehe `highLegibility` Prop) für besseren Lesefluss.
- Begrenze Zeilenlänge bei langen Texten (60–75ch) – bereits durch Prose-Komponenten möglich.
- Teste Darstellung bei 200% Browser-Zoom und aktiviertem OS High-Contrast.

## Lizenzverwaltung

Siehe `LICENSES-FONTS.md`. Nicht-OFL Fonts erst aktivieren wenn die Berechtigung vorliegt. @font-face Blöcke bleiben auskommentiert bis dahin.

## Fehlerbehebung

| Problem                | Ursache                                         | Lösung                               |
| ---------------------- | ----------------------------------------------- | ------------------------------------ |
| Schrift zeigt nicht    | Falscher Dateiname/Pfad                         | Prüfe `public/fonts` und CSS src URL |
| Layout Shift           | Keine Preloads / unterschiedliche Font-Metriken | Fallback definieren + Preload aktiv  |
| FOUT zu lang           | Späte Font-Ladung                               | WOFF2 + Preload + early link tags    |
| Dyslexic Zeilen zu eng | `highLegibility` nicht aktiv                    | `highLegibility={true}` setzen       |

## Nächste Erweiterungen

### Geplant / Optional

- User-Einstellungen Panel für Font Präferenz
- Automatisches Subsetting (glyphhanger / pyftsubset)
- Dynamische Aktivierung über lokale Storage-Präferenz (separate Komponente)
- Vergleich Fontsource vs. Self-Hosting Benchmarks

---

Bei Fragen zu Einbindung oder Lizenz einfach im Projekt diskutieren.
