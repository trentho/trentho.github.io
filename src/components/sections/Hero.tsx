/**
 * Hero Component
 * Landing/hero section with animated introduction and call-to-action
 * Features gradient text, glassmorphic card, and animated entrance effects
 */

import React from 'react';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import type { HeroProps } from '../../types';

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  subtitle,
  ctaText = 'View Projects',
  ctaLink = '#projects',
}) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__container">
        <FadeIn delay={200} duration={800}>
          <GlassCard variant="medium" blur="lg" className="hero-section__card">
            <div className="hero-section__content">
              {/* Greeting */}
              <SlideIn direction="down" delay={400} duration={600}>
                <p className="hero-section__greeting">
                  Hi, I'm
                </p>
              </SlideIn>

              {/* Name with gradient effect */}
              <SlideIn direction="up" delay={600} duration={800}>
                <h1 className="hero-section__name">
                  <span className="gradient-text">{name}</span>
                </h1>
              </SlideIn>

              {/* Title */}
              <SlideIn direction="up" delay={800} duration={800}>
                <h2 className="hero-section__title">{title}</h2>
              </SlideIn>

              {/* Subtitle */}
              <FadeIn delay={1000} duration={800}>
                <p className="hero-section__subtitle">{subtitle}</p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={1200} duration={800}>
                <div className="hero-section__cta">
                  <GlassButton
                    variant="primary"
                    size="lg"
                    href={ctaLink}
                    className="hero-section__cta-button"
                  >
                    {ctaText}
                  </GlassButton>
                  <GlassButton
                    variant="secondary"
                    size="lg"
                    href="#contact"
                    className="hero-section__cta-button"
                  >
                    Contact Me
                  </GlassButton>
                </div>
              </FadeIn>
            </div>
          </GlassCard>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1600} duration={800}>
          <div className="hero-section__scroll-indicator" aria-hidden="true">
            <span className="hero-section__scroll-text">Scroll to explore</span>
            <span className="hero-section__scroll-arrow">↓</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;