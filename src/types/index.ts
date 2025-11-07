/**
 * TypeScript Type Definitions
 * All interfaces and types for the glassmorphism portfolio
 */

/* ===== THEME TYPES ===== */

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  shadow: string;
}

/* ===== PROJECT TYPES ===== */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
  date?: string;
}

/* ===== SKILL TYPES ===== */

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency?: number; // 1-5 scale
  icon?: string;
  color?: string;
}

/* ===== EXPERIENCE TYPES ===== */

export type ExperienceType = 'work' | 'education';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies?: string[];
  type: ExperienceType;
  logo?: string;
}

/* ===== SOCIAL LINK TYPES ===== */

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

/* ===== COMPONENT PROP TYPES ===== */

// Layout Components
export interface NavigationProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface ScrollProgressProps {
  className?: string;
  color?: string;
}

// Section Components
export interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface AboutProps {
  bio: string;
  image?: string;
  highlights?: string[];
}

export interface ExperienceProps {
  experiences: Experience[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface SkillsProps {
  skills: Skill[];
}

export interface ContactProps {
  email?: string;
  socialLinks: SocialLink[];
}

// UI Components
export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'medium' | 'heavy';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

export interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface ProjectCarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface SkillTagProps {
  skill: Skill;
  onClick?: () => void;
  active?: boolean;
}

export interface TimelineItemProps {
  experience: Experience;
  index: number;
  alignment?: 'left' | 'right';
}

export interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ParallaxBackgroundProps {
  layers?: number;
  speed?: number;
  className?: string;
}

export interface AnimatedTextProps {
  children: string;
  variant?: 'fade' | 'slide' | 'typewriter';
  delay?: number;
  className?: string;
}

// Animation Components
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export interface SlideInProps {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  distance?: number;
}

export interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
}

export interface ParallaxLayerProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
}

/* ===== HOOK RETURN TYPES ===== */

export interface UseScrollPositionReturn {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number; // 0-1
}

export interface UseParallaxReturn {
  offset: number;
  ref: React.RefObject<HTMLElement>;
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  hasIntersected: boolean;
}

export interface UseParallaxOptions {
  speed: number;
  direction?: 'vertical' | 'horizontal';
}

export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/* ===== UTILITY TYPES ===== */

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/* ===== ANIMATION TYPES ===== */

export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce';
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';
export type AnimationEasing = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'smooth';

export interface AnimationConfig {
  variant: AnimationVariant;
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  easing?: AnimationEasing;
}

/* ===== RESPONSIVE TYPES ===== */

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
}

/* ===== GLASSMORPHISM TYPES ===== */

export type GlassVariant = 'light' | 'medium' | 'heavy';
export type GlassBlur = 'sm' | 'md' | 'lg' | 'xl';

export interface GlassConfig {
  variant?: GlassVariant;
  blur?: GlassBlur;
  hover?: boolean;
  border?: boolean;
  shadow?: boolean;
}