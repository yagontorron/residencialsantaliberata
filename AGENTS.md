# AGENTS.md

## Rules

- In `src/components/PlaceCarousel.tsx`, slide spacing must come from horizontal padding on each slide, not a flex `gap` on the track: with `loop: true`, Embla's wrap offset ignores the trailing gap, so the last and first photos touch at the seam.
- In the footer, display the complete original logo (`src/assets/logo.webp`, cream paper, illustration + baked-in wordmark) as-is: no background removal, no cropped transparent PNG, no colored plate behind it — the user rejected both the plate and the background-removed crop.
