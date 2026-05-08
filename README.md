# Task Board Vibe

## Overview

This project was created as part of the **Vibe Coding Challenge: Build a Task Board** lab.

The goal of this lab was to experience a fast, AI-assisted development workflow before moving into a more structured, spec-driven approach in later modules. The application was built using natural language prompts only, without writing a formal PRD, technical specification, or implementation plan.

## Lab Context

| Item         | Description                          |
| ------------ | ------------------------------------ |
| **Module**   | Module 1                             |
| **Task**     | Vibe Coding Challenge                |
| **Project Name** | Task Board Vibe                   |
| **Duration** | 35 minutes                           |
| **Approach** | Vibe Coding                          |
| **Tech Stack** | React, TypeScript, Vite            |
| **Backend**  | None                                 |
| **Storage**  | Browser localStorage                 |

## Objective

The objective of this challenge was to build a working personal task board using only AI chat.

The task board needed to include:

- A Kanban-style board
- Three task columns:
  - To Do
  - In Progress
  - Done
- Create, edit, and delete task functionality
- Drag and drop between columns
- Data persistence using browser localStorage
- Keyboard shortcut support, especially `n` for creating a new task

## What Was Built

This project is a browser-based task management application built with React, TypeScript, and Vite.

It allows users to organize tasks across three workflow columns and manage their personal task progress visually.

The project was generated and implemented through AI-assisted prompting, following the vibe coding style described in the lab guide.

## Key Features

### Kanban Board

The application includes a three-column Kanban board structure:

- To Do
- In Progress
- Done

Tasks can be organized according to their current status.

### Task Management

Users can:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Move tasks between columns

### Drag and Drop

Tasks can be moved between columns using drag-and-drop interaction.

### Local Storage Persistence

Task data is saved in the browser using `localStorage`.

This means the board state remains available after refreshing the page.

### Keyboard Shortcut

The application supports keyboard interaction.
