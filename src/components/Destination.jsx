import React from 'react';
import beacheImage1 from '../assets/beach_image1.jpg';
import beacheImage2 from '../assets/beach_image2.jpg';
import beacheImage3 from '../assets/beach_image3.jpg';
import beacheImage4 from '../assets/beach_image4.jpg';
import beacheImage5 from '../assets/beach_image5.jpg';

const Destination = () => {
  return (
    <div className="max-w-[1240px] py-16 mx-auto text-center px-2">
      <h1>All-inclusive Resorts</h1>
      <p className="py-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ullam?
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4 py-10">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded"
          src={beacheImage1}
          alt="beach_image1"
        />
        <img
          className="w-full h-full object-cover rounded"
          src={beacheImage2}
          alt="beach_image2"
        />
        <img
          className="w-full h-full object-cover rounded"
          src={beacheImage3}
          alt="beach_image3"
        />
        <img
          className="w-full h-full object-cover rounded"
          src={beacheImage4}
          alt="beach_image4"
        />
        <img
          className="w-full h-full object-cover rounded"
          src={beacheImage5}
          alt="beach_image5"
        />
      </div>
    </div>
  );
};

export default Destination;
