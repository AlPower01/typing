# Typing.com — Design System

A reference for all design tokens, components, and patterns used across the marketing site.

---

## Colour Palette

### Brand Blues
| Token | Hex | Usage |
|---|---|---|
| Blue 900 | `#2A4365` | Nav background, footer, dark text on yellow CTAs |
| Blue 700 | `#2C5281` | Secondary button text, headings on light backgrounds |
| Blue 500 | `#3082CF` | Primary brand blue — links, accordion labels, active tabs, icon strokes |
| Blue 400 | `#64B4ED` | Borders on secondary buttons, dividers |
| Blue 300 | `#90CEF4` | Card borders, section borders, button shadows |
| Blue 200 | `#BCE2F8` | Badge borders, light rule lines |
| Blue 100 | `#DAF0FB` | Secondary button backgrounds |
| Blue 50 | `#EBF8FF` / `#F0F9FD` | Section backgrounds (blue theme) |
| Badge text | `#3082CF` | Badge pill text colour |

### CTA & Accent
| Token | Hex | Usage |
|---|---|---|
| Yellow CTA | `#FFCF46` | Primary sign-up / Get PLUS buttons |
| Yellow Shadow | `#E5BA3F` | 3D shadow beneath yellow buttons |
| PLUS Gold BG | `#FCF2D8` → `#F9E4B3` | PLUS column header gradient |

### Section Themes
Each page section has a theme variant that colours its background, badge, and icon stroke.

| Theme | Background | Border | Badge / Accent |
|---|---|---|---|
| `blue` | `#EBF8FF` | `#90CEF4` | `#3082CF` |
| `orange` | `#FEF3EC` | `#FAB889` | `#E8763A` |
| `green` | `#D7F4DB` | `#84DC91` | `#38A169` |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| Text Primary | `#212731` | Headings, strong body copy |
| Text Secondary | `#63676E` | Subtext, accordion body, panel descriptions |
| Text Tertiary | `#909398` | Inactive tab labels, metadata |
| Divider | `#EAEAEC` | Accordion row separators, fine rules |
| White | `#FFFFFF` | Card backgrounds, inverted text |

### Status / Semantic
| Token | Hex | Usage |
|---|---|---|
| Green Check | `#38A169` | Tick marks in safety section |
| Blue Check | `#3082CF` | Tick marks in plus table |

---

## Typography

**Font Family:** `Nunito`, sans-serif (applied globally via `layout.tsx`)

### Scale
| Role | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Hero H1 | 54px | 700 | 1.1 | Responsive down to 28px @ 640px |
| Section H2 | 38px | 700 | 1.15 | Responsive down to 26px @ 600px |
| Card / Panel H3 | 24px | 700 | 1.2 | Responsive down to 20px @ 600px |
| Pricing Headline | 32px | 700 | 1.15 | Inside PlusSection card |
| Subtitle (large) | 20px | 500 | 1.6 | Hero subtitle, section intro |
| Subtitle (medium) | 18px | 500 | 1.65 | Panel descriptions |
| Body | 16px | 500 | 1.65 | Accordion text, list items |
| UI / Tab | 15px | 700–800 | — | Feature tabs |
| Badge / Label | 13–14px | 800 | — | Uppercase, letter-spacing 0.03–0.08em |
| Footer | 14px | 400–700 | 1.6 | Footer columns |

### Conventions
- Headings always in `#212731`
- Body / secondary copy in `#63676E`
- Tertiary / placeholder in `#909398`
- Uppercase text gets `letter-spacing: 0.03em` to `0.08em`
- Buttons always `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: 0.04em`

---

## Spacing & Layout

### Container
- **Max width:** `1368px`
- **Horizontal gutter:** `36px` desktop → `24px` tablet → `20px` mobile
- Consistent across all sections via `padding: 0 36px`

### Section Vertical Rhythm
| Context | Padding |
|---|---|
| Standard section | `72px 0` |
| Hero banner | `64px 0` (outer wrap) |
| Plus section | `96px 0` |
| Safety section | `88px 0 80px` |
| Footer | `72px 0 40px` |

### Common Gaps
| Use | Value |
|---|---|
| Badge → heading | `16–20px` |
| Heading → subtitle | `12–16px` |
| Subtitle → component | `24–40px` |
| Card grid gap | `24–32px` |
| Accordion row | `0` (borders divide rows) |
| Icon → label in card | `10–12px` |

