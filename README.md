# Nano Banana - Premium Scrollytelling Experience

![Nano Banana Logo Placeholder](https://via.placeholder.com/800x400?text=Nano+Banana)

Welcome to the **Nano Banana** project! This is a complete, production-ready, single-page "scrollytelling" e-commerce website for a premium juice brand.

It was built with a focus on high-end interactive animations, featuring HTML5 canvas-based image sequences for highly engaging product visualization and an *Awwwards*-winning aesthetic.

## 🚀 Features

- **Interactive Scrollytelling**: Engaging user experience tied to scroll progression.
- **Canvas-based Image Sequences**: Smooth, high-performance product 3D rotation/visualization using HTML5 `<canvas>`.
- **Dynamic Flavour Switching**: Seamless transitions between different juice flavors with dynamic gradient backgrounds.
- **Micro-Animations**: Extensive use of `framer-motion` for polished UI transitions and hover effects.
- **Premium UI/Glassmorphism**: Elegant, modern design using Tailwind CSS with glassmorphic elements and backdrop blurs.
- **Fully Responsive**: Optimized for seamless viewing across mobile, tablet, and desktop devices.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

First, ensure you have Node.js (v18 or newer recommended) installed on your system.

1. **Clone the repository** (or download the project files):
   ```bash
   git clone <repository-url>
   cd nano-banana
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```text
├── app/                  # Next.js 14 App Router layout, pages, and global CSS
├── components/           # Reusable React components (Navbar, Footer, Sections, etc.)
├── data/                 # Static data for products, flavors, and text content
├── public/               # Static assets (images, canvas sequence frames)
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Design Philosophy

This project aims to achieve an extreme level of polish. The design prioritizes visual excellence, utilizing modern typography, harmonious color palettes (driven dynamically by product data), and a dynamic layout that feels responsive and "alive" through extensive micro-animations.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
