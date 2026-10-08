# Hrithik Ranjan - Portfolio

Personal portfolio site for Hrithik Ranjan, Software Development Engineer.

Live: [hrithik-09.github.io/Hrithik-portfolio](https://hrithik-09.github.io/Hrithik-portfolio/)

## Features

- Sections for experience, skills, projects (with a featured project), awards, certifications, education and contact
- Light and dark themes that follow the system setting and remember the visitor's choice
- Responsive layout with a mobile menu
- Scroll-reveal animations that are switched off when the visitor prefers reduced motion
- Downloadable resume

## Tech stack

- React 19
- Vite
- Tailwind CSS v4 (theme colours are CSS variables in `src/index.css`)
- Lucide React and React Icons

## Project structure

```
src/
  data.js            All site content (profile, experience, skills, projects, ...)
  App.jsx            Puts the sections together
  components/        One file per section, plus shared Section, Reveal and HRLogo
  hooks/             useTheme (light/dark) and useInView (scroll reveal)
  index.css          Tailwind setup, theme tokens and animations
public/
  Hrithik_Ranjan_Main.pdf   Resume served by the Resume buttons
```

## Updating content

Edit `src/data.js`. Projects with `featured: true` are shown as the large card at the top of the Projects section; the rest appear in the grid below. To replace the resume, overwrite `public/Hrithik_Ranjan_Main.pdf`.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run lint      # run ESLint
npm run build     # production build in dist/, with the page prerendered into index.html for SEO
npm run preview   # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The production base path (`/Hrithik-portfolio/`) is set in `vite.config.js` and must match the repository name.

## Contact

- GitHub: [@hrithik-09](https://github.com/hrithik-09)
- LinkedIn: [hrithik2209](https://linkedin.com/in/hrithik2209)
- Email: ranjan.hrithikofficial@gmail.com
