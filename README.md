# Assignment 14 - Portfolio Website

## Author

**Jordan Lerat**
Red River College Polytechnic
Full Stack Web Development Diploma

---

# Project Overview

This project is a responsive personal portfolio website built with React using the reusable component library developed in previous assignments.

The portfolio showcases my projects, technical skills, development resources, and preferred development environment while demonstrating responsive design and modern web development practices.

---

# Technologies Used

- React
- TypeScript
- Styled Components
- Storybook
- Jest
- React Testing Library
- Docker
- Nginx

---

# Portfolio Sections

The portfolio contains the following sections:

- Hero
- Featured Projects
- Skills
- Resources
- Developer Setup
- Footer

---

# Running the Application with Docker

## Build the Docker Image

From the project root directory run:

```bash
docker build -t lerat_jordan_coding_assignment14 .
```

## Run the Docker Container

```bash
docker run --name lerat_jordan_coding_assignment14 -p 5575:80 lerat_jordan_coding_assignment14
```

## Open the Portfolio

Open your browser and navigate to:

```text
http://127.0.0.1:5575
```

---

# Running the Application Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

# Running Tests

Run all tests:

```bash
npm test
```

Run tests once without watch mode:

```bash
npm test -- --watchAll=false
```

---

# Dockerfile Summary

The Dockerfile:

- Builds a production React application
- Uses the required working directory:

```text
lerat_jordan_final_site
```

- Serves the production build using Nginx
- Runs the portfolio on:

```text
http://127.0.0.1:5575
```

---

# Repository Structure

```text
coding-assignment-14-portfolio/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── sections/
│   └── App.js
│
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json
```
