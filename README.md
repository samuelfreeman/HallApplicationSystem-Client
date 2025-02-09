# Hall Application System - Frontend

This repository contains the frontend client for the Hall Application System. It provides a user-friendly interface for students and administrators to manage hall-related tasks, such as registration, room requests, payments, and analytics.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Overview

The frontend client of the Hall Application System is built with React, offering a responsive and efficient user experience. It integrates seamlessly with the backend (developed in NestJS) and handles features such as student registration, room management, and payments.

## Features

- **Student Features:**
  - Registration and login -done
  - Submit room requests -working on it 
  - Make payments for rooms - todo 
  - View room allocation status and availability- todo

- **Admin Features:**
  - Manage room requests- todo
  - Allocate rooms automatically or manually- todo
  - View room analytics (availability and occupancy) -todo

## Technologies Used

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **State Management:** React Context/Redux 
- **API Integration:** Axios or Fetch API
- **Additional Tools:** React Router for navigation

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samuelfreeman/HallApplicationSystem-Client.git
   cd HallApplicationSystem-Client

2 **Install dependencies:**
   
    ```bash
     npm install

3 **Set up environment variables:**
    ```bash
    Create a .env file in the root directory.

    Add the required variables, such as the backend API URL:

    REACT_APP_API_URL=http://localhost:3000/api

Adjust the REACT_APP_API_URL to point to the backend API URL you are using.

Start the development server:

npm start

Build the application for production (optional):

npm run build

Run tests (optional):

    npm test

Contributing

We welcome contributions to improve the Hall Application System. To contribute:

    Fork the repository.

    Create a new branch for your feature:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature-name"

Push to the branch:

    git push origin feature-name

    Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.


Let me know if you'd like any additional modifications!











# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

