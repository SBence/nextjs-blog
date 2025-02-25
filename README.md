# Next.js Blog

A modern blog application built with Next.js, featuring server-side rendering, static site generation, and a clean, responsive design.

## Features

- Server-side rendered blog posts
- Static site generation with [ISR (Incremental Static Regeneration)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)
- Responsive grid layout for posts
- Light/dark theme toggle
- Reading time estimation

## Tech Stack

- **[Next.js](https://nextjs.org/)** - Server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[SCSS](https://sass-lang.com/) modules** - Component-scoped styling
- **[`json-server`](https://github.com/typicode/json-server)** - Mock API backend
- **[Jotai](https://jotai.org/)** - State management
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## Getting Started with Development

### Requirements

- **Node.js** v23.x
- **Yarn** v1.x

1. Install dependencies:

   ```sh
   yarn
   ```

2. Run mock API server:

   ```sh
   yarn server
   ```

3. Run development server:

   ```sh
   yarn dev
   ```

After running the scripts above, the application is available at [http://localhost:3000](http://localhost:3000).

## Project Structure

### Folders

- `components` - React components
- `pages` - Next.js pages
- `styles` - SCSS modules, variables, and global styles
- `types` - TypeScript type definitions
- `utils` - Helper functions and utilities

### Project-specific Files

- `db.json` - The data served by the mock API with `json-server`
- `store.ts` - Jotai store configuration

## Environment Variables

- `API_URL` - The base URL for the API endpoint serving the blog posts
- `REVALIDATE_TIME` - The time interval (in seconds) for Next.js to revalidate static pages using [ISR (Incremental Static Regeneration)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)

## `package.json` Scripts

> [!IMPORTANT]
> Make sure to run `server` before running `dev`, `build`, or `start`.

- `server` - Run mock API
- `dev` - Run development server
- `build` - Build for production
- `start` - Run production server
- `lint` - Lint code with ESLint
- `formatting:check` - Check code formatting with Prettier
- `formatting:apply` - Format code with Prettier

---

_Design based on: [The Blog - A Web Personal Blog](https://www.figma.com/community/file/1235152009438565697)_
