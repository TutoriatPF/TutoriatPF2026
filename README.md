# TutoriatPF — Functional Programming (Haskell)

This repository contains the course materials, exercises and solutions for the Functional Programming course (Haskell). The website is built with Docusaurus and serves lecture notes, examples and practical assignments.

Live site: https://tutoriatpf.github.io/TutoriatPF2026/

Quick links

- Live site: https://tutoriatpf.github.io/TutoriatPF2026/
- Source: this repository

Prerequisites

- Node.js (>= 16)
- Yarn
- Git

Getting started

1. Install dependencies

   ```bash
   yarn
   ```

2. Run the local development server

   ```bash
   yarn start
   ```

   Opens a local server with live reload for content changes.

Build for production

```bash
yarn build
```

Generates static files in the `build` directory.

Deploy

- Using SSH:

  ```bash
  USE_SSH=true yarn deploy
  ```

- Using HTTPS (set your GitHub username):

  ```bash
  GIT_USER=<YourGitHubUsername> yarn deploy
  ```

Repository layout (high level)

- docs/        — course content and pages used by Docusaurus
- website/     — Docusaurus site config and assets
- src/         — Haskell examples and exercises (if present)
- build/       — generated static site (after `yarn build`)

Contributing

- Use issues for bug reports and feature requests.
- Create pull requests for documentation updates, new exercises, or fixes.
- Keep commits small and focused; include a short description of changes.

License

- Check the repository for a LICENSE file or consult the course authors for reuse permissions.

Contact

- For course-related questions, open an issue or contact the course staff listed on the site.

<!-- End of README -->