---

## Borders & Radius

| Context | Radius |
|---|---|
| Page-level section card | `24px` |
| Hero banner | `24px` → `16px` @ mobile |
| CTA buttons | `18px` |
| Feature tab bar card | `24px` |
| Dropdown / pill menus | `16px` |
| FAQ items | `12px` |
| Feature tab pills | `8px` |
| Badge / chip | `999px` (fully round) |

**Common border style:** `1px solid` using the section's border token (e.g. `#90CEF4` for blue sections).

---

## Shadows & Depth

### Button 3D Press Effect
Buttons use a fixed-colour `box-shadow` to simulate a 3D press. On hover the shadow compresses; on active it disappears.

```css
/* Resting */
box-shadow: 0 6px 0 <shadow-colour>;
/* Hover */
transform: translateY(3px);
box-shadow: 0 3px 0 <shadow-colour>;
/* Active */
transform: translateY(6px);
box-shadow: 0 0 0 <shadow-colour>;
transition: transform 0.08s ease, box-shadow 0.08s ease;
```

| Button type | Shadow colour |
|---|---|
| Yellow CTA | `#E5BA3F` |
| Blue secondary | `#90CEF4` |
| PLUS CTA (in PlusSection) | `#E5BA3F` |

### Elevation
| Context | Shadow |
|---|---|
| Nav on scroll | `0 2px 16px rgba(0,0,0,0.08)` |
| Floating hero cards | `0 4px 24px rgba(0,0,0,0.09)` |
| Dropdown panels | `0 6px 16px rgba(0,0,0,0.08)` |
| Mobile menu | `0 8px 24px rgba(0,0,0,0.08)` |

---

## Animation & Transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| Button press | `transform`, `box-shadow` | `0.08s` | `ease` |
| Accordion open/close | `grid-template-rows` | `0.25s` | `ease` |
| Curriculum bar slide | `top` | `0.22s` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Nav dropdown fade | `opacity`, `transform` | `0.15s` | `ease` |
| Tab/link hover colour | `color`, `background` | `0.15s` | `ease` |
| Chevron rotate | `transform` | `0.2s` | `ease` |

---

## Breakpoints

Desktop-first. All overrides use `@media (max-width: N)`.

| Name | Value | What changes |
|---|---|---|
| Wide | `1300px` | Hero font reduces |
| Mid-desktop | `1100px` | Section titles reduce, tab padding tightens, Plus grid narrows |
| Tablet-wide | `960px` | PlusSection stacks intro above table |
| Tablet | `860px` | Panels stack vertically, stats go 2-col, hero image hides |
| Tablet-small | `768px` | Nav collapses to hamburger |
| Mobile-wide | `640px` | Nav dropdown replaces tab bar in FeaturesSection |
| Mobile | `600px` | Further font reductions, single-column stats |
| Mobile-small | `480px` | Smallest font sizes, 1-col layouts, hidden hero images |

---

## Components

### `HeroBanner`
Full-width banner with coloured background, decorative blob SVGs, headline, subtitle, CTA, and an optional hero image.

**Key props:** `bgColor`, `textColor`, `blobLeft`, `blobRight`, `title`, `subtitle`, `ctaText`, `ctaHref`, `heroImg`, `heroImgWidth`, `heroAlt`

- Height: `580px` → scales down to `auto` @ 640px
- Left content: max 50% width, padding `0 32px 0 68px`
- Hero image: positioned right, `object-fit: contain`
- CTA uses the yellow 3D button style

---

### `StatsBar`
Horizontal band showing a tagline and 3–4 stats in a responsive grid.

**Key props:** `tagline`, `stats: { number, label }[]`

- Background: white with top/bottom `1px solid #BCE2F8` borders
- Stat number: `36px`, weight 800, `#212731`
- Stat label: `14px`, weight 600, `#63676E`
- Dividers between stats via `border-right`

---

### `FeaturesSection`
Tabbed interface with an image panel. Used for both Student and Teacher/Instructor feature sets.

**Key props:** `variant` (`student` | `teacher`), `theme` (`orange` | `blue` | `green`), `badge`, `title`, `subtitle`, `tabs`, `panels`

