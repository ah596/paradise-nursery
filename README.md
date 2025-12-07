# Paradise Nursery 🌿

A modern, fully-functional houseplant e-commerce website built with React and Redux.

## 🌐 Live Demo

**Website**: [https://ah596.github.io/paradise-nursery/](https://ah596.github.io/paradise-nursery/)

## ✨ Features

- 🛒 **Shopping Cart** with Redux state management
- 🌱 **6 Unique Houseplants** across 3 categories
- 📱 **Responsive Design** for all devices
- 🎨 **Modern UI** with glassmorphism and animations
- ⚡ **Fast Performance** with Vite build tool

## 🛠️ Tech Stack

- React 19.2.0
- Redux Toolkit 2.11.0
- React Router DOM 7.10.1
- Vite 7.2.4
- Modern CSS with custom properties

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📦 Project Structure

```
src/
├── components/       # Reusable components (Header, ProductCard, CartItem)
├── pages/           # Page components (Landing, ProductListing, ShoppingCart)
├── store/           # Redux store and slices
├── data/            # Plant data
├── App.jsx          # Main app with routing
└── index.css        # Global styles
```

## 🎯 Features Breakdown

### Landing Page
- Hero section with background image
- Company description
- Call-to-action button

### Product Listing
- 6 houseplants with images, names, and prices
- Organized into 3 categories:
  - Low Light
  - Bright Light  
  - Air Purifying
- Add to cart functionality with visual feedback

### Shopping Cart
- View all cart items
- Adjust quantities (+/-)
- Remove items
- Real-time total calculation
- Checkout button (Coming Soon)
- Continue shopping link

### Header
- Navigation links
- Cart icon with live item count
- Sticky positioning
- Glassmorphism effect

## 🎨 Design Features

- **Color Palette**: Botanical greens and earth tones
- **Typography**: Inter (UI) and Playfair Display (headings)
- **Animations**: Fade-in, slide-in, and scale effects
- **Responsive**: Mobile-first design
- **Accessibility**: Semantic HTML and ARIA labels

## 📄 License

This project was created as an educational assignment.

## 👤 Author

**ah596**
- GitHub: [@ah596](https://github.com/ah596)
- Repository: [paradise-nursery](https://github.com/ah596/paradise-nursery)
