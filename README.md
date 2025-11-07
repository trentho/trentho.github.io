# Modern Portfolio Website

A stunning, fully-responsive portfolio website built with React, TypeScript, and Vite, featuring glassmorphism design, smooth animations, and dark/light mode support.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🎨 Glassmorphism Design**: Modern frosted glass aesthetic with backdrop blur effects
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent preferences
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Smooth Animations**: Engaging scroll-based and entrance animations
- **🎯 Type-Safe**: Built with TypeScript for robust code quality
- **♿ Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **🚀 Performance Optimized**: Fast loading with code splitting and lazy loading
- **📊 Progress Tracking**: Visual scroll progress indicator
- **🎭 Interactive Components**: Hover effects, transitions, and micro-interactions

## 🛠️ Technology Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server

### Styling
- **CSS3** - Custom properties and modern CSS features
- **Glassmorphism** - Frosted glass UI design pattern
- **CSS Animations** - Smooth transitions and keyframe animations

### Features
- **Context API** - Theme management
- **Custom Hooks** - Reusable logic (theme, scroll, intersection observer)
- **Intersection Observer** - Scroll-based animations
- **Local Storage** - Theme persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/          # Animation wrapper components
│   │   ├── AnimatedBackground.tsx
│   │   ├── FadeIn.tsx
│   │   ├── ParallaxLayer.tsx
│   │   ├── ScaleIn.tsx
│   │   └── SlideIn.tsx
│   ├── layout/              # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                  # Reusable UI components
│       ├── GlassCard.tsx
│       ├── GlassButton.tsx
│       ├── LoadingSpinner.tsx
│       ├── SectionTitle.tsx
│       ├── SocialLinks.tsx
│       ├── Tag.tsx
│       └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx     # Theme state management
├── hooks/
│   ├── useTheme.ts          # Theme hook
│   ├── useScrollProgress.ts # Scroll tracking
│   ├── useIntersectionObserver.ts
│   ├── useMediaQuery.ts     # Responsive breakpoints
│   └── useLocalStorage.ts   # Persistent storage
├── styles/
│   ├── variables.css        # CSS custom properties
│   ├── global.css           # Global styles
│   ├── glassmorphism.css    # Glass effect styles
│   ├── animations.css       # Animation definitions
│   ├── typography.css       # Font styles
│   ├── utilities.css        # Utility classes
│   ├── layout.css           # Layout styles
│   ├── components.css       # Component styles
│   ├── sections.css         # Section-specific styles
│   └── responsive.css       # Media queries
├── data/
│   └── portfolio.ts         # Portfolio content data
├── types/
│   └── index.ts             # TypeScript type definitions
├── utils/
│   ├── theme.utils.ts       # Theme utilities
│   └── animation.utils.ts   # Animation utilities
├── App.tsx                  # Main app component
└── main.tsx                 # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts:1):

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  bio: 'Your bio...',
  email: 'your.email@example.com',
  location: 'Your Location',
  // ...
};
```

### 2. Add Your Projects

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Brief description',
    image: '/images/project.jpg',
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/user/repo',
    featured: true,
    category: 'Web Development',
    date: '2024-01',
  },
  // Add more projects...
];
```

### 3. Update Skills

```typescript
export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    category: 'frontend',
    proficiency: 5, // 1-5 scale
    icon: 'react',
    color: '#61DAFB',
  },
  // Add more skills...
];
```

### 4. Add Work Experience

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Job description...',
    technologies: ['Tech1', 'Tech2'],
    type: 'work', // or 'education'
    logo: '/images/company-logo.png',
  },
  // Add more experiences...
];
```

### 5. Update Social Links

```typescript
export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  // Add more social links...
];
```

### 6. Customize Theme Colors

Edit [`src/styles/variables.css`](src/styles/variables.css:1):

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  /* Customize other colors... */
}
```

### 7. Add Your Images

Place your images in the `public/images/` directory:
- Project screenshots
- Company logos
- Profile photo
- Any other assets

## 🎯 Component Usage Examples

### Using GlassCard

```tsx
import GlassCard from './components/ui/GlassCard';

<GlassCard variant="medium" blur="lg" hover>
  <h2>Card Title</h2>
  <p>Card content...</p>
</GlassCard>
```

### Using Animation Components

```tsx
import FadeIn from './components/animations/FadeIn';
import SlideIn from './components/animations/SlideIn';

<FadeIn delay={200} duration={800}>
  <h1>Fade in content</h1>
</FadeIn>

<SlideIn direction="left" delay={300}>
  <p>Slide in from left</p>
</SlideIn>
```

### Using Theme Toggle

```tsx
import ThemeToggle from './components/ui/ThemeToggle';

<ThemeToggle />
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   });
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Add deploy script to package.json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   
   # Deploy
   npm run deploy
   ```

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔧 Configuration

### TypeScript Configuration

The project uses strict TypeScript settings. See [`tsconfig.json`](tsconfig.json:1) for details.

### ESLint Configuration

Linting rules are configured in [`eslint.config.js`](eslint.config.js:1).

### Vite Configuration

Build and dev server settings in [`vite.config.ts`](vite.config.ts:1).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

This portfolio follows WCAG 2.1 Level AA guidelines:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast ratios
- Screen reader friendly

## 🐛 Known Issues

- None currently. Please report issues on GitHub.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Glassmorphism design pattern
- React and TypeScript communities

## 📞 Support

For support, email your.email@example.com or open an issue on GitHub.

---

**⭐ If you found this project helpful, please consider giving it a star!**

Made with ❤️ and React
