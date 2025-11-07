/**
 * Skills Component
 * Display technical skills organized by category
 * Features tag cloud layout with filtering and animated entrance effects
 */

import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import type { SkillsProps, Skill, SkillCategory } from '../../types';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  // Get unique categories
  const categories: Array<SkillCategory | 'all'> = [
    'all',
    'frontend',
    'backend',
    'tools',
    'other',
  ];

  // Category display names
  const categoryNames: Record<SkillCategory | 'all', string> = {
    all: 'All Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & DevOps',
    other: 'Other',
  };

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  // Group skills by category for organized display
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__container">
        <FadeIn delay={100} duration={800}>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="My technical expertise"
          />
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={200} duration={600}>
          <div className="skills-section__filter">
            <GlassCard variant="light" blur="md" className="skills-section__filter-card">
              <div className="skills-section__filter-buttons">
                {categories.map((category) => (
                  <Tag
                    key={category}
                    label={categoryNames[category]}
                    variant={activeCategory === category ? 'accent' : 'default'}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    size="md"
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </FadeIn>

        {/* Skills Display - Tag Cloud Style */}
        {activeCategory === 'all' ? (
          // Show all skills organized by category
          <div className="skills-section__categories">
            {(Object.keys(skillsByCategory) as SkillCategory[]).map((category, catIndex) => (
              <FadeIn key={category} delay={300 + catIndex * 100} duration={600}>
                <div className="skills-section__category-group">
                  <h3 className="skills-section__category-title">
                    {categoryNames[category]}
                  </h3>
                  <div className="skills-section__skills-grid">
                    {skillsByCategory[category].map((skill, skillIndex) => (
                      <ScaleIn
                        key={skill.id}
                        delay={400 + catIndex * 100 + skillIndex * 50}
                        duration={500}
                      >
                        <GlassCard
                          variant="medium"
                          blur="md"
                          hover
                          className="skills-section__skill-card"
                        >
                          {/* Skill Icon */}
                          {skill.icon && (
                            <div
                              className="skills-section__skill-icon"
                              style={{ color: skill.color }}
                              aria-hidden="true"
                            >
                              {skill.icon}
                            </div>
                          )}

                          {/* Skill Name */}
                          <h4 className="skills-section__skill-name">
                            {skill.name}
                          </h4>

                          {/* Proficiency Indicator */}
                          {skill.proficiency && (
                            <div
                              className="skills-section__proficiency"
                              aria-label={`Proficiency: ${skill.proficiency} out of 5`}
                            >
                              <div className="skills-section__proficiency-bar">
                                <div
                                  className="skills-section__proficiency-fill"
                                  style={{
                                    width: `${(skill.proficiency / 5) * 100}%`,
                                    backgroundColor: skill.color || 'var(--color-primary)',
                                  }}
                                />
                              </div>
                              <span className="skills-section__proficiency-text">
                                {skill.proficiency}/5
                              </span>
                            </div>
                          )}
                        </GlassCard>
                      </ScaleIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          // Show filtered skills
          <div className="skills-section__skills-grid">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <ScaleIn key={skill.id} delay={300 + index * 50} duration={500}>
                  <GlassCard
                    variant="medium"
                    blur="md"
                    hover
                    className="skills-section__skill-card"
                  >
                    {/* Skill Icon */}
                    {skill.icon && (
                      <div
                        className="skills-section__skill-icon"
                        style={{ color: skill.color }}
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </div>
                    )}

                    {/* Skill Name */}
                    <h4 className="skills-section__skill-name">
                      {skill.name}
                    </h4>

                    {/* Proficiency Indicator */}
                    {skill.proficiency && (
                      <div
                        className="skills-section__proficiency"
                        aria-label={`Proficiency: ${skill.proficiency} out of 5`}
                      >
                        <div className="skills-section__proficiency-bar">
                          <div
                            className="skills-section__proficiency-fill"
                            style={{
                              width: `${(skill.proficiency / 5) * 100}%`,
                              backgroundColor: skill.color || 'var(--color-primary)',
                            }}
                          />
                        </div>
                        <span className="skills-section__proficiency-text">
                          {skill.proficiency}/5
                        </span>
                      </div>
                    )}
                  </GlassCard>
                </ScaleIn>
              ))
            ) : (
              <FadeIn delay={300} duration={600}>
                <GlassCard variant="light" blur="md" className="skills-section__empty">
                  <p className="skills-section__empty-text">
                    No skills found in this category.
                  </p>
                </GlassCard>
              </FadeIn>
            )}
          </div>
        )}

        {/* Skills Summary */}
        <FadeIn delay={500} duration={600}>
          <GlassCard variant="light" blur="lg" className="skills-section__summary">
            <div className="skills-section__summary-content">
              <h3 className="skills-section__summary-title">
                Continuous Learning
              </h3>
              <p className="skills-section__summary-text">
                I'm always expanding my skill set and staying up-to-date with the latest
                technologies and best practices in web development.
              </p>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;