# ALX Listing App

## Overview  
ALX Listing App is a **Next.js–powered** clone of an Airbnb‑style property listing page.  
Users can browse, filter, and view detailed “cards” for each property in a fast, responsive UI.

---

## Project Goals  
- **Responsive UI/UX**  
  Mobile‑first, accessible designs for an intuitive browsing flow.  
- **Reusable Components**  
  Modular React components for rapid development and easy maintenance.  
- **Type Safety**  
  Leverage TypeScript interfaces for props, API data shapes, and constants.  
- **Static Assets**  
  Serve SVG icons and images from a well‑organized public folder.  
- **Best Practices**  
  Follow Next.js conventions, clean code standards, and good Git workflows.

---

## Tech Stack  
- **Framework:** Next.js (React)  
- **Language:** TypeScript  
- **Styling:** CSS Modules / global CSS (`styles/`)  
- **Routing & Data:** Next.js Pages & getStaticProps / getServerSideProps  
- **Version Control:** Git & GitHub  

---

## Project Structure  
- **`components/`**  
  - **`common/`**  
    - `Card.tsx` — Property card UI  
    - `Button.tsx` — Reusable button  
- **`constants/`**  
  - `index.ts` — App‑wide static values (strings, URLs)  
- **`interfaces/`**  
  - `index.ts` — TypeScript interfaces & types  
- **`pages/`**  
  - `index.tsx` — Home / listing page  
- **`public/`**  
  - **`assets/`** — SVG icons, images  
- **`styles/`**  
  - Global and module CSS files  
- `next.config.ts` — Next.js configuration  
- `package.json` — Dependencies & scripts  
- `README.md` — This file 

---

## UI/UX Design Planning

### Design Goals  
- **Intuitive Browsing:** Seamless card‑grid layout with hover/focus states.  
- **Visual Consistency:** Cohesive look across components (cards, buttons, filters).  
- **Performance:** Optimize SVGs & CSS for minimal load times.  
- **Accessibility:** Keyboard‑friendly, semantic HTML, ARIA where needed.  

### Key Features  
- **Property Search & Filtering**  
  Quick filter by location, price range, and amenities.  
- **Card Details**  
  Image thumbnail, title, location, price/night, and average rating.  
- **CTA Buttons**  
  “View Details” buttons that respond to hover/focus.  

### Primary Pages  
| Page                    | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Home / Listings**     | Displays all property cards in a responsive grid with a filter sidebar.     |
| **Listing Details**     | Shows full property info: image carousel, description, host info, reviews.  |

---

## Component Patterns  
- **Card** (`components/common/Card.tsx`)  
  - Thumbnail image  
  - Title & location  
  - Price & rating badge  
  - “View Details” button  

- **Button** (`components/common/Button.tsx`)  
  - Accepts `variant` (primary / secondary) and `size` props  
  - Handles hover/focus styles  

---

## Getting Started

### 1. Clone the repo  
```bash
git clone https://github.com/your‑org/alx-listing-app.git
cd alx-listing-app
```

### 2. Install dependencies  
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server
```bash
npm run dev
 or
yarn dev
 or
pnpm dev
```
### 4. Open in browser
Navigate to http://localhost:3000 to view the app.
