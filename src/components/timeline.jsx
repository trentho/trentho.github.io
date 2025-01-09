// src/components/Timeline.js
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Intersection observer
import { motion } from 'framer-motion';

const milestones = [
  { year: '2018', title: 'Graduated College', description: 'Graduated with a degree in Computer Science.' },
  { year: '2019', title: 'Started Internship', description: 'Worked as a Software Engineering Intern at XYZ Corp.' },
  { year: '2020', title: 'First Full-time Job', description: 'Joined ABC Tech as a Junior Software Engineer.' },
  { year: '2021', title: 'Promoted to Software Engineer', description: 'Got promoted to a full-time Software Engineer at ABC Tech.' },
  { year: '2023', title: 'New Role', description: 'Started working at a new company, DEF Corp, as a Senior Developer.' }
];

const Timeline = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#EDECED]" id="timeline">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center mb-8">My Timeline</h2>
        <div className="relative overflow-x-auto flex items-center space-x-10">
          {milestones.map((milestone, index) => (
            <TimelineNode
              key={index}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineNode = ({ year, title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger animation when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className="timeline-node flex flex-col items-center mb-8 relative"
      initial={{ opacity: 0, x: -200 }} // Start from the left off-screen
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        delay: index * 0.3 // Staggered animation for each milestone
      }}
    >
      <div className="timeline-line bg-[#354259] h-1 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
      <div className="timeline-bubble bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
        <p>{year}</p>
      </div>
      <div className="text-center mt-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Timeline;
