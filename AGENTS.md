# AGENTS.md

## Rules

- In `src/components/PlaceCarousel.tsx`, slide spacing must come from horizontal padding on each slide, not a flex `gap` on the track: with `loop: true`, Embla's wrap offset ignores the trailing gap, so the last and first photos touch at the seam.
- On dark surfaces such as the footer, use the background-removed logo crop (`src/assets/logo-isotipo-negro.webp`) laid directly on the surface; the cream-background `logo.webp` must never sit on dark or get a colored plate or frame behind it, because it reads as a box inside a box.
