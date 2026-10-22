# AGENTS.md

## Rules

- Keep the two environment images in a dedicated Embla carousel with a fixed aspect ratio and contain fitting, so the section stays compact without cropping either image; autoplay runs only in view and respects reduced motion.

- In `src/components/PlaceCarousel.tsx`, slide spacing must come from horizontal padding on each slide, not a flex `gap` on the track: with `loop: true`, Embla's wrap offset ignores the trailing gap, so the last and first photos touch at the seam.
