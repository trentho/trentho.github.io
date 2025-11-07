/**
 * About Component
 * Personal introduction and background information section
 * Features profile image, bio text, and key highlights with glassmorphic styling
 */

import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import type { AboutProps } from '../../types';

const About: React.FC<AboutProps> = ({
  bio,
  image,
  highlights = [],
}) => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__container">
        <FadeIn delay={100} duration={800}>
          <SectionTitle
            title="About Me"
            subtitle="Get to know me better"
          />
        </FadeIn>

        <div className="about-section__content">
          {/* Profile Image */}
          {image && (
            <SlideIn direction="left" delay={200} duration={800}>
              <div className="about-section__image-wrapper">
                <GlassCard variant="medium" blur="md" className="about-section__image-card">
                  <div className="about-section__image-container">
                    <img
                      src={image}
                      alt="Profile"
                      className="about-section__image"
                      loading="lazy"
                    />
                  </div>
                </GlassCard>
              </div>
            </SlideIn>
          )}

          {/* Bio and Highlights */}
          <div className="about-section__text">
            <SlideIn direction="right" delay={300} duration={800}>
              <GlassCard variant="light" blur="lg" className="about-section__bio-card">
                <div className="about-section__bio">
                  <p className="about-section__bio-text">{bio}</p>
                </div>
              </GlassCard>
            </SlideIn>

            {/* Highlights */}
            {highlights.length > 0 && (
              <FadeIn delay={500} duration={800}>
                <div className="about-section__highlights">
                  <h3 className="about-section__highlights-title">Key Highlights</h3>
                  <div className="about-section__highlights-grid">
                    {highlights.map((highlight, index) => (
                      <SlideIn
                        key={index}
                        direction="up"
                        delay={600 + index * 100}
                        duration={600}
                      >
                        <GlassCard
                          variant="medium"
                          blur="md"
                          hover
                          className="about-section__highlight-card"
                        >
                          <div className="about-section__highlight-icon" aria-hidden="true">
                            ✓
                          </div>
                          <p className="about-section__highlight-text">{highlight}</p>
                        </GlassCard>
                      </SlideIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;