import React from 'react';
import beacheImage1 from '../assets/beach_image1.jpg';
import beacheImage2 from '../assets/beach_image2.jpg';
import beacheImage3 from '../assets/beach_image3.jpg';
import beacheImage4 from '../assets/beach_image4.jpg';
import beacheImage5 from '../assets/beach_image5.jpg';
import beacheImage6 from '../assets/beach_image6.jpg';
import SelectCard from './SelectCard';

const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-2 py-10">
      <SelectCard title={'Maldives'} image={beacheImage1} />
      <SelectCard title={'Shivrajpur'} image={beacheImage2} />
      <SelectCard title={'Puri Golden Beach'} image={beacheImage3} />
      <SelectCard title={'Kasarkod and Padubidri'} image={beacheImage4} />
      <SelectCard title={'Ghoghla'} image={beacheImage5} />
      <SelectCard title={'Rushikonda '} image={beacheImage6} />
    </div>
  );
};

export default Select;
