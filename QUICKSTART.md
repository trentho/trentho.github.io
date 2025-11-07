# 🚀 Quick Start Guide

Get your portfolio website up and running in 3 simple steps!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd trentho.github.io

# Install dependencies
npm install
```

## 🎯 3-Step Setup

### Step 1: Customize Your Portfolio Data

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to add your personal information:

```typescript
export const portfolioData = {
  // Personal Information
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  
  // Contact Information
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  
  // Add your projects, experience, skills, etc.
}
```

**Key sections to customize:**
- `personalInfo` - Your name, title, and bio
- `experience` - Work history and education
- `projects` - Your portfolio projects
- `skills` - Technical skills with proficiency levels
- `contact` - Social media links

### Step 2: Run Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173/`

### Step 3: Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Customization Tips

### Change Theme Colors

Edit [`src/styles/variables.css`](src/styles/variables.css):

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* Customize other colors */
}
```

### Add Your Logo/Avatar

Replace images in the `public/` folder or update image URLs in [`portfolio.ts`](src/data/portfolio.ts).

### Modify Sections

All sections are in [`src/components/sections/`](src/components/sections/):
- [`Hero.tsx`](src/components/sections/Hero.tsx) - Landing section
- [`About.tsx`](src/components/sections/About.tsx) - About me
- [`Experience.tsx`](src/components/sections/Experience.tsx) - Work history
- [`Projects.tsx`](src/components/sections/Projects.tsx) - Portfolio projects
- [`Skills.tsx`](src/components/sections/Skills.tsx) - Technical skills
- [`Contact.tsx`](src/components/sections/Contact.tsx) - Contact form

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

### Deploy to Vercel/Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Features

✅ **Responsive Design** - Works on all devices  
✅ **Dark/Light Mode** - Theme toggle with persistence  
✅ **Smooth Animations** - Scroll-triggered animations  
✅ **Glass Morphism** - Modern UI design  
✅ **TypeScript** - Type-safe development  
✅ **SEO Friendly** - Optimized for search engines  
✅ **Fast Performance** - Optimized build with Vite  

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Vite will automatically try another port
# Or specify a port:
npm run dev -- --port 3000
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**TypeScript errors?**
```bash
# Check types
npx tsc --noEmit
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Project Architecture](ARCHITECTURE.md)

## 💡 Tips

1. **Start with data** - Update [`portfolio.ts`](src/data/portfolio.ts) first
2. **Test locally** - Always run `npm run dev` to preview changes
3. **Build often** - Run `npm run build` to catch errors early
4. **Customize gradually** - Make small changes and test frequently

---

**Need help?** Check the [full documentation](README.md) or open an issue!