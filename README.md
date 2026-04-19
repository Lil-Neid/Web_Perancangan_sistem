# ReviewHP

ReviewHP is a web-based application designed to help users explore, compare, and evaluate smartphones through a clean and structured interface. The project was developed as part of a university assignment, focusing on modern frontend development practices.

---

## Overview

The application provides a simple workflow for users to search for smartphones, view detailed specifications, and compare multiple devices. It emphasizes usability, clarity of information, and responsive design.

---

## Features

* Search smartphones by name
* View detailed specifications for each device
* Compare multiple smartphones
* Client-side routing for seamless navigation
* Responsive layout for different screen sizes

---

## Tech Stack

* React
* Vite
* React Router
* CSS
* GitHub Pages (deployment)

---

## Project Structure

```
src/
 ├── assets/         Static files (icons, images)
 ├── components/     Reusable UI components
 ├── data/           Static or mock data used in the app
 ├── pages/          Application pages
 ├── assets/         Static assets
 ├── App.jsx         Main application component
 ├── App.css         Global app styles
 ├── index.css       Base style  
 └── main.jsx        Application entry point
```

---

## Getting Started

Clone the repository:

```
git clone https://github.com/lil-neid/Web_Perancangan_sistem.git
```

Navigate into the project directory:

```
cd Web_Perancangan_sistem
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## Build

To generate a production build:

```
npm run build
```

---

## Deployment

This project is deployed using GitHub Pages. The production build is generated and published from the `dist` directory via the `gh-pages` branch.

To deploy:

```
npm run deploy
```

---

## Live Application

https://lil-neid.github.io/Web_Perancangan_sistem/

---

## Notes

* Routing is handled on the client side using React Router.
* The project uses HashRouter to ensure compatibility with GitHub Pages.
* The `gh-pages` branch contains only the production build output and should not be edited manually.

---

This project was developed as part of a university coursework in system analysis and design.

