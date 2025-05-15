# SoCal Mist Website

<p align="center">
  <img src="https://github.com/user-attachments/assets/f7d3f8aa-a50c-4ef7-b6bd-c84f1388ca95" width="180" alt="SoCal Mist Logo" />

</p>

<p align="center"><em>A modern, responsive website for SoCal MIST — built for speed, style, and usability.</em></p>

---

## 📌 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

---

## 🌐 Overview

This repository contains the source code for the **SoCal Mist Website**, built to represent the energy and creativity of the SoCal MIST tournament. It features a clean, dynamic UI with smooth animations and responsive design — ensuring participants and visitors enjoy a fast, accessible experience across devices.

---

## ⚙️ Technologies Used

- **[React](https://reactjs.org/)** – Frontend library for building UI components
- **[Vite](https://vitejs.dev/)** – Lightning-fast development environment and bundler
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** – Tailwind component library for styled components
- **[GitHub Pages](https://pages.github.com/)** – Static site hosting
- **[GitHub Actions](https://docs.github.com/en/actions)** – Automated deployment on push

---

## 📦 Installation

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

Or with Yarn:

```bash
yarn
```

---

## 🚧 Usage

### Development

Run the development server with hot reloading:

```bash
npm run dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

### Production Build

To generate a production-ready build:

```bash
npm run build
```

This outputs the final files in the `dist/` directory.

---

## 🚀 Deployment

This project uses GitHub Actions to deploy automatically to GitHub Pages on push.

If you'd like to deploy manually, use:

```bash
npm run deploy
```

This will:
- Build the site (`npm run build`)
- Push the contents of the `dist` folder to the `gh-pages` branch

> Deployment now happens automatically when you `git push` to `main`.

---

## 🪪 License

MIT License © 2025 SoCal MIST Team

---
