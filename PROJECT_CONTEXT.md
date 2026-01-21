# Project Context & Architecture

> **Purpose**: This file serves as a high-level reference for AI agents to understand the project structure, stack, and design state without needing to parse the entire codebase.

## 1. Project Overview
- **Name**: `sam-pheloung---portfolio`
- **Type**: Personal Portfolio Website (Single Page Application)
- **Theme**: Dark, Cyber/Matrix aesthetic, Glassmorphism.
- **Role**: Portfolio for Sam Pheloung (RevOps Specialist).

## 2. Tech Stack
- **Runtime**: Node.js
- **Framework**: React 19
- **Build Tool**: Vite 6 (`npm run dev`)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript (`.tsx`, `.ts`)
- **Animation**: Framer Motion (`framer-motion`)

## 3. Architecture
### Entry Point
- **`index.html`**: Root HTML.
- **`index.tsx`**: React entry, mounts `App` to `#root`.
- **`App.tsx`**: Main layout orchestrator.
  - Wraps content in `<BackgroundEffects />`.
  - Stacks sections: `Hero`, `About`, `Certifications`, `Career`, `Projects`, `Photography`.

### Key Directories
- **`/components`**:
  - **`/ui`**: Reusable low-level UI components.
    - **`MatrixText.tsx`**: Text animation component. Features a "rain up" scroll effect (negative parallax) and random falling entry.
    - **`BackgroundEffects.tsx`**: likely handles the global canvas-based Matrix rain background.
  - **`/sections`**: Large page sections (Hero, About, etc.).
  - **`/Layout`**: `Navbar`, `Footer`.
- **`/public`**: Static assets.

## 4. Key Features & States
### Visuals
- **Matrix Rain**:
  - **Background**: Continuous rain effect (Canvas based in `BackgroundEffects`).
  - **Text**: `MatrixText` component used for headings/text. Letters fall in randomly on load and "levitate" upwards when scrolling down (inverse parallax).
- **Noise Overlay**: CSS `bg-noise` class in `index.css` adds film grain texture.
- **Glassmorphism**: `.glass` utility for translucent UI elements.
- **Scrollbar**: Custom dark/gray webkit scrollbar.

### Recent Changes (Agent Memory)
- **MatrixText Scroll Logic**: Updated to ensure letters move **up** (negative Y) when scrolling down, preventing them from "sinking" below their resting line.
- **Animation Timing**: Randomized entry delays (`0-0.5s`) for a natural, non-uniform feel.

## 5. Development
- **Run Locally**: `npm run dev` (Vite)
- **Build**: `npm run build`

## 6. Style Guidelines
- **Tailwind**: Use utility classes (e.g., `flex-col`, `min-h-screen`).
- **Colors**:
  - `bg-background` (Dark/Black).
  - `text-primary` / `text-white`.
  - `selection:bg-accent` (Highlight color).
