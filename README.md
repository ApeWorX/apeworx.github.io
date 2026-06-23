# ApeWorX Documentation Hub

- URL: https://docs.apeworx.io/
- Github Repo: https://github.com/ApeWorX/apeworx.github.io

The documentation hub is the top-level index for ApeWorX documentation and maintained Python Ethereum packages.

This is a pure static site built with HTML, CSS, and Alpine.js. Package links are maintained in `site.js`.

## Local Development

```bash
python3 -m http.server 3000
```

The site is served from the repository root at http://localhost:3000.

## Deploy

GitHub Pages should be configured to serve from the root folder of the default branch. No package manager, build step, or GitHub Actions workflow is required.

## Creating Documentation in the Ape Ecosystem

To quickly set up ape-like docs for your repo, please follow the instructions at https://docs.apeworx.io/docs-template/userguides/quickstart.html
