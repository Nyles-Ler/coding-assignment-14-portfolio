# Assignment 13 - UI Component Library with Build Quality Checks

## Author

**Jordan Lerat**

Red River College Polytechnic

Full Stack Web Development Diploma

---

# Project Overview

This project extends Assignment 12 by adding automated code quality checks to an existing React UI Component Library.

The project uses React, TypeScript, Storybook, Styled Components, Jest, React Testing Library, Docker, Husky, Prettier, ESLint, and GitHub Actions to create a reusable component library with an automated code quality and build process.

Husky performs local pre-commit checks before code can be committed, while GitHub Actions performs the same checks in the GitHub repository whenever code is pushed or a pull request is created.

---

# Components Included

The component library contains the following components:

- Button
- Label
- Text
- Table
- Table Header
- Table Row
- Table Cell
- Table Footer
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

Each component includes:

- Responsive styling
- Default state
- Disabled state
- Storybook stories
- Unit tests

---

# Technologies Used

- React
- TypeScript
- Storybook
- Styled Components
- Jest
- React Testing Library
- ESLint
- Prettier
- Husky
- GitHub Actions
- Docker
- Nginx

---

# Prerequisites

Before running this project, install the following:

- Docker Desktop

Optional for local development:

- Node.js
- npm

---

# Running the Application with Docker

## Step 1 - Build the Docker Image

Open a terminal in the project root directory and run:

```bash
docker build -t lerat_jordan_coding_assignment13 .
```

## Step 2 - Run the Docker Container

Run the container using:

```bash
docker run --name lerat_jordan_coding_assignment13 -p 8018:80 lerat_jordan_coding_assignment13
```

## Step 3 - Open the Application

Open a web browser and navigate to:

```text
http://127.0.0.1:8018
```

Storybook will load and display all available UI components.

---

# Running the Application Locally

## Install Dependencies

```bash
npm install
```

## Start Storybook

```bash
npm run storybook
```

## Open Storybook

Open:

```text
http://localhost:6006
```

---

# Running Unit Tests

Run all component tests:

```bash
npm test
```

Or run the tests once without watch mode:

```bash
npm test -- --watchAll=false
```

---

# Code Quality Checks

This project uses Husky to perform automated code quality checks before every commit.

The following checks are performed automatically:

- Prettier formatting check
- ESLint code quality check
- Jest unit tests

If any of these checks fail, the commit will be blocked until the issues have been fixed.

The same checks are also performed automatically by GitHub Actions whenever code is pushed to the GitHub repository or a pull request is opened.

---

# Building a Production Storybook

Generate a production Storybook build:

```bash
npm run build-storybook
```

The production build will be generated in:

```text
storybook-static/
```

---

# Docker Configuration Requirements

This project satisfies the assignment requirements by:

- Using a production Storybook build
- Creating a working directory named:

```text
lerat_jordan_ui_garden_build_checks
```

- Creating a container named:

```text
lerat_jordan_coding_assignment13
```

- Hosting the application on:

```text
http://127.0.0.1:8018
```

---

# Dockerfile Summary

The Dockerfile performs the following tasks:

1. Uses a Node.js image to build the Storybook application.
2. Creates the required working directory.
3. Installs project dependencies.
4. Generates a production Storybook build.
5. Uses Nginx to host the static Storybook files.
6. Copies the production build into the Nginx web server.
7. Hosts the application on localhost port 8018.

---

# Assignment Learning Outcomes

This project demonstrates the ability to:

- Create reusable React UI components.
- Implement responsive component design.
- Test components using Jest and React Testing Library.
- Document components using Storybook.
- Style components using Styled Components.
- Integrate automated code quality checks into the build process.
- Configure Husky pre-commit hooks.
- Configure GitHub Actions continuous integration.
- Create a production-ready Docker deployment.
- Host a production Storybook build using Nginx.

---

# Repository Structure

```text
assignment-13-component-library/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .husky/
│   └── pre-commit
│
├── .storybook/
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Label/
│   │   ├── Text/
│   │   ├── Dropdown/
│   │   ├── RadioButton/
│   │   ├── Img/
│   │   ├── HeroImage/
│   │   ├── Card/
│   │   ├── Table/
│   │   ├── TableHeader/
│   │   ├── TableRow/
│   │   ├── TableCell/
│   │   └── TableFooter/
│   │
│   └── theme.ts
│
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json
```
