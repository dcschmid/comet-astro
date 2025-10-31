# Release & Tooling Guide

This repository ships with automated formatting, linting, and publishing. Follow this guide to keep everything running smoothly.

## Prerequisites

- **Node.js ≥ 18.17** (same version the CI uses).
- **Yarn** (v1) for dependency management.
- **npm account** with an automation access token that has publish rights.
- **Repository secrets** in GitHub:
  - `NPM_TOKEN`: npm automation token (Settings → Secrets and variables → Actions).

## Initial Setup

```bash
yarn install
```

This installs dependencies and triggers Husky’s `prepare` hook to register the Git hooks locally.

## Formatting & Linting

- Husky + lint-staged run `prettier --write` and `eslint --fix` on staged files before every commit.
- If a commit is blocked, fix the reported issues, re-stage the files, and retry the commit.
- Manual commands (optional):
  ```bash
  yarn format          # run Prettier on the entire repo
  yarn lint            # run ESLint on the entire repo
  yarn astro build     # ensure the Astro build succeeds
  ```

## Daily Workflow

1. Implement your changes.
2. Either:
   - **Manual**: run `yarn changeset` and follow the prompts.
   - **Automatic**: apply one of the PR labels `release:patch`, `release:minor`, or `release:major`. The `Auto Changeset` workflow will generate the changeset file for you (skip the manual step in that case).
3. Create (or verify) the changeset so releases stay automated:
   ```bash
   yarn changeset
   ```
   Choose the version bump (patch/minor/major) and commit the generated file under `.changeset/`.  
   If you’re using the PR label workflow, ensure the action has already pushed an auto-generated changeset before merging.
4. Commit (Husky will enforce linting/formatting):
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```
5. Push your branch and open a Pull Request.

## Continuous Integration

- `.github/workflows/ci.yml` runs on every PR and push to `main`.
- Steps: checkout → install dependencies → `yarn lint` → `yarn astro build`.
- Fix any failing step locally before merging.

## Release Automation

1. Merge approved PRs into `main`.
2. `.github/workflows/release.yml` runs automatically:
   - Installs dependencies.
   - Re-runs lint/build.
   - Uses `changesets/action` to:
     - Apply `yarn changeset version`.
     - Publish via `yarn changeset publish`.
     - Push updated changelog, package versions, and tags back to `main`.
3. Release notes & GitHub Releases are auto-generated via `@changesets/changelog-github`.
4. The workflow skips publishing if there are no pending changesets.

## Manual Publish (only if necessary)

If you ever need to publish locally instead of using the GitHub workflow:

```bash
yarn changeset version
yarn install --frozen-lockfile
yarn astro build
npm publish --access public
```

## Troubleshooting

- **Commit blocked by Husky:** run `yarn install` to ensure hooks are available, fix highlighted lint/format issues, then recommit.
- **Release workflow fails:** verify `NPM_TOKEN` is present and valid, check the workflow logs for lint/build errors.
- **No release triggered:** confirm you added a changeset (`yarn changeset`) before merging.
- **CI failures:** replicate the failing command locally (`yarn lint`, `yarn astro build`) to debug quickly.

Keeping the changeset discipline ensures automated, consistent releases with minimal manual effort. Happy shipping!
