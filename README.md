# Birkhanym Kazhymukhamet · IT Queen portfolio

React + Vite + Tailwind. Content lives in `src/data/site.js`.

## Run
    npm install
    npm run dev       # local
    npm run build     # production build in dist/

## Structure
One scrolling page (`src/App.jsx`) built from sections in `src/sections/`, in the same order as the
Figma slides: About, Projects, Back2Roots, CortexAI, QazaqArt, ShaiNote, Enactus, K7, More builds, Contact.

## Photos
Exported from the Figma file into `public/images/` (JPEG, max 1800px). File names are set in
`src/data/site.js`; a missing file shows a grey placeholder.

## Deploy (Vercel)
Live at https://birkhanym-portfolio.vercel.app. Every push to `main` redeploys automatically.
