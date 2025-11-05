# Comet Astro

A comprehensive Astro component library built with Tailwind CSS featuring unified base components, WCAG AAA accessibility compliance, and consistent design patterns. Features class passthrough support via clsx + tailwind-merge.

## Key Features

- **🏗️ Unified Architecture**: Base components (EmbedBase, ButtonBase) provide consistent functionality across component families
- **♿ WCAG AAA Compliance**: 9:1 contrast ratios, enhanced focus indicators, and comprehensive screen reader support
- **🎨 Design Consistency**: Unified styling system with three variants and sizes across all interactive components
- **⚡ Performance Optimized**: Lazy loading, optimized iframe attributes, and efficient code sharing (51% average reduction in embed components)
- **🔧 Developer Experience**: Class passthrough support, TypeScript interfaces, and comprehensive documentation

## Component Architecture

### Base Components

- **EmbedBase**: Shared foundation for all embed components (YouTube, Vimeo, Spotify, etc.) with consistent loading states, error handling, and 5 visual variants
- **ButtonBase**: Unified styling system for Button and ButtonLink with intelligent rendering, external link detection, and accessibility features

### Consolidated Components

All embed components now use EmbedBase providing:

- Consistent loading states and error handling
- Five visual variants (default, inline, featured, minimal, card)
- WCAG AAA accessibility compliance
- Responsive design with flexible aspect ratios
- Performance optimizations with lazy loading

## Install

```bash
npm i comet-astro
```

## Tailwind 4 setup

Point Tailwind at your sources directly from your CSS entry file (e.g. `src/styles/tailwind.css`):

```bash
npm install tailwindcss tailwind-typography
```

```css
@import 'tailwindcss';
@plugin "tailwind-typography";

@source "./src/**/*.{astro,js,ts,jsx,tsx,mdx}";
@source "./node_modules/comet-astro/src/**/*.{astro,js,ts,jsx,tsx,mdx}";

/* optional theme tokens */
@theme {
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}
```

That’s it—no Tailwind config or PostCSS layer required.

## Usage

- Named import:

```astro
---
import { Button, Card, Layout, PageHeader } from 'comet-astro';
---

<Button class="mt-4">Click me</Button>
```

- Deep import (alternative):

```astro
---
import Button from 'comet-astro/src/components/Button.astro';
---
```

Class passthrough works via the `class` prop on all components.

## Variants (tailwind-variants)

Interactive Komponenten wie `Button` nutzen jetzt [`tailwind-variants`](https://www.tailwind-variants.org/) für deklarative Varianten.

Einfach über Props steuern:

```astro
<Button variant="secondary" size="lg">Download</Button>
<Button variant="ghost" size="sm" class="mt-4">Mehr</Button>
```

Erweiterte Komposition ist möglich, aber die interne Varianten-Factory
wird in `ButtonBase` verwaltet und nicht als Teil der öffentlichen API
exportiert. Für prosjekt-spezifische Presets empfehlen wir entweder
ein Inline-Override via die `class`-Prop oder, wenn du programmatisch
zusammensetzen möchtest, eine kleine lokale Helferfunktion in deinem
Projekt, z.B. mit `tailwind-variants`:

```ts
// in deinem Projekt (not in comet-astro)
import { tv } from 'tailwind-variants';

const myButton = tv({
  base: 'rounded px-4',
  variants: {
    /* ... */
  },
});

// oder: nutze inline class overrides
// <Button class="bg-purple-700 text-white dark:bg-purple-800">Custom</Button>
```

Verfügbare `variant` Werte: `primary`, `secondary`, `ghost`, `success`, `destructive`.

Loading-State nutzen (zeigt Spinner, setzt `aria-busy`, ist automatisch disabled):

```astro
<Button loading>Speichern</Button>
<Button variant="destructive" loading loadingLabel="Wird gelöscht"
  >Löschen</Button
>
```

Das Utility merged eigene Klassen mit den Varianten sicher (Konflikte werden von Tailwind geklärt). Fallbacks: `variant="primary"`, `size="md"`.

## License

MIT
