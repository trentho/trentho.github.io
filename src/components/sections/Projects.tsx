/**
 * Projects Component
 * Showcase of portfolio projects in a grid layout
 * Features project cards with images, descriptions, tech stack, and links
 */

import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import type { ProjectsProps, Project } from '../../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ScaleIn delay={200 + index * 100} duration={600}>
      <GlassCard
        variant="medium"
        blur="lg"
        hover
        className="project-card"
      >
        {/* Project Image */}
        <div className="project-card__image-wrapper">
          <div className={`project-card__image-container ${imageLoaded ? 'loaded' : ''}`}>
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="project-card__image-placeholder" aria-hidden="true">
                Loading...
              </div>
            )}
          </div>
          
          {/* Featured badge */}
          {project.featured && (
            <div className="project-card__featured-badge" aria-label="Featured project">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="project-card__content">
          {/* Title and Category */}
          <div className="project-card__header">
            <h3 className="project-card__title">{project.title}</h3>
            {project.category && (
              <span className="project-card__category">{project.category}</span>
            )}
          </div>

          {/* Description */}
          <p className="project-card__description">{project.description}</p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-card__technologies">
              <h4 className="project-card__technologies-title">Tech Stack:</h4>
              <div className="project-card__technologies-list">
                {project.technologies.map((tech, techIndex) => (
                  <Tag
                    key={techIndex}
                    label={tech}
                    size="sm"
                    variant="primary"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="project-card__links">
            {project.liveUrl && (
              <GlassButton
                variant="primary"
                size="sm"
                href={project.liveUrl}
                external
                className="project-card__link-button"
              >
                🔗 Live Demo
              </GlassButton>
            )}
            {project.githubUrl && (
              <GlassButton
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                external
                className="project-card__link-button"
              >
                💻 GitHub
              </GlassButton>
            )}
          </div>

          {/* Date */}
          {project.date && (
            <div className="project-card__date">
              <span className="project-card__date-text">
                📅 {project.date}
              </span>
            </div>
          )}
        </div>
      </GlassCard>
    </ScaleIn>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');

  // Get unique categories (filter out undefined and convert to string array)
  const categories: string[] = ['all', ...new Set(projects.map((p) => p.category).filter((c): c is string => Boolean(c)))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  // Sort projects: featured first, then by date
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return 0;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <FadeIn delay={100} duration={800}>
          <SectionTitle
            title="Projects"
            subtitle="Showcasing my work and creations"
          />
        </FadeIn>

        {/* Category Filter */}
        {categories.length > 1 && (
          <FadeIn delay={200} duration={600}>
            <div className="projects-section__filter">
              <h3 className="projects-section__filter-title">Filter by:</h3>
              <div className="projects-section__filter-buttons">
                {categories.map((category) => (
                  <Tag
                    key={category}
                    label={category === 'all' ? 'All Projects' : category}
                    variant={filter === category ? 'accent' : 'default'}
                    active={filter === category}
                    onClick={() => setFilter(category)}
                    size="md"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Projects Grid */}
        <div className="projects-section__grid">
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))
          ) : (
            <FadeIn delay={300} duration={600}>
              <GlassCard variant="light" blur="md" className="projects-section__empty">
                <p className="projects-section__empty-text">
                  No projects found in this category.
                </p>
              </GlassCard>
            </FadeIn>
          )}
        </div>

        {/* View More Button (optional) */}
        {sortedProjects.length > 6 && (
          <FadeIn delay={400} duration={600}>
            <div className="projects-section__view-more">
              <GlassButton
                variant="secondary"
                size="lg"
                onClick={() => {
                  // Could implement pagination or "load more" functionality
                  console.log('View more projects');
                }}
              >
                View More Projects
              </GlassButton>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Projects;