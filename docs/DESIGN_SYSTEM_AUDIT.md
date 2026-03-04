# Design System Audit & Recommendations

## Issues Identified

### 1. **Color Inconsistency**
- **Problem**: Mixing `text-gray-*` and `text-neutral-*` throughout pages
- **Impact**: Inconsistent visual appearance, harder maintenance
- **Example**: Homepage uses both `text-gray-900` and `text-neutral-900`

### 2. **Hardcoded Values**
- **Problem**: Magic numbers like `text-[2.75rem]`, `leading-[0.95]`
- **Impact**: Not part of design system, breaks scalability
- **Count**: 10+ instances across pages

### 3. **Repetitive Dark Mode Classes**
- **Problem**: Every element has `transition-colors duration-300`
- **Impact**: Code bloat, inconsistent timing values
- **Solution**: Create utility classes or use Tailwind's @apply

### 4. **CSS Variable Underutilization**
- **Problem**: CSS variables defined but Tailwind classes used instead
- **Impact**: Two parallel systems, confusion

### 5. **No Semantic Color Names**
- **Problem**: Direct color references (gray-900, neutral-700)
- **Impact**: Hard to maintain consistent meaning across design

### 6. **Typography Scale Issues**
- **Problem**: Inconsistent font sizes across similar elements
- **Example**: Body text varies between text-sm, text-base, text-lg

### 7. **Spacing Inconsistencies**
- **Problem**: Random spacing values (mb-8, mb-12, mb-16)
- **Impact**: No clear rhythm or scale

### 8. **Component Coupling**
- **Problem**: CTA component has hardcoded colors instead of variants
- **Impact**: Not reusable, breaks component pattern

## Recommendations

### Priority 1: Standardize Color System
1. Choose ONE gray scale (gray or neutral, not both)
2. Create semantic color tokens
3. Update Tailwind config with semantic names

### Priority 2: Remove Hardcoded Values
1. Add custom values to Tailwind config
2. Replace all arbitrary values with scale values

### Priority 3: Create Utility Classes
1. Add transition defaults to base styles
2. Create text hierarchy classes
3. Standardize spacing scale

### Priority 4: Component Refactoring
1. Make CTA use Section variants
2. Ensure all components accept variant props
3. Remove inline color definitions

### Priority 5: Documentation
1. Create component usage guide
2. Document color decisions
3. Create spacing/typography scale reference

