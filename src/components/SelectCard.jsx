import React from 'react';

const SelectCard = ({ title, image }) => {
  return (
    <div className="relative">
      <img src={image} alt="beach_image1" className="rounded-md" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full ">
        <p className="text-xl text-white left-4 bottom-4 absolute font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
