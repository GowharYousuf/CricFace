import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 

const AdminNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full bg-gray-900 text-white z-10 '>
      <div className='flex justify-between items-center h-24 max-w-[1300px] mx-auto px-4 border-b border-gray-700'>
        <Link to="/" className='w-full text-3xl font-bold text-[#00df9a]'>CricFace</Link>
        <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-gray-700 transition duration-300 text-[#00df9a]'><Link to="/admin">Products</Link></li>
        <li className='p-4 hover:bg-gray-700 transition duration-300 text-[#00df9a]'><Link to="/orders">Orders</Link></li>
        <li className='p-4 flex btn items-center hover:bg-gray-700 transition duration-300 text-[#00df9a] '>
            <Link to="/">Logout</Link>
        </li>


        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>CricFace</h1>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-700 transition duration-300'><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-700 transition duration-300'><Link to="/about">About</Link></li>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-700 transition duration-300'><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
