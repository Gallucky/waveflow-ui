# WaveFlow UI

A modern React UI component library powered by TypeScript and TailwindCSS. WaveFlow UI provides reusable, accessible, and customizable components for building consistent user interfaces in React applications.

---

## Features

-   Built with React 18+ and TypeScript
-   Fully compatible with TailwindCSS
-   Supports ESM and CJS module formats
-   Tree-shakable and lightweight
-   Ready-to-use Storybook for component documentation and development
-   Easy to extend with custom themes

---

## Installation

Install the library via npm:

npm install @waveflow/ui

or using yarn:

yarn add @waveflow/ui

> Peer dependencies required: react and react-dom.

---

## Usage

Import components directly:

import React from "react"; import { Button } from "@waveflow/ui"; import "@waveflow/ui/dist/index.css"; // Import Tailwind styles if needed

export const App = () => (

  <div>
    <Button>Click me</Button>
  </div>
);

---

## Development

Clone the repository and install dependencies:

git clone <repo-url> cd waveflow-ui npm install

Start Vite dev server:

npm run dev

Run Storybook for development and documentation:

npm run storybook

Build the library:

npm run build

---

## Contributing

Contributions are welcome! Please follow these guidelines:

-   Fork the repository
-   Create a new feature branch (git checkout -b feature/my-component)
-   Add your component and update src/index.ts exports
-   Add Storybook stories for your component
-   Run npm run build to verify compilation
-   Submit a pull request

---

## License

MIT © Gal
