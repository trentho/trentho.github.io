import React from 'react';
import SocialLinks from '../components/socials';
import Education from '../components/education';
import Experience from '../components/experience';
import Timeline from '../components/timeline'; // Import the timeline component

const Home = () => (
  <div className="w-screen justify-center items-center flex flex-col">
    {/* Home Section */}
    <div className="min-h-screen w-full flex flex-row justify-center items-center p-10 bg-[#90d3f4] gap-20" id="home">
      <div className="container text-center">
        {/* Typewriter Effect */}
        "Hi, I’m Trent Ho. I’m a software engineer passionate about building solutions that make a difference."
        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>

      <Timeline />
    

    {/* Projects Section */}
    <section className="bg-[#EDECED] text-[#131411] py-10 md:px-10 w-full" id="projects">
      <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
        <div className="md:col-start-2 md:col-span-2">
          <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
            Projects
          </h2>
        </div>
      </div>
      <div className="bg-gray-200 p-10 rounded">Projects Grid</div>
    </section>

    {/* Experience Section */}
    <section className="min-h-screen bg-[#EDECED] text-[#131411] py-10 md:px-10 w-full" id="experience">
      <Education />
      <Experience />
    </section>
  </div>
);

export default Home;
