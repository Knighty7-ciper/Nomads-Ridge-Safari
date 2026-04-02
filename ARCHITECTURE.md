# Site Architecture - Nomads Ridge Safari

## Component Structure

```
App Root
├── Layout (/app/layout.tsx)
│   └── Navigation & Footer (shared across all pages)
│
├── Page: Home (/)
│   ├── Hero Section
│   ├── Trust Section (testimonials)
│   ├── DestinationsDynamic ← NEW
│   │   ├── Featured Card (Maasai Mara) [animate-revealUp, stagger-1]
│   │   └── Small Cards [stagger-2 through stagger-5]
│   ├── Experience Section
│   ├── PackagesPremium
│   │   ├── Currency Utility (lib/currency.ts) ← NEW
│   │   ├── Classic Safari (KES 155,400)
│   │   ├── Premium Explorer (KES 232,800)
│   │   └── Gorilla Quest (KES 323,750)
│   ├── Process Section
│   ├── TestimonialsPremium
│   └── Contact Section
│
├── Page: Destinations List (/destinations)
│   ├── Header
│   └── Destination Cards
│       ├── ID: '1' → Link: /destinations/1
│       ├── ID: '2' → Link: /destinations/2
│       ├── ID: '3' → Link: /destinations/3
│       ├── ID: '4' → Link: /destinations/4
│       ├── ID: '5' → Link: /destinations/5
│       └── ID: '6' → Link: /destinations/6
│
├── Page: Destination Detail (/destinations/[id])
│   ├── ID Mapping Layer ← NEW
│   │   └── idMap = {'1': 'maasai-mara-safari', ...}
│   ├── Hero Section
│   │   ├── Large Image (70vh)
│   │   ├── Title Overlay (animate-revealDown)
│   │   └── Gradient (animate-scaleIn)
│   ├── Info Grid
│   │   ├── Duration (stagger-1)
│   │   ├── Best Time (stagger-2)
│   │   ├── Activities (stagger-3)
│   │   └── Price Per Person (stagger-4)
│   ├── Description (animate-revealUp)
│   ├── Features Section (feature list)
│   ├── Gallery (image carousel)
│   ├── Testimonials Section
│   └── Booking Sidebar (sticky)
│
├── Page: Blog (/blog)
│   ├── Articles Grid
│   └── TestimonialsPremium
│
├── Page: About (/about)
│   ├── Mission & Values
│   ├── TestimonialsPremium
│   └── FAQ Section
│
└── Components
    ├── sections/
    │   ├── destinations-dynamic.tsx ← NEW
    │   ├── packages-premium.tsx (updated with currency)
    │   ├── testimonials-premium.tsx
    │   ├── process-section.tsx
    │   ├── faq-section.tsx
    │   └── ... other sections
    ├── layout/
    │   ├── footer.tsx
    │   ├── header.tsx
    │   └── navigation.tsx
    └── ui/
        └── ... shadcn components
```

---

## Data Flow Architecture

### Currency Conversion Flow
```
Package Component
├── Import formatPrice()
├── Pass priceUSD to formatPrice(1200, 'KES')
├── formatPrice() function
│   ├── Check currency type (KES or USD)
│   ├── If KES: multiply by 129.50 exchange rate
│   ├── Format using Intl.NumberFormat
│   └── Return "KES 155,400"
└── Display in UI
```

### Destination Navigation Flow
```
User clicks destination card (e.g., Serengeti)
├── Link href="/destinations/3"
├── Route parameter: { id: '3' }
├── [id]/page.tsx receives params
├── idMap lookup: '3' → 'serengeti-tanzania'
├── destinations object lookup: destinations['serengeti-tanzania']
├── Render page with destination data
└── Display Serengeti detail page
```

### Animation Flow
```
Component mounts
├── CSS classes applied: .animate-revealUp, .stagger-2, etc.
├── globals.css defines @keyframes revealUp
├── Browser renders animation:
│   ├── Start: opacity 0, translateY 40px
│   ├── Animation duration: 0.8s
│   ├── Timing: ease-out
│   ├── Stagger delay: 0.2s (for .stagger-2)
│   └── End: opacity 1, translateY 0
├── GPU acceleration: transform + opacity
├── Result: 60fps smooth animation
└── User sees element reveal upward
```

---

## File Dependencies

```
app/
├── page.tsx
│   ├── → components/sections/destinations-dynamic.tsx
│   │       └── → (uses data locally, no imports)
│   ├── → components/sections/packages-premium.tsx
│   │       └── → lib/currency.ts
│   └── → components/sections/testimonials-premium.tsx
│
├── destinations/page.tsx
│   └── → (local destination data)
│
├── destinations/[id]/page.tsx
│   ├── → components/sections/testimonials-premium.tsx
│   └── → (local destination data + ID mapping)
│
├── globals.css ← animation definitions
│   └── @keyframes revealUp, revealDown, staggerFadeIn
│       and .stagger-1 through .stagger-6 utilities
│
└── layout.tsx
    ├── → components/layout/header.tsx
    └── → components/layout/footer.tsx

lib/
└── currency.ts ← used by packages component
    └── formatPrice(priceUSD, currency)
```

---

## Animation System Architecture

