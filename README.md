# The Daily Brew ☕

A premium, modern, visually stunning and fully responsive café website for **THE DAILY BREW**.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Motion for React, and Lucide React.

## 🎨 Design & Theme

- **Espresso Brown**: `#4B3025`
- **Coffee Brown**: `#76513D`
- **Mocha**: `#8B6248`
- **Warm Beige**: `#D9C3A5`
- **Cream**: `#F8F3EA`
- **Soft White**: `#FFFCF7`
- **Dark Text**: `#30241F`
- **Typography**: Playfair Display (Headings) & Inter (Body)

## 📁 Project Structure

```
the-daily-brew/
├── public/
│   └── images/
│       ├── 01_hero_banner_clean.jpg   # Main hero banner
│       ├── 02_cappuccino_clean.jpg    # Cappuccino card
│       ├── 03_iced_coffee_clean.jpg   # Cold Coffee card
│       ├── 04_sandwich_clean.jpg      # Classic Sandwich card
│       ├── 05_brownie_clean.jpg       # Chocolate Brownie card
│       └── 06_logo_clean.jpg          # Brand Logo
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Menu.tsx
│   │   └── MenuCard.tsx
│   └── data/
│       └── menu.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

To create a production build:

```bash
npm run build
npm run start
```
