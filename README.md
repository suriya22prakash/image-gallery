# 🎬 Image Gallery — Movie Posters

A responsive movie poster gallery built with **React**, created as a hands-on project to learn core React fundamentals like components, props, state, and rendering dynamic lists.

## 📖 About

This app displays a grid of movie posters (Avengers, Batman, The Dark Knight, Fight Club, The Godfather, Inception, Inglourious Basterds, Scarface, and more) sourced from local image assets. It was built using [Create React App](https://create-react-app.dev/) to practice building a real UI component from scratch.

## ✨ Features

- 🖼️ Grid-based poster gallery
- 🎞️ Local image assets bundled with the app (no external API required)
- ⚡ Fast, simple, component-based structure
- 📱 Responsive layout

## 🛠️ Built With

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/) (react-scripts / webpack)
- Plain CSS (`index.css`)

## 📂 Project Structure

```
imagegallery/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── avengers.jpg
│   │       ├── batman.webp
│   │       ├── club.jpg
│   │       ├── darkknight.webp
│   │       ├── fightclub.webp
│   │       ├── godfather.webp
│   │       ├── got.jpg
│   │       ├── inception.webp
│   │       ├── inglourious.webp
│   │       ├── knight.jpg
│   │       ├── leo.jpg
│   │       ├── lotd.webp
│   │       ├── mankantha.webp
│   │       └── scarface.webp
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/suriya22prakash/image-gallery.git
   cd image-gallery
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` – Runs the app in development mode
- `npm run build` – Builds the app for production to the `build` folder
- `npm test` – Launches the test runner

## 🎓 What I Learned

- Setting up and structuring a React app with Create React App
- Importing and rendering local image assets in React
- Rendering a list of items (posters) dynamically
- Debugging common issues like `Module not found` errors from incorrect image paths/extensions
- Basic Git workflow: resolving unrelated histories, force-syncing a remote repo, and pushing changes

## 🐛 Common Issues & Fixes

- **`Module not found: Can't resolve './assets/images/...'`** — double-check the exact filename *and* extension (`.jpg` vs `.webp`) match what's imported in `index.js`.
- **ESLint `no-unused-vars` warning** — remove unused image imports, or add `// eslint-disable-next-line` above the line to suppress it intentionally.
- **`git push` rejected (non-fast-forward)** — pull and merge/rebase remote changes first (`git pull origin main --allow-unrelated-histories` if histories diverged), then push again.

## 🔮 Future Improvements

- [ ] Add a search/filter bar for movie titles
- [ ] Add a lightbox/modal view on poster click
- [ ] Add hover effects and transitions
- [ ] Make gallery data-driven (map over an array instead of individual imports)
- [ ] Deploy to GitHub Pages / Vercel / Netlify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Movie poster images used for educational/learning purposes only.

---

⭐ If this helped with your own React learning, consider giving the repo a star!
