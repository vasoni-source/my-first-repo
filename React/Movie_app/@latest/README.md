# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Movie App

A fully responsive movie browsing web application built with React, Redux Toolkit, Tailwind CSS, and JSON Server for mock data storage.
Users can sign up, log in, view movie details, mark favourites, and see recently viewed movies — all within a modern UI.

Tech Stack
Category	Technologies Used
Frontend	React, Redux Toolkit, React Router DOM
Styling	Tailwind CSS
Icons	Lucide React
State Management	Redux Toolkit
API / Data	JSON Server (for mock database), Axios
Build Tool	Vite

Folder Structure 
Movie_app/
│
├── @latest/
│   ├── .env
│   ├── db.json
│   ├── db1.json
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
│   │
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       │
│       ├── app/
│       │   └── store.js
│       │
│       ├── Common_component/
│       │   ├── Navbar.jsx
│       │   └── Navbar.css
│       │
│       ├── components/
│       │   ├── Login/
│       │   │   ├── Login.jsx
│       │   │   └── Login.css
│       │   │
│       │   └── Signup/
│       │       ├── Signup.jsx
│       │       └── Signup.css
│       │
│       ├── features/
│       │   ├── Movie/
│       │   │   ├── movieSlice.js
│       │   │   └── movieThunk.js
│       │   │
│       │   ├── Theme/
│       │   │   └── themeSlice.js
│       │   │
│       │   └── User/
│       │       ├── userSlice.js
│       │       └── userThunk.js
│       │
│       ├── Pages/
│       │   ├── 404Page/
│       │   │   ├── ErrorPage.jsx
│       │   │   └── ErrorPage.css
│       │   │
│       │   ├── Home/
│       │   │   ├── Home.jsx
│       │   │   └── Home.css
│       │   │
│       │   ├── MovieDetail/
│       │   │   ├── MovieDetail.jsx
│       │   │   └── MovieDetail.css
│       │   │
│       │   └── User/
│       │       ├── User.jsx
│       │       └── User.css
│       │
│       └── protected_route/
│           └── PrivateRoute.jsx
│
└── (other configuration or environment files as needed)
Features

 User Signup & Login
 Movie Listing (from JSON Server or API)
 View Movie Details
 Add / Remove Favourites
 Recently Viewed Movies
 Light & Dark Theme Toggle
 Protected Routes for User Pages
 Fully Responsive UI