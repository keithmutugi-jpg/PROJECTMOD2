# Keith Tech Store

A responsive storefront built with vanilla HTML, CSS, and JavaScript. The homepage loads products from the public Fake Store API and renders them in a searchable product grid.

## Features

- Responsive layout for mobile, tablet, and desktop screens
- Public API integration using the Fake Store API
- Vanilla CSS with a three-color visual system
- Three font families: Fraunces, Space Grotesk, and IBM Plex Sans
- Unit tests for reusable JavaScript utilities
- GitHub Actions workflow for testing and GitHub Pages deployment

## Project structure

- `index.html` contains the storefront homepage
- `about.html` explains the design and implementation choices
- `style.css` contains all custom styles
- `scripts/` stores API and UI logic
- `tests/` contains unit tests run with `node --test`

## Run locally

1. Open the project in a browser with a local server.
2. Run `npm test` to execute the unit tests.

## Deployment

The workflow in `.github/workflows/deploy.yml` runs tests on every push to `main` or `master` and deploys the static site to GitHub Pages.

In the repository settings, set the Pages source to `GitHub Actions` so the workflow can publish the site.
