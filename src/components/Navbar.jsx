import React from 'react';
import Logo from '../assets/logo.svg';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShop } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-center border-b-2 border-gray-100">
      <div className="text-black text-3xl flex justify-between w-[150px] p-10 cursor-pointer">
        <AiOutlineUser />
        <AiOutlineHeart />
      </div>
      <Link to="/" as={NavLink}>
        <div className="">
          <img
            src={Logo}
            alt="Logo Image"
            style={{ width: '150px', cursor: 'pointer' }}
          />
        </div>
      </Link>
      <div className="text-black text-3xl p-10 cursor-pointer">
        <AiOutlineShop />
      </div>
    </div>
  );
};

export default Navbar;