**Panel object:**
```ts
{
  title: string
  imgSrc: string
  imgAlt: string
  accordionItems?: { label: string; text: string }[]
  paragraphs?: string[]
  bullets?: { html: string }[]
  desc?: string
  ctaText?: string
  ctaHref?: string
}
```

- Card background: white, border `1px solid #90CEF4`, radius `24px`
- Active tab: `#3082CF` background, white text, weight 800
- Inactive tab: transparent, `#909398` text, weight 700
- Accordion label: `#3082CF`, 18px, weight 700 — hover `#1a5fa8`
- Image: `fill` layout with `object-fit: contain`
- Mobile: tabs replaced with a custom `<select>`-style dropdown at ≤640px

---

### `CurriculumSection`
Dark blue section with a vertical list of curriculum categories. Clicking a category updates a content panel on the right with a smooth sliding blue indicator bar.

- Background: `#2a4365`
- Category list: `52px` item height, sliding blue bar indicator
- Indicator: single `<span>` positioned `top: activeIndex * 52px`, `transition: top 0.22s cubic-bezier(...)`
- Panel right: white card, `24px` radius, `object-fit: contain` image
- Badge above title: `rgba(255,255,255,0.12)` background, `#90CEF4` text

---

### `RosteringSection`
Highlights rostering / SSO integration partners (Google, Clever, ClassLink, Microsoft).

---

### `AccessibilitySection`
Card grid showcasing accessibility features. Accepts `cards` prop.

**Card object:** `{ iconSrc, title, desc }`

- Grid: 4 columns → 2 → 1 at mobile
- Icon: `48px` with coloured background circle

---

### `PlusSection`
Feature comparison table (Free vs PLUS) with an optional pricing card.

**Key props:** `rows: { feature, free, plus }[]`, `showPricing?: boolean` (default `true`)

**Layout:**
- Two-column layout: intro text left, comparison grid right
- At ≤960px: stacks vertically (intro above table)
- Grid columns: `1fr 210px 217px` → `1fr 160px 167px` @ 1100px

**Tick marks:**
- PLUS ✓: `22×22px` SVG circle with white checkmark on `#3082CF`
- Free ✓: same on `#3082CF`
- Free ✗: `—` dash in muted colour

**Pricing card** (`showPricing: true`):
- Crown icon: `96px`
- Headline: `32px`, weight 700
- Glassmorphism panel: `rgba(69,142,212,0.8)` + `backdrop-filter: blur(10px)`

**Standalone CTA** (`showPricing: false`):
- Gold "Get PLUS Now" button with crown icon
- Shown on Homeschool page only

---

### `IndivPlusSection`
Two-column card layout for the Individual page upgrade prompt. Not to be confused with `PlusSection`.

- Top card: coloured accent strip + headline + description
- Bottom card: icon grid showing individual plan benefits
- CTA bar: full-width strip with yellow button
- Section padding: `64px 0`

---

### `SafetySection`
Split layout — shield illustration left, privacy bullet points right.

**Key props:** `theme` (`orange` | `blue` | `green`), `description`

- Left: `shield_safety.svg` with 3 floating trust-badge cards
- Right: badge, H2, subtitle, 5 `→` bullet points (bold label + description), plain-text Privacy Policy link
- Bullet icon `→` coloured to match theme `iconStroke`
- Privacy Policy link: theme colour, `text-decoration: underline`

---

### `StandardsSection`
Shows national curriculum standards and state-specific alignments.

---

### `FaqSection`
Accordion list of FAQs.

**Key props:** `items: { question, answer }[]`

- Question text: `#3082CF`, weight 700, `18px` — hover `#1a5fa8`
- Answer text: `#63676E`, `16px`
- Item background: `#F7FDFF`
- Border: `1px solid #BCE2F8`, radius `12px`
- `+` icon rotates `45deg` when open

---

### `SiteNav`
Sticky top navigation. Transparent on the home page, white with shadow on all other pages.

- Height: `90px`
- Logo: `174×38px`
- "Typing for" dropdown: hover-activated (120ms close delay via `useRef` timeout to bridge the gap)
- Dropdown panel: `437px` wide, `16px` radius, dark blue background
- CTA button: yellow 3D style, `14px 24px` padding
- Mobile: hamburger at ≤768px, full-height slide-in panel

---

### `SiteFooter`
Dark blue footer with 4 columns of links + bottom bar.

