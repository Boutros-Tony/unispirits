# UniSpirits Style Guide

## Brand Colors

- **Red**: `#CB0D1B` (CSS variable: `--brand-red`)
- **Black**: `#000000` (CSS variable: `--brand-black`)
- **White**: `#FFFFFF` (CSS variable: `--brand-white`)

## Typography

### Font Loading System _(Next.js Optimized)_

All fonts are loaded using **Next.js `localFont`** for optimal performance:

- ⚡ **Automatic preloading**
- 🎨 **Font-display: swap**
- 📦 **Optimized bundle delivery**
- 🚀 **Zero layout shift**

### Font Families

#### **Primary: Helvetica Neue** _(Main brand font)_

- **Medium (500)**: Body text and UI elements
- **Bold (700)**: Headings and emphasis
- **Files**: `HelveticaNeueMedium.otf`, `HelveticaNeueBold.otf`
- **Variable**: `--font-helvetica-neue`

#### **Signature: Photograph Signature** _(Decorative)_

- **Regular (400)**: Special decorative elements
- **File**: `Photograph-Signature.ttf`
- **Variable**: `--font-photograph`

#### **Supporting: Mohave** _(Modern sans-serif)_

- **Light (300)**: Supporting text
- **Italic (400)**: Emphasis and accents
- **Files**: `mohave-light-webfont.woff2`, `mohave-italic-webfont.woff2`
- **Variable**: `--font-mohave`

## Modular Class System

### Title Classes (Helvetica Neue Bold)

#### Usage Pattern

```html
<element className="title {size} {color}">Content</element>
```

#### Available Combinations

**Large Titles (35px)**

- `title large red` - 35px, Red, Helvetica Neue Bold
- `title large black` - 35px, Black, Helvetica Neue Bold
- `title large white` - 35px, White, Helvetica Neue Bold

**Medium Titles (33px)**

- `title medium red` - 33px, Red, Helvetica Neue Bold
- `title medium black` - 33px, Black, Helvetica Neue Bold
- `title medium white` - 33px, White, Helvetica Neue Bold

### Signature Classes (Photograph Signature)

#### Usage Pattern

```html
<element className="signature {size} {color}">Content</element>
```

#### Available Combinations

**Large Signature (48px)**

- `signature large red` - 48px, Red, Signature font
- `signature large black` - 48px, Black, Signature font
- `signature large white` - 48px, White, Signature font

**Medium Signature (32px)**

- `signature medium red` - 32px, Red, Signature font
- `signature medium black` - 32px, Black, Signature font
- `signature medium white` - 32px, White, Signature font

### Mohave Classes (Supporting Font)

#### Usage Pattern

```html
<element className="mohave {weight} {size} {color}">Content</element>
```

#### Weight Modifiers

- `mohave light` - Light weight (300)
- `mohave italic` - Italic style (400)

#### Size Options

- `mohave {weight} large {color}` - 24px
- `mohave {weight} medium {color}` - 18px

#### Examples

```html
<p className="mohave light large black">Supporting content</p>
<p className="mohave italic medium red">Emphasized text</p>
```

## Usage Examples

```jsx
// Main heading - Helvetica Neue Bold
<h1 className="title large red">UniSpirits</h1>

// Section header - Helvetica Neue Bold
<h2 className="title medium black">Our Story</h2>

// Decorative element - Signature font
<h3 className="signature large red">Handcrafted</h3>

// Supporting text - Mohave Light
<p className="mohave light large black">Premium spirits collection</p>

// Emphasis text - Mohave Italic
<span className="mohave italic medium red">Limited Edition</span>
```

## Benefits of the Font System

✅ **Performance**: Next.js optimized loading with zero layout shift  
✅ **Consistent**: Exact same fonts across all devices  
✅ **Composable**: Mix sizes, weights, and colors freely  
✅ **Professional**: Premium typography with proper licensing  
✅ **Scalable**: Easy to add new fonts or modify existing ones

## Responsive Behavior

- **Mobile (<768px)**:
  - Title large: 35px → 28px
  - Title medium: 33px → 26px
  - Signature large: 48px → 36px
  - Signature medium: 32px → 24px
  - Mohave large: 24px → 20px
  - Mohave medium: 18px → 16px

## CSS Variables Available

### Font Variables

- `--font-helvetica-neue`: Main brand font
- `--font-photograph`: Signature decorative font
- `--font-mohave`: Supporting sans-serif font

### Colors

- `--brand-red`: #CB0D1B
- `--brand-black`: #000000
- `--brand-white`: #FFFFFF
- `--bg-primary`: White background
- `--bg-secondary`: Black background
- `--text-primary`: Black text
- `--text-secondary`: Red text
- `--text-inverse`: White text

## Next Steps

Your font system is complete! You can now:

- Use any combination of fonts, sizes, and colors
- Add more font files to the `/public/fonts/` directory
- Extend the system with new weight or style modifiers
- Build your content with professional typography
