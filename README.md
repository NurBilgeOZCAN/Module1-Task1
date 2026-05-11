# Task Board Vibe

## Overview

This project is a browser-based task management application built with React, TypeScript, and Vite. It was created as part of the **Vibe Coding Challenge: Build a Task Board** lab.

Users can organize tasks across three workflow columns (To Do, In Progress, Done) and manage their personal task progress visually using drag-and-drop interactions. All data is saved to the browser's localStorage for persistence across page refreshes.

## Tech Stack

- React
- TypeScript
- Vite
- HTML / CSS
- Browser localStorage
- npm

## Key Features

### Kanban Board

Three-column Kanban board structure:

- To Do
- In Progress
- Done

### Task Management

Users can:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Move tasks between columns via drag-and-drop

### Data Persistence

Task data is saved to `localStorage`, so the board state remains available after refreshing the page.

### Keyboard Shortcut

Pressing the `n` key starts the new task creation flow.

## Project Structure

```txt
TASK-BOARD-VIBE/
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## How to Run

### Install dependencies:

```bash
npm install
```
### Start the development server:

```bash
npm run dev
```
### Open the local development URL shown in the terminal.

### Build
Create a production build:

```bash
npm run build
```
Preview the production build:

```bash
npm run preview
```

## Lab Reflection Time

### 1. Does it work?

- [ ] Yes, fully functional
- [x] Partially - some features work
- [ ] No - errors or blank screen
- [ ] Didn't get to running it

### 2. What's missing or broken?

| Feature | Working? | Notes |
| ------- | -------- | ----- |
| Three columns display | Yes | To Do, In Progress, Done all visible |
| Can create tasks | Yes | Modal/form for new task entry |
| Can drag between columns | Yes | Drag-and-drop fully functional |
| Data persists on refresh | Yes | localStorage working correctly |
| Keyboard shortcuts | Yes | n key opens new task modal |

### 3. How many times did you re-explain context?

- [ ] 0-2 times (AI got it)
- [ ] 3-5 times (had to clarify)
- [x] 6+ times (constant re-explaining)
- [ ] Lost count

### 4. What did AI assume (that you didn't specify)?

- **Tech decisions:** Used Vite + React + TypeScript without being explicitly asked for the bundler choice
- **Component structure:** Assumed a flat component hierarchy with App as the main container and separate Column/Task components
- **Styling approach:** Used basic CSS modules with minimal styling, assumed a light theme by default
- **State management:** Used React useState and lifted state up to App component; assumed no context or reducer needed
- **Data format:** Assumed each task has id, title, description, status, and order fields

### 5. Would you ship this?

- [ ] Yes, production ready
- [x] Maybe, with significant cleanup
- [ ] No, too many issues
- [ ] Definitely not

### 6. Biggest frustrations?

1. AI occasionally forgot the localStorage persistence requirement after generating new components
2. Drag-and-drop implementation needed multiple prompts to get the column boundaries correct
3. The keyboard shortcut (n) sometimes stopped working after adding new features, requiring re-explanation

---

**Author**  
Nur Bilge ÖZCAN
