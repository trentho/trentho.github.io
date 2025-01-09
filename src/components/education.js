// src/components/Education.js
const Education = () => (
    <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
      <div className="md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
        2020 - 2024
      </div>
      <div className="md:pl-12 md:col-span-2 relative text-[#131411]">
        <h3 className="text-xl hover:text-[#bf5701] transition duration-300 ease-in-out">
          B.S., Computer Science
        </h3>
        <p className="text-lg text-gray-800 hover:text-[#bf5701] transition duration-300 ease-in-out">
        </p>
        <a
          className="text-md text-gray-600 pb-4 italic hover:text-[#bf5701] transition duration-300 ease-in-out"
          href="https://www.utexas.edu"
        >
          The University of Texas at Austin
        </a>
      </div>
    </div>
  );
  
  export default Education;
  