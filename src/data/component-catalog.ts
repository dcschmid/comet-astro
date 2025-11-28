// Auto-generated component catalog
export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export interface ComponentCategory {
  id: string;
  icon: string;
  color: string;
}

export const componentCategories: ComponentCategory[] = [
  { id: 'Typography', icon: '🔤', color: 'from-blue-500 to-cyan-500' },
  { id: 'Layout', icon: '📐', color: 'from-green-500 to-emerald-500' },
  { id: 'Content', icon: '📰', color: 'from-slate-500 to-zinc-500' },
  { id: 'Forms', icon: '📝', color: 'from-indigo-500 to-violet-500' },
  { id: 'Feedback', icon: '💬', color: 'from-teal-500 to-cyan-500' },
  { id: 'Navigation', icon: '🧭', color: 'from-orange-500 to-amber-500' },
  { id: 'Interactive', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  { id: 'Advanced', icon: '🚀', color: 'from-fuchsia-500 to-purple-500' },
  { id: 'Media', icon: '🎬', color: 'from-rose-500 to-pink-500' },
  { id: 'Utilities', icon: '🛠️', color: 'from-red-500 to-rose-500' },
  { id: 'Weather', icon: '🌦️', color: 'from-sky-500 to-blue-600' },
  { id: 'API', icon: '🌐', color: 'from-violet-500 to-purple-600' },
];

export const componentCatalog: ComponentDoc[] = [
  {
    slug: 'base-layout',
    name: 'BaseLayout',
    description:
      'Semantic page frame with skip link, landmarks, theme controller, and font/legibility props.',
    category: 'Layout',
  },
  {
    slug: 'preferences-panel',
    name: 'PreferencesPanel',
    description:
      'User preferences panel for theme, font, and high‑legibility mode with local persistence.',
    category: 'Utilities',
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Disclosure/accordion with single or multiple open sections.',
    category: 'Interactive',
  },
  {
    slug: 'air-quality',
    name: 'AirQuality',
    description:
      'Real-time air quality monitoring with AQI indices, pollutants, pollen forecasts, and health recommendations.',
    category: 'Weather',
  },
  {
    slug: 'climate-projections',
    name: 'ClimateProjections',
    description:
      'Accessible summary of baseline vs projected climate metrics with confidence indicators and optional extremes.',
    category: 'Weather',
  },
  {
    slug: 'current-weather',
    name: 'CurrentWeather',
    description:
      'Minimal current conditions (temp, humidity, wind) with optional live Open‑Meteo fetch.',
    category: 'Weather',
  },
  {
    slug: 'environmental-dashboard',
    name: 'EnvironmentalDashboard',
    description:
      'Minimal environmental snapshot (weather + air quality) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'flood-monitor',
    name: 'FloodMonitor',
    description:
      'Minimal river discharge & level snapshot with risk classification and optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'hourly-forecast',
    name: 'HourlyForecast',
    description:
      'Minimal next-hours weather snapshot (time, temp, precip %, icon) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'marine-weather',
    name: 'MarineWeather',
    description:
      'Minimal marine snapshot (wave height, sea temp, wind) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'solar-radiation',
    name: 'SolarRadiation',
    description:
      'Minimal solar snapshot (radiation W/m², UV index, daylight) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'weather-forecast',
    name: 'WeatherForecast',
    description:
      'Minimal multi-day daily forecast (icon, condition, high/low, precip %) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'weather-location-search',
    name: 'WeatherLocationSearch',
    description:
      'Minimal geocoding location search (name, country, coordinates) with optional live fetch.',
    category: 'Weather',
  },
  {
    slug: 'weather-base',
    name: 'WeatherBase',
    description:
      'Shared structural wrapper and utilities for weather components (layout + accessibility).',
    category: 'Weather',
  },
  {
    slug: 'weather-dashboard',
    name: 'WeatherDashboard',
    description:
      'Composite dashboard surface aggregating multiple weather metrics/components.',
    category: 'Weather',
  },
  {
    slug: 'alert',
    name: 'Alert',
    description:
      'Status messaging component with variants and optional dismiss button.',
    category: 'Feedback',
  },
  {
    slug: 'apple-music-embed',
    name: 'AppleMusicEmbed',
    description:
      'Embed Apple Music albums, playlists, or tracks via official share URLs.',
    category: 'Media',
  },
  {
    slug: 'aspect-ratio',
    name: 'AspectRatio',
    description: 'Maintain intrinsic ratios for media or placeholders.',
    category: 'Layout',
  },
  {
    slug: 'audio-player',
    name: 'AudioPlayer',
    description:
      'Custom audio element with artwork, metadata, and playback controls.',
    category: 'Media',
  },
  {
    slug: 'autocomplete',
    name: 'Autocomplete',
    description: 'Search-as-you-type combobox with keyboard navigation.',
    category: 'Forms',
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description:
      'User avatars with size, status, and shape variations plus initials fallback.',
    category: 'Content',
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Compact label for statuses, categories, or tiers.',
    category: 'Feedback',
  },
  {
    slug: 'banner',
    name: 'Banner',
    description:
      'Prominent announcement bar with optional action and dismiss control.',
    category: 'Feedback',
  },
  {
    slug: 'blockquote',
    name: 'Blockquote',
    description:
      'Stylized quotations with optional author, source, and variants.',
    category: 'Typography',
  },
  {
    slug: 'breadcrumbs',
    name: 'Breadcrumbs',
    description: 'Hierarchical navigation trail with current-page indicator.',
    category: 'Navigation',
  },
  {
    slug: 'button-link',
    name: 'ButtonLink',
    description:
      'Accessible anchor-styled button with primary/secondary variants and external label.',
    category: 'Interactive',
  },
  {
    slug: 'button',
    name: 'Button',
    description: 'Button component with variants, sizes, and loading state.',
    category: 'Interactive',
  },
  {
    slug: 'callout',
    name: 'Callout',
    description:
      'Highlight important information with contextual accent colors.',
    category: 'Feedback',
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'Flexible surface for dashboard metrics or marketing teasers.',
    category: 'Content',
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    description: 'Responsive carousel with autoplay and pagination controls.',
    category: 'Interactive',
  },
  {
    slug: 'category-badge',
    name: 'CategoryBadge',
    description: 'Rounded metadata badges with tone presets.',
    category: 'Content',
  },
  {
    slug: 'category-image',
    name: 'CategoryImage',
    description:
      'Card-style tile with image, title, and link for category listings.',
    category: 'Content',
  },
  {
    slug: 'center',
    name: 'Center',
    description:
      'Utility to center content along horizontal, vertical, or both axes.',
    category: 'Layout',
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description:
      'Styled checkbox supporting indeterminate, disabled, and helper text.',
    category: 'Forms',
  },
  {
    slug: 'chip',
    name: 'Chip',
    description:
      'Compact tag component with variants, sizes, and removable state.',
    category: 'Forms',
  },
  {
    slug: 'code-block',
    name: 'CodeBlock',
    description: 'Syntax-highlighted code with copy-to-clipboard support.',
    category: 'Typography',
  },
  {
    slug: 'command-menu',
    name: 'CommandMenu',
    description: 'CMD+K / Ctrl+K command palette with keyboard navigation.',
    category: 'Navigation',
  },
  {
    slug: 'confetti',
    name: 'Confetti',
    description:
      'Celebratory particle burst that can be triggered by hover or click.',
    category: 'Feedback',
  },
  {
    slug: 'contact-card',
    name: 'ContactCard',
    description: 'Profile card for highlighting team members or contacts.',
    category: 'Content',
  },
  {
    slug: 'container',
    name: 'Container',
    description: 'Max-width content wrapper with responsive padding.',
    category: 'Layout',
  },
  {
    slug: 'context-menu',
    name: 'ContextMenu',
    description: 'Custom right-click context menu with keyboard support.',
    category: 'Navigation',
  },
  {
    slug: 'data-list',
    name: 'DataList',
    description:
      'Semantic definition list with default, horizontal, and striped variants.',
    category: 'Content',
  },
  {
    slug: 'date-picker',
    name: 'DatePicker',
    description: 'Calendar picker with range presets and keyboard navigation.',
    category: 'Forms',
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description:
      'Accessible wrapper around the HTML dialog element with trigger helpers.',
    category: 'Advanced',
  },
  {
    slug: 'divider',
    name: 'Divider',
    description: 'Visual separator for content sections.',
    category: 'Layout',
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    description:
      'Slide-in panel that anchors to the left or right edge of the viewport.',
    category: 'Advanced',
  },
  {
    slug: 'dropdown-menu',
    name: 'DropdownMenu',
    description: 'Accessible menu triggered by buttons or custom elements.',
    category: 'Navigation',
  },
  {
    slug: 'embed',
    name: 'Embed',
    description:
      'Generic iframe wrapper with aspect ratio and sizing controls.',
    category: 'Media',
  },
  {
    slug: 'empty-state',
    name: 'EmptyState',
    description:
      'Versatile placeholder for views without content, supporting actions and guidance.',
    category: 'Feedback',
  },
  {
    slug: 'file-upload',
    name: 'FileUpload',
    description: 'Drag-and-drop uploader with progress display and validation.',
    category: 'Forms',
  },
  {
    slug: 'filter-chips',
    name: 'FilterChips',
    description: 'Toggleable chip group with clear-all control.',
    category: 'Forms',
  },
  {
    slug: 'flex',
    name: 'Flex',
    description:
      'Utility component for building flexbox layouts with sensible defaults.',
    category: 'Layout',
  },
  {
    slug: 'footer',
    name: 'Footer',
    description: 'Responsive site footer with legal and external links.',
    category: 'Layout',
  },
  {
    slug: 'form-group',
    name: 'FormGroup',
    description: 'Bundle labels, hints, and validation states around inputs.',
    category: 'Forms',
  },
  {
    slug: 'fullscreen-overlay',
    name: 'FullscreenOverlay',
    description:
      'Edge-to-edge overlay for onboarding, confirmations, or feature tours.',
    category: 'Advanced',
  },
  {
    slug: 'grid',
    name: 'Grid',
    description: 'Responsive grid layout system with auto columns.',
    category: 'Layout',
  },
  {
    slug: 'headline',
    name: 'Headline',
    description:
      'Accessible heading component with size and alignment variants.',
    category: 'Typography',
  },
  {
    slug: 'hero-section',
    name: 'HeroSection',
    description:
      'Marketing hero with headline, supporting copy, and dual CTA slots.',
    category: 'Content',
  },
  {
    slug: 'icon',
    name: 'Icon',
    description: 'SVG icon sprite with size props and utility classes.',
    category: 'Utilities',
  },
  {
    slug: 'imprint-address',
    name: 'ImprintAddress',
    description: 'Structured address block for legal imprint requirements.',
    category: 'Content',
  },
  {
    slug: 'infinite-scroll',
    name: 'InfiniteScroll',
    description:
      'Progressively load additional content as users approach the bottom.',
    category: 'Interactive',
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'Text input field with validation states and sizes.',
    category: 'Forms',
  },
  {
    slug: 'kbd',
    name: 'KBD',
    description: 'Inline keyboard shortcut badge with size variants.',
    category: 'Typography',
  },
  {
    slug: 'label',
    name: 'Label',
    description: 'Accessible form label with required/optional annotations.',
    category: 'Forms',
  },
  {
    slug: 'language-switcher',
    name: 'LanguageSwitcher',
    description: 'Link-based language switcher showing the current locale.',
    category: 'Navigation',
  },
  {
    slug: 'layout',
    name: 'Layout',
    description: 'Page frame with header, footer, and containerized main slot.',
    category: 'Layout',
  },
  {
    slug: 'lightbox',
    name: 'Lightbox',
    description: 'Gallery overlay with keyboard controls and caption support.',
    category: 'Media',
  },
  {
    slug: 'loading-spinner',
    name: 'LoadingSpinner',
    description: 'Accessible SVG spinner with size and color variants.',
    category: 'Feedback',
  },
  {
    slug: 'loading-state',
    name: 'LoadingState',
    description:
      'Full-width loading placeholder with spinner and optional skeleton rows.',
    category: 'Feedback',
  },
  {
    slug: 'map-embed',
    name: 'MapEmbed',
    description:
      'Google Maps iframe helper that accepts address, coordinates, or place IDs.',
    category: 'Media',
  },
  {
    slug: 'masonry',
    name: 'Masonry',
    description:
      'Responsive multi-column layout that reflows cards automatically.',
    category: 'Content',
  },
  {
    slug: 'media-card',
    name: 'MediaCard',
    description:
      'Card with optional image, title, description and action links.',
    category: 'Content',
  },
  {
    slug: 'media-list-item',
    name: 'MediaListItem',
    description: 'List row combining thumbnail, metadata, and action links.',
    category: 'Content',
  },
  {
    slug: 'mega-menu',
    name: 'MegaMenu',
    description: 'Multi-column dropdown navigation for product-level menus.',
    category: 'Navigation',
  },
  {
    slug: 'modal',
    name: 'Modal',
    description:
      'Accessible dialog with focus trap, aria labelling, and scroll locking.',
    category: 'Advanced',
  },
  {
    slug: 'music-buttons',
    name: 'MusicButtons',
    description:
      'Renders platform buttons linking to music services with branded styling.',
    category: 'Interactive',
  },
  {
    slug: 'navbar',
    name: 'Navbar',
    description:
      'Responsive top navigation with a mobile toggle and actions slot.',
    category: 'Navigation',
  },
  {
    slug: 'optimized-image',
    name: 'OptimizedImage',
    description:
      'Responsive image component with eager/lazy loading and blur placeholder.',
    category: 'Media',
  },
  {
    slug: 'page-header',
    name: 'PageHeader',
    description:
      'Headline block with subtitle, action slots, and supporting content.',
    category: 'Content',
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    description:
      'Page navigator with condensed layout and configurable window.',
    category: 'Navigation',
  },
  {
    slug: 'paragraph',
    name: 'Paragraph',
    description: 'Typography helper with size, weight, and muted variants.',
    category: 'Typography',
  },
  {
    slug: 'popover',
    name: 'Popover',
    description:
      'Contextual bubble anchored to a trigger with directional placement.',
    category: 'Interactive',
  },
  {
    slug: 'progress-bar',
    name: 'ProgressBar',
    description:
      'Visually communicate task completion with optional labels and variants.',
    category: 'Feedback',
  },
  {
    slug: 'prose',
    name: 'Prose',
    description:
      'Typography wrapper for rendered content or raw HTML with size variants.',
    category: 'Typography',
  },
  {
    slug: 'radio',
    name: 'Radio',
    description: 'Single-select inputs grouped by shared name attribute.',
    category: 'Forms',
  },
  {
    slug: 'rating',
    name: 'Rating',
    description: 'Star rating display with optional interactive mode.',
    category: 'Forms',
  },
  {
    slug: 'rich-text-editor',
    name: 'RichTextEditor',
    description: 'ContentEditable-based WYSIWYG input with formatting toolbar.',
    category: 'Forms',
  },
  {
    slug: 'scroll-to-top',
    name: 'ScrollToTop',
    description: 'Scroll back to the top after traversing long pages.',
    category: 'Navigation',
  },
  {
    slug: 'search-bar',
    name: 'SearchBar',
    description:
      'Accessible search form with submit button and screen reader labels.',
    category: 'Navigation',
  },
  {
    slug: 'search-panel',
    name: 'SearchPanel',
    description:
      'Full-screen search and command surface with keyboard shortcuts.',
    category: 'Navigation',
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'Dropdown select with custom styling.',
    category: 'Forms',
  },
  {
    slug: 'seo',
    name: 'SEO',
    description: 'Page-level meta tags and JSON-LD structured data helper.',
    category: 'Utilities',
  },
  {
    slug: 'share-overlay',
    name: 'ShareOverlay',
    description: 'Share sheet with social links and copy-to-clipboard action.',
    category: 'Advanced',
  },
  {
    slug: 'sidebar-nav',
    name: 'SidebarNav',
    description: 'Collapsible sidebar with nested sections and badges.',
    category: 'Navigation',
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Placeholder shimmer blocks while content loads.',
    category: 'Feedback',
  },
  {
    slug: 'skip-link',
    name: 'SkipLink',
    description: 'Keyboard-accessible jump link to skip repetitive navigation.',
    category: 'Navigation',
  },
  {
    slug: 'slider',
    name: 'Slider',
    description:
      'Custom range input with label, ticks, and value display options.',
    category: 'Forms',
  },
  {
    slug: 'spacer',
    name: 'Spacer',
    description:
      'Insert responsive spacing between elements without extra wrappers.',
    category: 'Layout',
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    description: 'Animated loading indicator with size and color variants.',
    category: 'Feedback',
  },
  {
    slug: 'spotify-embed',
    name: 'SpotifyEmbed',
    description:
      'Responsive Spotify iframe for tracks, albums, playlists, and podcasts.',
    category: 'Media',
  },
  {
    slug: 'stack',
    name: 'Stack',
    description:
      'Flexbox utility for spacing elements vertically or horizontally.',
    category: 'Layout',
  },
  {
    slug: 'stat-card',
    name: 'StatCard',
    description:
      'Highlight KPIs with optional icons, deltas, and gradient variant.',
    category: 'Content',
  },
  {
    slug: 'stepper',
    name: 'Stepper',
    description:
      'Horizontal or vertical stepper to indicate multi-step progress.',
    category: 'Forms',
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle control with size variants and accessible labels.',
    category: 'Forms',
  },
  {
    slug: 'table-of-contents',
    name: 'TableOfContents',
    description: 'TOC for in-page headings with optional active highlighting.',
    category: 'Navigation',
  },
  {
    slug: 'table',
    name: 'Table',
    description:
      'Responsive data grid with zebra stripes, hover states, and caption support.',
    category: 'Content',
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description:
      'Accessible tabbed interface with keyboard-friendly behaviour.',
    category: 'Interactive',
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input with character counter.',
    category: 'Forms',
  },
  {
    slug: 'tiktok-embed',
    name: 'TikTokEmbed',
    description: 'Responsive TikTok video iframe with optional caption.',
    category: 'Media',
  },
  {
    slug: 'theme-toggle',
    name: 'ThemeToggle',
    description:
      'Client-side toggle to switch between light, dark, or system themes.',
    category: 'Navigation',
  },
  {
    slug: 'timeline',
    name: 'Timeline',
    description: 'Chronological event display with icons and status variants.',
    category: 'Content',
  },
  {
    slug: 'toast',
    name: 'Toast',
    description:
      'Stackable notification with status variants and auto-dismiss support.',
    category: 'Feedback',
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Accessible hover/focus tooltip with directional positioning.',
    category: 'Interactive',
  },
  {
    slug: 'twitter-embed',
    name: 'TwitterEmbed',
    description:
      'Embed a tweet with theme-aware styling and optional conversation controls.',
    category: 'Media',
  },
  {
    slug: 'universal-card',
    name: 'UniversalCard',
    description:
      'Flexible card for knowledge, playlists, sections, etc. Supports vertical, horizontal and compact layouts.',
    category: 'Content',
  },
  {
    slug: 'video',
    name: 'Video',
    description:
      'Responsive video player with caption support and custom poster.',
    category: 'Media',
  },
  {
    slug: 'vimeo-embed',
    name: 'VimeoEmbed',
    description:
      'Responsive Vimeo iframe with autoplay, loop, and muted controls.',
    category: 'Media',
  },
  {
    slug: 'visually-hidden',
    name: 'VisuallyHidden',
    description: 'Assistive-only wrapper for content read by screen readers.',
    category: 'Utilities',
  },
  {
    slug: 'youtube-embed',
    name: 'YouTubeEmbed',
    description: 'Responsive YouTube iframe with privacy-enhanced mode.',
    category: 'Media',
  },
  // API Components
  {
    slug: 'water-level',
    name: 'WaterLevel',
    description:
      'Live water levels from German rivers with flood warnings (PegelOnline API).',
    category: 'API',
  },
  {
    slug: 'fuel-prices',
    name: 'FuelPrices',
    description:
      'Current fuel prices from nearby gas stations (Tankerkönig API).',
    category: 'API',
  },
  {
    slug: 'currency-converter',
    name: 'CurrencyConverter',
    description: 'Exchange rates and currency calculator with 150+ currencies.',
    category: 'API',
  },
  {
    slug: 'github-repo',
    name: 'GitHubRepo',
    description: 'Repository cards with stars, forks, language and topics.',
    category: 'API',
  },
  {
    slug: 'nasa-apod',
    name: 'NasaApod',
    description: 'NASA Astronomy Picture of the Day with explanation.',
    category: 'API',
  },
  {
    slug: 'public-holidays',
    name: 'PublicHolidays',
    description: 'Public holidays by country with countdown (Nager.Date API).',
    category: 'API',
  },
  {
    slug: 'qr-code',
    name: 'QrCode',
    description: 'QR code generator for URLs, text, WiFi and more.',
    category: 'API',
  },
  {
    slug: 'random-quote',
    name: 'RandomQuote',
    description: 'Inspirational quotes with author (ZenQuotes API).',
    category: 'API',
  },
  {
    slug: 'crypto-price',
    name: 'CryptoPrice',
    description: 'Cryptocurrency prices with 24h change (CoinGecko API).',
    category: 'API',
  },
  {
    slug: 'trivia',
    name: 'Trivia',
    description: 'Interactive quiz with categories and difficulty levels.',
    category: 'API',
  },
  {
    slug: 'on-this-day',
    name: 'OnThisDay',
    description: "Historical events, births and deaths on today's date.",
    category: 'API',
  },
  {
    slug: 'train-departures',
    name: 'TrainDepartures',
    description: 'Live train departures from German stations with delays.',
    category: 'API',
  },
  {
    slug: 'speed-cameras',
    name: 'SpeedCameras',
    description: 'Speed camera locations with speed limits.',
    category: 'API',
  },
  {
    slug: 'recent-earthquakes',
    name: 'RecentEarthquakes',
    description:
      'Recent earthquakes worldwide with magnitude and location (USGS API).',
    category: 'API',
  },
  {
    slug: 'country-info',
    name: 'CountryInfo',
    description: 'Country cards with flag, capital, currencies and languages.',
    category: 'API',
  },
  {
    slug: 'movie-card',
    name: 'MovieCard',
    description: 'Movie and TV show info with poster and ratings (OMDB API).',
    category: 'API',
  },
  {
    slug: 'npm-package',
    name: 'NpmPackage',
    description:
      'NPM package info with version, downloads and install command.',
    category: 'API',
  },
  {
    slug: 'rust-crate',
    name: 'RustCrate',
    description:
      'Rust crate info with downloads and Cargo.toml syntax (crates.io).',
    category: 'API',
  },
  {
    slug: 'pypi-package',
    name: 'PypiPackage',
    description: 'Python package info with version and pip install command.',
    category: 'API',
  },
  {
    slug: 'rss-feed',
    name: 'RssFeed',
    description: 'RSS feed reader with thumbnails (RSS2JSON API).',
    category: 'API',
  },
  {
    slug: 'wiki-summary',
    name: 'WikiSummary',
    description: 'Wikipedia article summaries with images (REST API).',
    category: 'API',
  },
  {
    slug: 'pollen-forecast',
    name: 'PollenForecast',
    description: 'Pollen load levels from German Weather Service (DWD).',
    category: 'API',
  },
];
