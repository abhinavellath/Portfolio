import React from 'react';
import Button from '../components/Button.jsx';

const Home2 = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-8 md:px-42 py-16"
    >
      <div className=" text-left text-white space-y-6 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-200 text-center font-['PT_Serif'] ">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          A B.Tech CSE Graduate Engineer with a strong foundation in cloud computing and DevOps practices. 
          With hands-on experience across cloud, DevOps, automation, monitoring, databases, and frontend development, 
          I thrive at the intersection of technology and problem-solving. I love taking complex systems and 
          turning them into efficient, scalable, and reliable solutions that have real impact.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Hard launching a remarkable career in Tech is my career goal. I'm welcome to opportunities that provide 
          a platform for me to learn and grow.
        </p>

        <div className="flex justify-center mt-4">
          <Button text="More about me ->" onClick={() => window.location.href = '#'} />
        </div>        
      </div>
    </section>
  );
};

export default Home2;
