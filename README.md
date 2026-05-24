# Full Stack Development — Learning & Projects

This repository is a collection of hands-on exercises and small projects that demonstrate end-to-end web development concepts — from static frontend layouts to server-side APIs and templated views. Each folder is typically a standalone exercise or mini-project you can open, run, and learn from.

## What this repo demonstrates

- Frontend fundamentals: semantic HTML, responsive CSS (Flexbox/Grid), and JavaScript (ES6+).
- Full-stack integration: Node.js and Express servers that serve EJS templates, handle routes, and connect simple server-side logic.
- API and data flows: building RESTful endpoints, handling JSON, and making server-side requests with Axios.
- Middleware and security basics: custom middleware examples and secrets/config usage patterns.

## Technologies used

- Frontend: HTML5, CSS3 (Flexbox, Grid), Vanilla JS, jQuery, Bootstrap (where noted)
- Backend: Node.js, Express.js
- Templating: EJS
- HTTP clients: Axios
- Package management: npm
- Frontend frameworks: React (see [36 My React 19 Project](36%20My%20React%2019%20Project) for examples)

## Repository layout (high level)

- `00 - 11` — Core frontend (HTML/CSS) and responsive design exercises.
- `19 - 24` — jQuery examples and introductory backend/middleware concepts.
- `25 - 28` — EJS templating, server-side rendering, API integration, and REST API examples.
- Individual folders (e.g., `TinDog`, `Pricing Table`) contain self-contained examples; check each folder for a `package.json` or README with run details.
- `36 My React 19 Project` — React exercises and small React apps (check that folder for `package.json` and `README`)

Note: folder names and organization follow a learning path rather than a production structure — treat each numbered folder as its own module or lesson.

## Getting started (quick)

Prerequisites: Node.js (16+ recommended) and npm.

1. Clone the repository:
   `git clone https://github.com/marcelosperez/FullStackProjects.git`
2. Open the folder for the lesson or project you want to run:
   `cd "02 Movie Ranking"` (example)

3a. If the folder contains a `package.json` (Node app):

- Install dependencies: `npm install`
- Start: `npm start` or `node index.js`

3b. If the folder is static (HTML/CSS/JS):

- Open `index.html` in a browser, or serve the folder using a static server (e.g., `npx serve`).

4. Look for per-project notes: many folders include a `solution.html`, `solution.js`, or a short README with extra instructions.

## Examples

- Run the `25 EJS Partials` project (if it has `package.json`):
  - `cd "25 EJS Partials"`
  - `npm install`
  - `npm start`

- View a static design exercise such as `09 Display Flex` by opening `09 Display Flex/index.html` in your browser.

## Contributing

- If you add a new lesson or project, include a short `README.md` in that folder explaining how to run it and what it demonstrates.
- Submit issues for broken examples or suggested improvements; pull requests are welcome.

## Testing & linting

- Most folders are small demos and do not include automated tests. When adding Node projects, prefer adding `npm test` and a simple test harness.

## License

- No license file is included. Add a `LICENSE` if you want to define reuse terms.

---

Maintained by Marcelo Perez — contributions and feedback welcome.