```
globals.css (Central Animation Library)
├── Keyframe Definitions
│   ├── @keyframes slideUp (0.6s)
│   ├── @keyframes slideIn (0.4s)
│   ├── @keyframes scaleIn (0.5s)
│   ├── @keyframes rotateIn (0.6s)
│   ├── @keyframes fadeInUp (0.6s)
│   ├── @keyframes pulse (3s infinite)
│   ├── @keyframes revealUp (0.8s) ← NEW
│   ├── @keyframes revealDown (0.8s) ← NEW
│   └── @keyframes staggerFadeIn (0.6s) ← NEW
│
├── Animation Classes
│   ├── .animate-slideUp → animation: slideUp
│   ├── .animate-slideIn → animation: slideIn
│   ├── .animate-scaleIn → animation: scaleIn
│   ├── .animate-rotateIn → animation: rotateIn
│   ├── .animate-fadeInUp → animation: fadeInUp
│   ├── .animate-pulse-slow → animation: pulse (3s)
│   ├── .animate-revealUp → animation: revealUp (0.8s) ← NEW
│   ├── .animate-revealDown → animation: revealDown (0.8s) ← NEW
│   └── .animate-staggerFadeIn → animation: staggerFadeIn (0.6s) ← NEW
│
└── Stagger Delay Classes ← NEW
    ├── .stagger-1 → animation-delay: 0.1s
    ├── .stagger-2 → animation-delay: 0.2s
    ├── .stagger-3 → animation-delay: 0.3s
    ├── .stagger-4 → animation-delay: 0.4s
    ├── .stagger-5 → animation-delay: 0.5s
    └── .stagger-6 → animation-delay: 0.6s
```

---

## Responsive Breakpoints

```
Mobile (default - 0px to 640px)
├── Destination cards: 1 column
├── Package cards: 1 column (stacked)
├── Booking sidebar: full width
└── Hero sections: full viewport height

Tablet (md: 768px to 1024px)
├── Destination cards: 2 columns
├── Package cards: 2 columns
├── Booking sidebar: side-by-side
└── Hero sections: optimized height

Desktop (lg: 1024px+)
├── Destination cards: 3 columns
├── Package cards: 3 columns
├── Booking sidebar: sticky on right
└── Hero sections: large immersive (70vh)
```

---

## TypeScript Type Definitions

```typescript
// Destination (in [id]/page.tsx)
type Destination = {
  id: string
  name: string
  location: string
  rating: number
  reviews: number
  basePrice: number
  duration: string
  bestTime: string
  groupSize: string
  difficulty: string
  image: string
  images: string[]
  description: string
  highlights: string[]
  activities: string[]
  accommodations: string[]
}

// ID Mapping
type IDMap = { [key: string]: string }
// Usage: idMap['1'] returns 'maasai-mara-safari'

// Package (in packages-premium.tsx)
interface Package {
  id: string
  name: string
  duration: string
  priceUSD: number
  description: string
  features: string[]
  isFeatured?: boolean
  image_color?: string
}

// Currency
type CurrencyCode = 'KES' | 'USD'
// Usage: formatPrice(1200, 'KES') returns "KES 155,400"
```

---

## Performance Optimization

```
CSS Animations (GPU-Accelerated)
├── Use transform: translateY() ← hardware-accelerated
├── Use opacity changes ← hardware-accelerated
├── Never animate: width, height, left, top (causes reflow)
└── Result: 60fps performance, no jank

Code Splitting
├── Components are separate files (automatic code splitting)
├── Each route loads only necessary components
├── Currency utility is tiny (56 lines)
└── No large bundle size impact

Lazy Loading
├── Images use Next.js Image component (optimized)
├── Destination detail page lazy-loads images
└── No performance degradation on slow networks
```

---

## Configuration & Customization Points

```
1. Currency Exchange Rate
   └── /lib/currency.ts
       └── EXCHANGE_RATES.USD_TO_KES = 129.50 ← Change here

2. Destination Data
   └── /app/destinations/[id]/page.tsx
       └── destinations object ← Add/edit destinations

3. Animation Timing
   └── /app/globals.css
       └── @keyframes definitions ← Adjust duration/easing

4. Destination ID Mapping
   └── /app/destinations/[id]/page.tsx
       └── idMap object ← Map numeric IDs to strings

5. Stagger Delays
   └── /app/globals.css
       └── .stagger-1 through .stagger-6 ← Adjust delays
```

---

## Build & Deployment

```
Development
├── npm run dev
├── Hot reload enabled
├── All animations visible in real-time
└── TypeScript checking enabled

Production
├── npm run build
├── Static optimization applied
├── CSS minified
├── Component code splitting active
└── Ready to deploy to Vercel

Vercel Deployment
├── Auto-detects Next.js project
├── Builds on push to main
├── Environment variables managed
├── CDN distribution active
└── SSL/HTTPS automatic
```

---

## Summary

This architecture provides:
- ✓ Clean component organization
- ✓ Reusable utility functions (currency)
- ✓ Scalable data structure
- ✓ Performance optimized (CSS animations, code splitting)
- ✓ Easy to maintain and extend
- ✓ TypeScript type safety throughout
- ✓ Mobile-first responsive design
- ✓ Professional animation system

