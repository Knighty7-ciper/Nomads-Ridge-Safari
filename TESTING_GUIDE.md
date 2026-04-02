# Testing Guide - What to Verify

## Quick Start - Test These Things Right Now

### 1. Landing Page Destinations Section
**Location**: Home page, scroll down after "What We Offer" section

**What You Should See**:
- ✓ Heading "Explore Kenya's Finest Destinations" appears with animation
- ✓ Large Maasai Mara card appears FIRST (featured)
- ✓ Small cards (Serengeti, Ngorongoro, Bwindi) cascade in sequence
- ✓ Cards animate upward with stagger delays (not all at once)
- ✓ On hover: Cards scale slightly and image brightness increases
- ✓ Layout is 1 column on mobile, 3 columns on tablet/desktop

**If Not Working**: Check browser console for errors. Ensure `/components/sections/destinations-dynamic.tsx` exists.

---

### 2. Package Pricing - KES Currency
**Location**: Home page, above Testimonials section

**What You Should See**:
- ✓ Classic Safari: **"KES 155,400"** (NOT "$2,500")
- ✓ Premium Explorer: **"KES 232,800"** (NOT "$4,500")
- ✓ Gorilla Quest: **"KES 323,750"** (NOT "$6,200")
- ✓ Each price has smaller text: "(USD $X,XXX equivalent)"
- ✓ Color is clay/ochre for primary price, dust/grey for USD equivalent

**If Not Working**: Check that `/lib/currency.ts` exists and `formatPrice()` is imported in packages component.

---

### 3. Destination Detail Pages
**Location**: Click on any destination card

**URL Pattern**: Should go to `/destinations/1`, `/destinations/2`, etc. (numeric IDs)

**What You Should See**:
- ✓ Large hero image at top (70vh = almost full screen height)
- ✓ Destination name as overlay on image with gradient
- ✓ Clean info grid below hero: Duration | Best Time | Activities | Price
- ✓ Description section with proper text styling
- ✓ Feature highlights section
- ✓ NO tabs (old design had tabs)
- ✓ Booking sidebar on right side (sticky on scroll)
- ✓ Mobile: Single column layout (no sidebar)
- ✓ Professional, modern design throughout

**If Not Working**: 
- Check that `/app/destinations/[id]/page.tsx` exists
- Verify `idMap` object has correct numeric to string mappings
- Check browser console for destination lookup errors

---

### 4. Animations on Scroll
**Location**: Anywhere on landing page

**What You Should See**:
- ✓ When page first loads: destination cards reveal one by one
- ✓ When you scroll to destination detail page: content fades in smoothly
- ✓ No jarring transitions
- ✓ All animations are smooth (60fps, no stuttering)
- ✓ Hover effects add interactive feedback

**If Not Working**: Check that `/app/globals.css` has animation classes (`.animate-revealUp`, `.stagger-1`, etc.)

---

### 5. Route Navigation
**Test All These Links**:

| Link | Should Go To | Should Show |
|------|-------------|------------|
| "Explore" on hero | `/destinations` | Destinations list |
| Destination card | `/destinations/1` | Maasai Mara detail |
| Serengeti card | `/destinations/3` | Serengeti detail |
| Ngorongoro card | `/destinations/4` | Ngorongoro detail |
| Bwindi card | `/destinations/5` | Bwindi detail |

**If Not Working**: Navigation links use numeric IDs, not slugs. Check that all links use correct format.

---

## Detailed Feature Testing

### Feature: Currency Conversion
```
Technical Test:
- Open browser DevTools Console
- Run: formatPrice(1000, 'KES')
- Should return: "KES 129,500"

Expected Result: Converts USD to KES at 129.50 rate
```

### Feature: Destination Animations
```
Visual Test:
1. Open landing page
2. Scroll to "Explore Kenya's Finest Destinations"
3. Watch cards appear one by one
4. Hover over a card
5. Card should scale to 105% and image brighten

Expected: Smooth cascade effect, not instant appearance
```

### Feature: Destination Detail ID Mapping
```
Technical Test:
- Visit `/destinations/1` in URL bar
- Should load Maasai Mara
- Visit `/destinations/3` 
- Should load Serengeti

Expected: Numeric IDs map correctly to destinations
```

---

## Responsive Design Testing

### Mobile (iPhone/Mobile Device)
- [ ] Hero image is full width
- [ ] Text is readable (not too small)
- [ ] Destination cards stack single column
- [ ] Booking sidebar becomes full width
- [ ] Hover effects don't trigger on touch
- [ ] Animations still play smoothly

### Tablet (iPad/Medium Screen)
- [ ] Hero image responsive
- [ ] Destination grid is 2 columns
- [ ] Text sizing appropriate
- [ ] Sidebar layout works well

### Desktop (1920px+)
- [ ] Hero image full viewport
- [ ] Destination grid is 3 columns
- [ ] Sidebar is sticky and visible
- [ ] All animations smooth at 60fps

---

## Common Issues & Solutions

### Issue: Prices still showing USD
**Cause**: formatPrice import not working
**Solution**: 
1. Check `/lib/currency.ts` exists
2. Verify packages component imports: `import { formatPrice } from '@/lib/currency'`
3. Check that `priceUSD` field is used (not `price`)

### Issue: Destination cards don't animate
**Cause**: CSS animations not loaded
**Solution**:
1. Check `/app/globals.css` has animation classes
2. Verify component uses classes like `animate-revealUp` and `stagger-1`
3. Check browser DevTools → Elements → Computed Styles

### Issue: Clicking destination goes to wrong page
**Cause**: ID mapping is incorrect
**Solution**:
1. Check `/app/destinations/[id]/page.tsx` has `idMap` object
2. Verify numeric ID matches string key (e.g., '1' → 'maasai-mara-safari')
3. Test in console: `idMap['1']` should return 'maasai-mara-safari'

### Issue: Layout looks broken on mobile
**Cause**: Responsive classes not applied
**Solution**:
1. Check component uses `md:` and `lg:` Tailwind prefixes
2. Test on actual mobile device (not just browser resize)
3. Check that grid uses `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Performance Testing

### Check Animation Performance
```
In Browser DevTools:
1. Open Performance tab
2. Record page load
3. Scroll to destinations section
4. Stop recording
5. Look for animation frames (should see 60fps, not drops)
```

### Check Bundle Size Impact
```
In Terminal:
npm run build

Look for:
- No new TypeScript errors
- Build completes successfully
- CSS bundle increased by ~5KB (acceptable)
- No new JS files added
```

---

## Sign-Off Checklist

Before marking as complete, verify:

- [ ] Landing page has dynamic destinations with animations
- [ ] All prices show KES (not USD)
- [ ] Destination detail pages are modern/clean
- [ ] Route navigation uses numeric IDs
- [ ] Animations play smoothly
- [ ] Mobile layout is responsive
- [ ] No TypeScript errors in console
- [ ] Build completes without errors
- [ ] All links navigate correctly

---

## Still Having Issues?

Check these files in order:
1. `/lib/currency.ts` - Currency conversion
2. `/components/sections/destinations-dynamic.tsx` - Landing page animations
3. `/app/destinations/[id]/page.tsx` - Detail page design & ID mapping
4. `/app/globals.css` - Animation definitions
5. `/app/page.tsx` - Landing page imports

All should exist and have correct imports.

---

**If all tests pass**: ✓ The build is ready for deployment
**If some tests fail**: Check the "Solutions" section above for specific issues

