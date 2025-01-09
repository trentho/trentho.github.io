

export default function Home() {
    return (
      <div className="w-screen justify-center items-center flex flex-col">
        {/* -------------- HOMEPAGE -------------- */}
        <div
          className="min-h-screen w-full flex flex-row justify-center items-center p-10 bg-[#74bcec] gap-20"
          id="home"
        >
          <div className="container grid md:grid-cols-2 gap-8 md:gap-20 md:items-center justify-center">
            <div className="h-1/2 w-full">
              {/* Add your code editor component or placeholder */}
              
              <div className="bg-gray-300 p-5 rounded">Code Editor</div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-1 w-full">
              <h1 className="text-6xl font-semibold text-[#354259]">
                Hi, my
                <br />
                name is
              </h1>
              <h1 className="text-6xl font-semibold text-white">
                Trent Ho<span className="text-[#354259]">,</span>
              </h1>
              <h1 className="text-6xl font-semibold text-[#354259]">and i&apos;m a</h1>
              <h1 className="text-6xl font-semibold text-white">
                software
                <br />
                engineer<span className="text-[#354259]">.</span>
              </h1>
              <div className="flex flex-row mt-5 gap-5 ">
                {/* Placeholder for social media links */}
                <a
                  href="https://www.linkedin.com/in/srdickerson"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <div className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out">
                    LinkedIn Icon
                  </div>
                </a>
                <a
                  href="https://www.github.com/sarahrdickerson"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <div className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out">
                    GitHub Icon
                  </div>
                </a>
                <a
                  href="/Dickerson_Sarah.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume"
                >
                  <div className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out">
                    Resume Icon
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* -------------- PROJECTS -------------- */}
        <div
          className="bg-[#EDECED] text-[#131411] py-10 md:px-10 w-full"
          id="projects"
        >
          <div>
            <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
              <div className="md:col-start-2 md:col-span-2">
                <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
                  projects
                </h2>
              </div>
            </div>
            {/* Placeholder for projects */}
            <div className="bg-gray-200 p-10 rounded">Projects Grid</div>
          </div>
        </div>
  
        {/* -------------- EXPERIENCE -------------- */}
        <div
          className="min-h-screen bg-[#EDECED] text-[#131411] py-10 md:px-10 w-full"
          id="experience"
        >
          {/* EDUCATION */}
          <div>
            <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
              <div className="md:col-start-2 md:col-span-2">
                <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
                  education
                </h2>
              </div>
            </div>
  
            <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
              <div className="md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
                2020 - 2024
              </div>
              <div className="md:pl-12 md:col-span-2 relative text-[#131411] ">
                <h3 className="text-xl hover:text-[#bf5701] transition duration-300 ease-in-out">
                  B.S., Electrical and Computer Engineering
                </h3>
                <p className="text-lg text-gray-800 hover:text-[#bf5701] transition duration-300 ease-in-out">
                  Minor: Business
                </p>
                <a
                  className="text-md text-gray-600 pb-4 italic hover:text-[#bf5701] transition duration-300 ease-in-out"
                  href="https://www.utexas.edu"
                >
                  The University of Texas at Austin
                </a>
              </div>
            </div>
          </div>
  
          {/* EXPERIENCE */}
          <div className="relative pb-5">
            <div className="absolute inset-0">
              <div className="container grid md:grid-cols-3 gap-8 items-center h-full w-full">
                <div className="md:col-start-2 h-full pt-16 ml-2">
                  <div className="w-0.5 bg-gray-500 h-full"></div>
                </div>
              </div>
            </div>
  
            {/* Placeholder for experience */}
            <div className="bg-gray-300 p-5 rounded">Experience</div>
          </div>
        </div>
      </div>
    );
  }
  