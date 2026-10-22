# AGENTS.md

## Rules

- In `src/components/PlaceCarousel.tsx`, slide spacing must come from horizontal padding on each slide, not a flex `gap` on the track: with `loop: true`, Embla's wrap offset ignores the trailing gap, so the last and first photos touch at the seam.
