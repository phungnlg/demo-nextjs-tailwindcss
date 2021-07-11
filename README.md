# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Demo TailwindCSS NextJS</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup TailwindCSS for NextJS</h3>
  
<p align="center">
  <a href="https://github.com/phungnlg/demo-nextjs-tailwindcss"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/phungnlg/demo-nextjs-tailwindcss/build"></a>
  <a href="#last-commit"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/phungnlg/demo-nextjs-tailwindcss"></a>
  <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
  <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/phungnlg/demo-nextjs-tailwindcss"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

1. You want setup `Tailwind CSS` for `Next JS`.
2. This project will help you understand and how can setup `TailwindCSS` and `SCSS` for `NextJS`
  
**Demo TailwindCSS NextJS** is a small project for basic setup TailwindCSS for NextJS.

<br/>
  
## Key Features

- **[Next JS](https://nextjs.org/docs/getting-started)**
- **[Tailwind CSS](https://tailwindcss.com/)**

<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# generate
yarn export
```

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   ├── ├── 📝 tailwind.css
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📝 _app.jsx
│   ├── 📝 _document.jsx
│   ├── 📝 index.jsx
│   ├── 📝 demo.jsx
│   └── 📝 user.jsx
├── 📁 public
├── 📝 .env
├── 📝 .env.development
├── 📝 .env.production
├── 📝 jsconfig.js
├── 📝 next.config.js
├── 📝 postcss.config.js
├── 📝 tailwind.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/getting-started/install)
  
## Documentation

### **Configuration**

- Install lib

```bash
yarn add -D sass tailwindcss postcss autoprefixer
```

### **API**

1. Create file config postcss `postcss.config.js`

  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```

2. Create file config tailwind `tailwind.config.js`

  ```js
  module.exports = {
    purge: ['./layouts/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  ```

3. Create file `/assets/styles/tailwind.css`

  ```css
  @tailwind base;
  /* Write your own custom base styles here */

  /* Start purging... */
  @tailwind components;
  /* Stop purging. */

  /* Start purging... */
  @tailwind utilities;
  /* Stop purging. */
  ```

4. Create file style `/assets/styles/globals.scss`

5. Remove folder `/styles`

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: phungnlg@gmail.com
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[phungnlg.github.io]:https://phungnlg.github.io
[react-bootstrap]:https://react-bootstrap.github.io/

<!-- in-line references to github -->

[git-profile]:https://github.com/phungnlg
[git-readme]:README.md
[git-license]:LICENSE.md