- Background: `#2A4365`
- Column headings: `#90CEF4`, `13px`, uppercase, weight 800
- Links: white, `14px`, weight 500
- Bottom bar: `rgba(255,255,255,0.1)` separator, copyright + Teaching.com logo
- Teaching.com logo: `filter: brightness(0) opacity(0.65)` to match text colour

---

### `HomeFooter`
Minimal footer shown only on the home page. Sits flush at the bottom using a flex-column layout on `.home-page` (`min-height: calc(100vh - 90px)`).

---

## Page Themes

| Page | Hero BG | Section Theme | Blobs |
|---|---|---|---|
| `/educator` | `#FEF3EC` | `orange` | `orange_squircle_left/right.svg` |
| `/homeschool` | `#D7F4DB` | `green` | `home_left/right_squircle.svg` |
| `/individual` | `#EBF8FF` | `blue` | `individual_hero_left/right_squircle.svg` |
| `/` (home) | White | — | — |

---

## Image Assets

### Hero & Section Images
| File | Used in |
|---|---|
| `educator_hero.png` | Educator hero |
| `home_hero.png` | Homeschool hero |
| `individual_hero.png` | Individual hero |
| `edu_features_img.png` | Teacher/Admin & Instructor feature panels |
| `typing1.png` | Student feature panels |
| `shield_safety.svg` | Safety section illustration |

### Persona Illustrations (Nav Dropdown)
| File | Persona |
|---|---|
| `educator_illo.svg` | Educator |
| `homeschool_illo.svg` | Homeschool |
| `individual_illo.svg` | Individual |

### Persona Thumbnails (Home Cards)
| File | Persona |
|---|---|
| `educator_thumb.png` | Educator |
| `homeschool_thumb.png` | Homeschool |
| `individual_thumb.png` | Individual |

### Trust / Safety Badges
`ssl1.png`, `pentest1.png`, `edtech1.png`, `google1.png`, `wcag.svg`

### Decorative
| File | Usage |
|---|---|
| `home_left/right_squircle.svg` | Homeschool hero blobs |
| `orange_squircle_left/right.svg` | Educator hero blobs |
| `individual_hero_left/right_squircle.svg` | Individual hero blobs |
| `footer_bottomleft/right.svg` | Footer corner decoration |
| `plus_bottom_left_squircle.svg` | PlusSection background |
| `curriculum_deco_a–d.svg` | CurriculumSection panel backgrounds |
| `crown.svg`, `crown_icon.svg`, `crown_logo.svg` | PLUS branding |
| `dashed_line.svg` | Decorative divider |

### Accessibility Icons
`keyboard.svg`, `screenreader.svg`, `dictation.svg`, `closed.svg`

### Individual PLUS Cards
`indiv_plus_ads.png` (ad-free), `indiv_plus_keys.png` (keyboard)

---

## Z-Index Hierarchy

| Layer | z-index |
|---|---|
| Site navigation | `1000` |
| Mobile nav menu | `999` |
| Nav persona dropdown | `200` |
| Feature tab dropdown (mobile) | `50` |
| Glass pricing panel | `2` |
| Floating hero cards | `2` |
| Curriculum indicator bar | `1` |

---

## Accessibility Conventions

- All sections use semantic `<section>` with `aria-label`
- Accordion triggers use `aria-expanded`
- Dropdowns use `aria-haspopup="true"` and `aria-expanded`
- Decorative elements: `aria-hidden="true"`
- Icon-only buttons include screen-reader text or `aria-label`
- Colour contrast maintained: primary text `#212731` on white exceeds WCAG AA
- Platform is WCAG 2.2 AA certified

---

## Key Conventions Summary

1. **No CSS framework** — all styles are inline or in scoped `<style>` blocks within components
2. **Desktop-first** responsive with `max-width` media queries
3. **36px horizontal gutter** everywhere — never 24px or 48px at the component level
4. **Yellow button = primary CTA** (sign up, get plus), **blue button = secondary** (learn more)
5. **Accordion labels** are always `#3082CF` with `#1a5fa8` on hover
6. **Badges/pills** always use `border-radius: 999px` and are uppercase weight 800
7. **3D button press** is the single consistent interaction pattern for all CTAs
8. **Theme variants** (orange / blue / green) affect section background, border, badge colour, and icon stroke only — layout never changes between themes
