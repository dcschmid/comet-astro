# Button Variants (WCAG AAA) — Light & Dark

This document lists the Tailwind 4 utility class combinations used for accessible (WCAG AAA) button variants in this project. Each variant includes recommended Light and Dark mode classes, hover/active/focus utilities, and short usage notes.

> Notes
>
> - The `base` rules (focus ring offset, disabled, loading) are defined in `src/components/ButtonBase.astro` and apply to all variants.
> - These class strings are copy/paste-ready for `ButtonBase.astro` or component usage.

---

## How to use

- In component markup: `<ButtonBase variant="primary">Primary</ButtonBase>`
- If you use raw classes: `class="BASE_CLASSES VARIANT_CLASSES"` (but prefer the `variant` prop).

---

## Variants (copy/paste class strings)

### Primary

Purpose: main action.

Light + Interaction:
`bg-blue-600 text-white hover:bg-blue-700 active:translate-y-px focus-visible:ring-blue-300`

Dark:
`dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 dark:focus-visible:ring-blue-200`

Combined (copy/paste):
`bg-blue-600 text-white hover:bg-blue-700 active:translate-y-px focus-visible:ring-blue-300 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 dark:focus-visible:ring-blue-200`

---

### Success

Purpose: confirm/positive actions.

Combined:
`bg-green-600 text-white hover:bg-green-700 active:translate-y-px focus-visible:ring-green-300 dark:bg-green-400 dark:text-black dark:hover:bg-green-500 dark:focus-visible:ring-green-200`

---

### Destructive

Purpose: destructive actions (delete/remove).

Combined:
`bg-red-600 text-white hover:bg-red-700 active:translate-y-px focus-visible:ring-red-300 dark:bg-red-400 dark:text-black dark:hover:bg-red-500 dark:focus-visible:ring-red-200`

---

### Warning

Purpose: cautionary/attention.

Combined:
`bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-300 dark:bg-yellow-300 dark:text-black dark:hover:bg-yellow-400 dark:focus-visible:ring-yellow-200`

---

### Info

Purpose: informational / brand.

Combined:
`bg-sky-600 text-white hover:bg-sky-700 active:translate-y-px focus-visible:ring-sky-300 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus-visible:ring-sky-200`

---

### Secondary

Purpose: less prominent action / alternate.

Combined:
`border border-slate-800 bg-slate-900 text-slate-50 shadow-sm hover:bg-slate-800 hover:border-slate-700 focus-visible:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 dark:hover:border-slate-600 dark:focus-visible:ring-slate-400`

---

### Ghost

Purpose: link-like or inline actions.

Combined:
`bg-transparent text-slate-900 hover:underline focus-visible:ring-slate-300 dark:text-slate-50 dark:hover:underline dark:focus-visible:ring-slate-500`

---

### Cyan / Teal / Purple / Indigo

Purpose: alternative colored actions.

Cyan:
`bg-cyan-600 text-white hover:bg-cyan-700 active:translate-y-px focus-visible:ring-cyan-300 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-200`

Teal:
`bg-teal-600 text-white hover:bg-teal-700 active:translate-y-px focus-visible:ring-teal-300 dark:bg-teal-400 dark:text-black dark:hover:bg-teal-500 dark:focus-visible:ring-teal-200`

Purple:
`bg-purple-600 text-white hover:bg-purple-700 active:translate-y-px focus-visible:ring-purple-300 dark:bg-purple-400 dark:text-black dark:hover:bg-purple-500 dark:focus-visible:ring-purple-200`

Indigo:
`bg-indigo-600 text-white hover:bg-indigo-700 active:translate-y-px focus-visible:ring-indigo-300 dark:bg-indigo-400 dark:text-black dark:hover:bg-indigo-500 dark:focus-visible:ring-indigo-200`

---

## Accessibility / Testing notes

- Contrast: these combinations were chosen to aim for WCAG AAA (7:1) for normal text on the button surface. For critical flows, verify specific color tokens with a contrast checker (WebAIM / axe).
- Focus: use keyboard Tab to ensure `focus-visible` ring is visible and sufficiently contrasting in both modes.
- Disabled/Loading: `base` provides `disabled:pointer-events-none disabled:opacity-50` and a `loading` variant that sets `aria-busy` and a spinner.

---

## Next steps (optional)

- Add an automated contrast check script in `scripts/` to assert tokens meet 7:1.
- Add Storybook stories to visually review all variants in Light/Dark and focused/hover states.

---

If you want, I can also add a `docs` section to the site that renders these examples live (small page under `src/pages/components/button-base.astro`).
