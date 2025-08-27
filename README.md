# Sweden Relocators - Next.js Website

A modern, responsive website for Sweden Relocators AB built with Next.js 15, TypeScript, and Tailwind CSS, featuring smooth scroll animations and a professional design.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with aesthetic background patterns
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Scroll Animations**: Smooth slide-up animations triggered by scrolling
- **Blur Navigation**: Dynamic navbar with backdrop blur effect on scroll
- **Color System**: Centralized color management with JSON configuration
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component Architecture**: Reusable, modular components

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons
- **Animations**: CSS Keyframes + Intersection Observer API
- **Build Tool**: Turbopack (Next.js built-in)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ObaidVirk/Sweden.git
cd Sweden
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

### Navigation
- **Fixed Header**: Stays at top during scroll
- **Blur Effect**: Dynamic background blur when scrolling
- **Responsive Menu**: Adapts to different screen sizes
- **Color Variables**: Centralized color management

### Hero Section
- **Aesthetic Background**: Geometric patterns and gradients
- **Responsive Typography**: Scales across devices
- **Call-to-Action Buttons**: Interactive with hover effects
- **Video Placeholder**: Professional presentation area

### Scroll Animations
- **Intersection Observer**: Efficient scroll detection
- **Smooth Transitions**: CSS-based animations
- **Staggered Effects**: Natural, sequential animations
- **Performance Optimized**: Minimal impact on performance

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/
│   └── Navbar.tsx           # Navigation component
├── hooks/
│   └── useScrollAnimation.js # Scroll animation hook
└── styles/
    └── colors.json          # Color system configuration
```

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 👨‍💻 Developer

**Obaid Virk**
- GitHub: [@ObaidVirk](https://github.com/ObaidVirk)

---

**Sweden Relocators AB** - Your trusted partner for a successful relocation to Sweden.
