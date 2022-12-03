import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import heroVideo from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={heroVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="w-full h-full top-0 left-0"></div>
      <div className="absolute top-0 flex flex-col text-center justify-center w-full h-full text-white p-4">
        <h1 className="py-2">First Class Travel</h1>
        <h2 className="py-2">Top 1% Locations WorldWide</h2>
        <form className="flex justify-between max-w-[700px] mx-auto w-full border p-1 items-center text-black bg-gray-100/90 rounded-md mt-2">
          <input
            type="text"
            placeholder="search destination"
            className="w-[300px] sm:w-[400px] bg-transparent focus:outline-none px-2"
          />
          <div>
            <button>
              <AiOutlineSearch
                className="icon"
                size={20}
                style={{ color: '#fff' }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
