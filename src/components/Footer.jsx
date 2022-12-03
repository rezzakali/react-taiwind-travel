import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-[1240px] py-16 mx-auto flex flex-col px-2">
        <div className="sm:flex text-center items-center justify-between">
          <h1>BEACHES.</h1>

          <div className="flex justify-between my-4 max-w-[280px] w-full">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex ">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
