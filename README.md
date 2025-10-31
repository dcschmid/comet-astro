# Comet Astro

Reusable Astro component library built with Tailwind CSS. Class passthrough supported via clsx + tailwind-merge.

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

## License

MIT
