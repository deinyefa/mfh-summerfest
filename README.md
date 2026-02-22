# Summer Fest 2026 - myFather's House

A modern Next.js web application built for the myFather's House Summer Fest 2026 event in Ottawa. 

This project was migrated from a static HTML template into a modular Next.js application using the App Router, TypeScript, and Tailwind CSS. It features information about the multi-week soccer tournament, between-match sports games, concluding concert & festival, vendor market, and volunteer opportunities.

---

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine. We recommend using [Bun](https://bun.sh/) as the package manager, but `npm` or `yarn` will work perfectly as well.

### Installation

Clone the repository and install the dependencies:

```bash
# If using bun
bun install

# If using npm
npm install
```

### Running Locally

To start the development server:

```bash
# If using bun
bun run dev

# If using npm
npm run dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

Any edits made to the React components within `src/` will auto-update on the page.

### Building for Production

To create an optimized production build:

```bash
# If using bun
bun run build

# If using npm
npm run build
```

Then, you can start the production server with:

```bash
# If using bun
bun run start

# If using npm
npm run start
```

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Google Fonts via `next/font` (`Bebas Neue`, `Fraunces`, `Plus Jakarta Sans`)
