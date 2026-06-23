# ApeWorX Documentation Hub

- URL: https://docs.apeworx.io/
- Github Repo: https://github.com/ApeWorX/apeworx.github.io

The documentation hub is the top-level index for ApeWorX documentation and maintained Python Ethereum packages.

This is a pure static site built with HTML, CSS, and Alpine.js. Package links are maintained in `src/site.js`.

## Local Development

```bash
python3 -m http.server 3000 --directory src
```

The site is served from `src/` at http://localhost:3000.

## Deploy

Deploy the contents of `src/` directly, with the root-level `CNAME` preserved for the custom domain. No package manager or build step is required.

## Creating Documentation in the Ape Ecosystem

To quickly set up ape-like docs for your repo, please follow the instructions at https://docs.apeworx.io/docs-template/userguides/quickstart.html
