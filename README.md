# SWQ JS

A modern, production-ready full-stack React application built with:

- **React 19** with [React Router 7](https://reactrouter.com/) (Server-side rendering, Data loading and mutations)
- **TypeScript**
- **Vite** (HMR, Asset bundling and optimization)
- **TailwindCSS** for styling
- **Docker** for containerized deployment

## Prerequisites

- **Node.js 24** — runtime for development and production
- **A container runtime** (optional, for Docker deployment) — such as [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Podman](https://podman.io/), [Rancher Desktop](https://rancherdesktop.io/), or [OrbStack](https://orbstack.dev/) (macOS)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### 3. Run type checking

```bash
npm run typecheck
```

### 4. Build for production

```bash
npm run build
```


## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.
