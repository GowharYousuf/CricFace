import React from 'react';
import Home from "../assets/Home.jpg"
const Hero = () => {
  return (
      <div className='absolute w-full h-full flex items-center justify-center text-white' style={{ backgroundImage: `url(${Home})`, backgroundSize: 'cover', backgroundPosition: 'center',height:'100vh' }}>
        <div className='max-w-[1000px] w-full mx-auto text-center bg-opacity-50 p-4 rounded-lg'>
          <p className='text-[#00df9a] font-bold p-2'>CRICKET BATS FOR ALL LEVELS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[]'>
            Unleash Your Power.
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-3xl text-xl font-bold py-4 '>
              Elevate your game with our premium cricket bats, crafted for players of all levels.
            </p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Shop Now
          </button>
        </div>
      </div>
  );
};

export default Hero