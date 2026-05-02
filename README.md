# SWQ JS

A modern, production-ready full-stack React application built with:

- **React 19** with [React Router 7](https://reactrouter.com/) (Server-side rendering, Data loading and mutations)
- **TypeScript**
- **Vite** (HMR, Asset bundling and optimization)
- **TailwindCSS** for styling
- **Docker** for containerized deployment

## Features

- **Tenant Management** — create tenants via a form at `/tenants`, backed by the [tenant-swq](../tenant-swq) Spring Boot API (`POST /api/v1/tenants`)

## Prerequisites

- **nvm** — used to install the required Node.js version. See [nvm-sh/nvm](https://github.com/nvm-sh/nvm) for installation instructions.
- **A container runtime** (optional, for Docker deployment) — such as [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Podman](https://podman.io/), [Rancher Desktop](https://rancherdesktop.io/), or [OrbStack](https://orbstack.dev/) (macOS)
- **tenant-swq backend** — must be running on `http://localhost:8080` for the tenant feature to work. See [tenant-swq README](../tenant-swq/README.md) for setup instructions.

## Getting Started

### 1. Install Node.js

The project requires **Node.js LTS (Krypton)**. With nvm installed, simply run:

```bash
nvm install
```

This reads the `.nvmrc` file and installs the correct Node.js version automatically.

### 2. Install Playwright

The project requires **playwright** for testing. With npx installed, simply run:

```bash
npx playwright install
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### 5. Run type checking

```bash
npm run typecheck
```

### 6. Build for production

```bash
npm run build
```

## Testing

### Unit Tests

This project uses [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests.

```bash
npm test
```

### E2E Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end acceptance tests. The backend must be running for e2e tests.

```bash
npm run e2e
```

## Code Formatting

This project uses [Prettier](https://prettier.io/) with the [Tailwind CSS plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for automatic class sorting. [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) is included to disable all ESLint rules that conflict with Prettier.

Check formatting:

```bash
npm run format:check
```

Auto-fix formatting:

```bash
npm run format
```

## Linting

This project uses [ESLint 9](https://eslint.org/) with a flat config (`eslint.config.js`) for static analysis. The config includes:

- [@eslint/js](https://www.npmjs.com/package/@eslint/js) — recommended JavaScript rules
- [typescript-eslint](https://typescript-eslint.io/) — TypeScript-specific rules
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) — enforces the Rules of Hooks

Run linting:

```bash
npm run lint
```

Auto-fix lint issues:

```bash
npm run lint:fix
```

## Git Hooks

A [Husky](https://typicode.github.io/husky/) **pre-commit hook** runs [lint-staged](https://github.com/lint-staged/lint-staged) before every commit, which automatically applies ESLint fixes and Prettier formatting to staged files. Hooks are installed automatically via the `prepare` script on `npm install` — no manual setup needed.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.
