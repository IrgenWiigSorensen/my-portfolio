# IWS Design Portfolio

A personal portfolio website built with [Svelte](https://svelte.dev/) and [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `npm start` or `npm run dev`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will hot-reload when you make edits.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles Svelte for production and optimizes the build for the best performance.

### `npm run preview`

Locally preview the production build.

## Tech Stack

- **Framework**: [Svelte 4](https://svelte.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: SCSS
- **Particles**: [@tsparticles/svelte](https://github.com/tsparticles/svelte)
- **Typewriter Effect**: [svelte-typewriter](https://github.com/henriquehbr/svelte-typewriter)
- **Email**: [@emailjs/browser](https://www.emailjs.com/)

## Environment Variables

Create a `.env` file in the root directory with the following variables for the contact form:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
