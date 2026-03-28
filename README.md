# SWQ JS

A modern, production-ready full-stack React application built with:

- **React 19** with [React Router 7](https://reactrouter.com/) (Server-side rendering, Data loading and mutations)
- **TypeScript**
- **Vite** (HMR, Asset bundling and optimization)
- **TailwindCSS** for styling
- **Docker** for containerized deployment

## Prerequisites

- **nvm** — used to install the required Node.js version. See [nvm-sh/nvm](https://github.com/nvm-sh/nvm) for installation instructions.
- **A container runtime** (optional, for Docker deployment) — such as [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Podman](https://podman.io/), [Rancher Desktop](https://rancherdesktop.io/), or [OrbStack](https://orbstack.dev/) (macOS)

## Getting Started

### 1. Install Node.js

The project requires **Node.js LTS (Krypton)**. With nvm installed, simply run:

```bash
nvm install
```

This reads the `.nvmrc` file and installs the correct Node.js version automatically.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### 4. Run type checking

```bash
npm run typecheck
```

### 5. Build for production

```bash
npm run build
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

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.
