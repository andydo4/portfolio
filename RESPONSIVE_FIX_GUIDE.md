# Responsive Design Fix Guide

## Pattern to Follow

All responsive classes need to be **mobile-first**:

### Mobile (Base - No Prefix)
- Stacked layouts: `flex-col`
- Full width: `w-full`
- Centered text: `text-center`
- Smaller text: `text-[50px]`
- Smaller heights: `h-[220px]`
- Hidden elements: `hidden`

### Desktop (md: prefix)
- Horizontal layouts: `md:flex-row`
- Fixed widths: `md:w-[560px]`
- Left-aligned text: `md:text-left`
- Larger text: `md:text-[64px]`
- Larger heights: `md:h-[413px]`
- Visible elements: `md:block`

## Common Replacements Needed

1. `sm:h-[220px]` → `h-[220px] md:h-[413px]`
2. `sm:text-[50px]` → `text-[50px] md:text-[64px]`
3. `sm:flex-col` → `flex-col md:flex-row`
4. `sm:w-full` → `w-full md:w-[560px]` (or appropriate desktop width)
5. `sm:hidden` → `hidden md:block`
6. `sm:text-center` → `text-center md:text-left`
7. `sm:text-left` → `text-left md:text-right` (when appropriate)
8. `sm:w-[75%]` → `w-[75%] md:w-[285px]`
9. `sm:mb-2` → `mb-2 md:mb-0`
10. `sm:flex-wrap` → `flex-wrap md:flex-nowrap`

## Files That Need Fixing

- app/projects/prod/page.tsx (partially fixed)
- app/f1stats/page.tsx
- app/onyx/page.tsx
- app/recrd/page.tsx

All `sm:` prefixes should be removed and replaced with mobile-first base styles + `md:` desktop styles.

