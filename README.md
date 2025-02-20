# SoCal Mist Website

SoCal Mist Website is a modern, responsive web application built with React and styled with TailwindCSS and DaisyUI. The project is bundled with Vite for fast development and build times and is deployed via GitHub Pages.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Overview

This repository contains the source code for the SoCal Mist Website. The site showcases the unique offerings and style of SoCal Mist, featuring a dynamic user interface and a clean design. The project leverages modern front-end technologies to provide a fast and smooth user experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides an extremely quick development experience.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **DaisyUI:** A TailwindCSS component library that simplifies styling.
- **GitHub Pages:** A free hosting service for deploying static websites.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/SoCal-Mist-Website.git
   cd SoCal-Mist-Website
   ```
2. **Install Dependencies**

    Using npm:
    
    ```bash
     npm install
     ```
         
    Or Yarn:
    
    ```bash
     yarn
     ```
## Usage
### Development
To run the project locally in development mode with hot reloading:
  ```bash
  npm run dev
  ```
Then, open http://localhost:5173 in your browser.
### Building For Production
To build an optimized version of the site:
  ```bash
  npm run build
  ```
This command generates the production-ready files in the dist directory.
## Deployment
The site is deployed to GitHub Pages. A common approach is to use the gh-pages package. Add these scripts to your package.json:
  ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
  ```
Then, deploy the site with:
  ```bash
    npm run deploy
  ```
This will push the contents of the dist folder to the gh-pages branch on GitHub.
