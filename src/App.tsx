import { Navigation, Footer, ScrollProgress } from './components/layout';
import { Hero, About, Projects, Skills, Contact } from './components/sections';
import Experience from './components/sections/Experience';
import AnimatedBackground from './components/animations/AnimatedBackground';
import { projects, skills, experiences, socialLinks, personalInfo } from './data/portfolio';
import './App.css';

/**
 * Main App Component
 * 
 * Integrates all portfolio sections with layout components:
 * - AnimatedBackground: Provides dynamic particle background
 * - ScrollProgress: Shows reading progress indicator
 * - Navigation: Sticky navigation with smooth scrolling
 * - Section Components: Hero, About, Experience, Projects, Skills, Contact
 * - Footer: Site footer with social links and back-to-top
 */
function App() {
  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <Hero
            name={personalInfo.name}
            title={personalInfo.title}
            subtitle={personalInfo.subtitle}
          />
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <About bio={personalInfo.bio} />
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <Experience experiences={experiences} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <Projects projects={projects} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <Skills skills={skills} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <Contact socialLinks={socialLinks} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
