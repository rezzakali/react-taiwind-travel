import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="flex justify-between h-20 items-center px-4 absolute text-white z-10 w-full">
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <AiOutlineSearch size={20} className="mr-2" />
        <AiOutlineUser size={20} />
      </div>
      {/* mobile menu */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-10">
        {showNav ? (
          <AiOutlineClose size={20} className="text-black cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          showNav
            ? 'text-black absolute left-0 top-0 w-full bg-gray-100/90 py-5 px-4 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Views</li>
          <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-3">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-5">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
