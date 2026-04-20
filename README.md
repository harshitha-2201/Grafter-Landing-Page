# 🚀 Grafterr Landing Page (React + Vite)

A pixel-perfect, fully responsive landing page built as part of a front-end technical assessment for **Grafterr**.  
The project is developed using **React + Vite**, focusing on component-based architecture, dynamic data rendering, and smooth UI interactions.

---

## 🌐 Live Demo
👉 [Live URL] https://merry-rugelach-169aa2.netlify.app/

---

---

## ⚙️ Tech Stack

- React 18 (Functional Components)
- Vite (Fast build tool)
- JavaScript (ES6+)
- CSS3 (Flexbox, Grid, Animations)
- Fetch API (Simulated JSON API)
- Custom React Hooks

---

## 📁 Project Structure
grafterr-landing/
│
├── public/
│ └── images/
└── data/
│    ├── content.json
│
├── src/
│ ├── components/
│ │ ├── ui/
│ │ │ ├── GradientText.jsx
│ │ │ ├── GradientButton.jsx
│ │ │ ├── Carousel.jsx
│ │ │ ├── FloatingShape.jsx
│ │ │ └── Skeleton.jsx
│ │
│ ├── sections/
│ │ ├── HeroSection.jsx
│ │ └── FeaturesSection.jsx
│ │
│ ├── hooks/
│ │ ├── useCarousel.js
│ │ └── useContent.js
│ │
│ ├── services/
│ │ └── api.js
│ │
│ ├── data/
│ │ └── content.json
│ │
│ ├── styles/
│ │ ├── global.css
│ │ └── variables.css
│ │
│ ├── App.jsx
│ └── main.jsx


---

## ✨ Features

### 🏠 Hero Section
- Gradient headline text ("technology provider")
- Subheadline with CTA button
- Floating decorative shapes (circle & rectangle)
- Fully responsive layout

---

### 🎯 Features Section
- Section title with accent styling
- Subtitle with divider line
- Fully dynamic content from JSON
- Clean card-based UI

---

### 🎠 Carousel System
- Shows **3 items (desktop)**
- Shows **2 items (tablet)**
- Shows **1 item (mobile)**
- Smooth 300ms slide animation
- Next / Previous navigation
- Touch swipe support (mobile)

---

### 📡 Data Layer (Mock API)
All content is loaded dynamically from `content.json`.

Simulated API includes:
- Hero content
- Features section content
- Navigation data

With artificial delay (1000–1500ms) to mimic real API calls.

---

### ⚙️ Custom Hooks
- `useCarousel()` → handles index logic & navigation
- `useContent()` → handles fetching, loading, and error states

---

### ⏳ Loading States
- Skeleton UI while data loads
- Smooth fade-in transition after load

---

### ❌ Error Handling
- Error message UI if fetch fails
- Retry button to re-fetch data

---

## 📱 Responsive Design

| Device  | Layout        |
|---------|--------------|
| Desktop | 3 items view |
| Tablet  | 2 items view |
| Mobile  | 1 item view  |

---

## 🎨 UI Highlights

- Pixel-perfect Figma implementation
- CSS variables for design system consistency
- Gradient buttons & text styling
- Smooth hover animations
- Floating decorative shapes

---

## 🚀 Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/harshitha-2201/Grafter-Landing-Page
