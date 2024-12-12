import React from 'react';

const Hero = () => {
  return (
    <section className="bg-darkGreen text-offWhite h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">Hi, I'm Ghiwa Khoder</h1>
      <p className="mt-4 text-xl">Aspiring Full Stack Developer</p>
      <button className="mt-8 px-6 py-3 bg-mediumGreen text-darkGreen rounded-lg shadow-lg hover:bg-lightGreen">
        View My Work
      </button>
    </section>
  );
};

export default Hero;