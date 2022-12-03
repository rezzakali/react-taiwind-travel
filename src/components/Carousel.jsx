import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
];
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const handleLeft = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const handleRight = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] py-10 mx-auto px-2 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={handleLeft}
        className="mx-3 absolute top-[50%] text-white cursor-pointer text-3xl left-0"
      />
      <BsArrowRightSquareFill
        onClick={handleRight}
        className="mx-3 absolute top-[50%] text-white cursor-pointer text-3xl right-0"
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={index === slide ? 'opacity-100' : 'opacity-0'}
        >
          {index === slide && (
            <img src={item.url} className="rounded-md" alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
