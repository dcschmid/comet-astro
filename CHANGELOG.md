# comet-astro

## 0.3.0

### Major Changes

- **Component Architecture Consolidation**: Introduced unified base components for improved consistency and maintainability
  - **EmbedBase**: New shared foundation component for all embed types (YouTube, Vimeo, Spotify, Apple Music, TikTok, Twitter, Map)
    - Provides consistent loading states, error handling, and accessibility features across all embeds
    - Supports 5 visual variants: default, inline, featured, minimal, and card
    - Achieved 51% average code reduction across embed components while maintaining full functionality
    - WCAG AAA compliance with 9:1 contrast ratios and proper ARIA attributes
    - Responsive design with flexible aspect ratios and lazy loading optimization
  - **ButtonBase**: New shared styling system for Button and ButtonLink components
    - Unified appearance across all button variants (primary, secondary, ghost) and sizes (sm, md, lg)
    - Intelligent rendering as button or anchor elements based on use case
    - Automatic external link detection with icons and proper attributes
    - ~60% reduction in duplicate styling code between button components
    - Enhanced accessibility with consistent focus indicators and keyboard navigation

### Enhanced Features

- **Button Component Improvements**:
  - ButtonLink now supports all three size variants (previously fixed size)
  - Automatic external link detection and styling
  - Consistent focus management and ARIA attributes
  - Intelligent element type selection (button vs anchor)

- **Embed Component Enhancements**:
  - All embed components now use EmbedBase for consistent behavior
  - Unified loading states with LoadingSpinner integration
  - Improved error handling with user-friendly messages
  - Enhanced accessibility with proper screen reader announcements
  - Performance optimizations with lazy loading and optimized iframe attributes

### Documentation Updates

- **New Documentation Pages**:
  - EmbedBase component documentation with usage examples and architecture details
  - ButtonBase component documentation explaining the shared styling system
  - Updated all component documentation to reflect new architectures

- **Enhanced Component Docs**:
  - Button and ButtonLink documentation updated to reflect ButtonBase integration
  - All embed component documentation updated to mention EmbedBase architecture
  - Comprehensive examples showcasing new variants and features
  - Updated README with architecture overview and key features

### Breaking Changes

- Component internal architecture has been refactored, but all public APIs remain compatible
- No breaking changes to existing component usage or props

## 0.2.0

### Minor Changes

- [`f30b017`](https://github.com/dcschmid/comet-astro/commit/f30b0175a638f1203dd74ed2cf58db8c2c9d0339) Thanks [@dcschmid](https://github.com/dcschmid)! - We refreshed the component library and docs to align with WCAG AAA standards across light and dark themes, tightening color palettes, focus rings, and hover states for buttons, badges, banners, blockquotes, breadcrumbs, and back-to-top controls; added reduced-motion fallbacks and automatic external-link cues; updated the documentation shell for higher contrast and better navigation; and rewrote each component’s guide with richer examples, prop explanations, and accessibility guidance so the entire system now offers consistent, high-contrast, keyboard-friendly experiences.

## 0.1.0

### Minor Changes

- [`ecbc41b`](https://github.com/dcschmid/comet-astro/commit/ecbc41b2c71feb3d5b87f081c4096fa335c7815f) Thanks [@dcschmid](https://github.com/dcschmid)! - Base Docs and first components
