# Volvo Cars (Global Online Digital)

This project bootstrapped with [`NextJS`](https://nextjs.org).

## Application is deployed and published using Vercel.

**You can check the application through this [link](https://volvotest-ih3j-git-master-sherifamgadnabih.vercel.app/)**

## Getting Started

First, run the development server:

```bash
npm i
&&
npm run dev
```

**Testing**:

Unit testing:

```bash
npm run component:headless
```

E2E testing:

```bash
npm run cypress
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features:

1. Initial landing page displays carousel of cars which is created using [ReactMultiCarousel]
2. After the initial launch, user is able to filter the results (based on `bodyType`) with help of provided filters.
3. Clcking on Learn/Shop will redirect you to the respective dynamic page. URL will be changed according to the car id.
4. A mobile-first design approach is implemented using modular css where,
   - device < 464 will render 2 cards (Mobile View)
   - 464 < device < 1024 will render 2 cards. (Tab View)
   - devices > 1024 will render 4 cards in the view area. (Laptop/Desktop View)

## Asumptions:

1. [VCC-UI]component library have been used for this responsive design.
2. Server side rendering has been implemented in all pages
3. E2e testing using Cypress
4. Unit testing using Cypress

## Project Structure:

1. `index.tsx` is the staring file in this repository.
2. `_app.tsx` is used for router setup and layout.
3. All the screens/pages are under `pages`
4. resuable components and elements are under the src folder

## Screenshots

![VolvoCars](/public/screenshots/desktop.png?raw=true "Desktop View")

![VolvoCars](/public/screenshots/tablet.png?raw=true "Tab View")

![VolvoCars](/public/screenshots/mobile.png?raw=true "Mobile View")
