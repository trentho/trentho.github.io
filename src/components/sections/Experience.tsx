/**
 * Experience Component
 * Timeline of work experience and education history
 * Features vertical timeline with glassmorphic cards and animated reveals
 */

import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import type { ExperienceProps, Experience } from '../../types';

const ExperienceItem: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => {
  // Alternate alignment for desktop view
  const alignment = index % 2 === 0 ? 'left' : 'right';
  const slideDirection = alignment === 'left' ? 'right' : 'left';

  return (
    <SlideIn
      direction={slideDirection}
      delay={200 + index * 100}
      duration={800}
    >
      <div className={`experience-item experience-item--${alignment}`}>
        {/* Timeline connector */}
        <div className="experience-item__connector" aria-hidden="true">
          <div className="experience-item__dot"></div>
          <div className="experience-item__line"></div>
        </div>

        {/* Experience card */}
        <GlassCard
          variant="medium"
          blur="lg"
          hover
          className="experience-item__card"
        >
          {/* Header with logo and dates */}
          <div className="experience-item__header">
            {experience.logo && (
              <div className="experience-item__logo-wrapper">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="experience-item__logo"
                  loading="lazy"
                />
              </div>
            )}
            <div className="experience-item__dates">
              <span className="experience-item__date-badge">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="experience-item__content">
            <h3 className="experience-item__title">{experience.title}</h3>
            <div className="experience-item__company">
              <span className="experience-item__company-name">
                {experience.company}
              </span>
              <span className="experience-item__location" aria-label="Location">
                📍 {experience.location}
              </span>
            </div>
            <p className="experience-item__description">
              {experience.description}
            </p>

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="experience-item__technologies">
                <h4 className="experience-item__technologies-title">
                  Technologies:
                </h4>
                <div className="experience-item__technologies-list">
                  {experience.technologies.map((tech, techIndex) => (
                    <Tag
                      key={techIndex}
                      label={tech}
                      size="sm"
                      variant="default"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Type badge */}
          <div className="experience-item__type-badge">
            {experience.type === 'work' ? '💼 Work' : '🎓 Education'}
          </div>
        </GlassCard>
      </div>
    </SlideIn>
  );
};

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  // Separate work and education experiences
  const workExperiences = experiences.filter((exp) => exp.type === 'work');
  const educationExperiences = experiences.filter((exp) => exp.type === 'education');

  return (
    <section id="experience" className="experience-section">
      <div className="experience-section__container">
        <FadeIn delay={100} duration={800}>
          <SectionTitle
            title="Experience & Education"
            subtitle="My professional journey"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="experience-section__timeline">
          {/* Work Experience */}
          {workExperiences.length > 0 && (
            <div className="experience-section__category">
              <FadeIn delay={200} duration={600}>
                <h3 className="experience-section__category-title">
                  Work Experience
                </h3>
              </FadeIn>
              <div className="experience-section__items">
                {workExperiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {educationExperiences.length > 0 && (
            <div className="experience-section__category">
              <FadeIn delay={300} duration={600}>
                <h3 className="experience-section__category-title">
                  Education
                </h3>
              </FadeIn>
              <div className="experience-section__items">
                {educationExperiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;