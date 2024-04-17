    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 

    const Navbar = () => {
      const [nav, setNav] = useState(false);

      const handleNav = () => {
        setNav(!nav);
      };

      return (
        <div className='fixed w-full bg-gray-900 text-white z-10 '>
          <div className='flex justify-between items-center h-24 max-w-[1300px] mx-auto px-4 border-b border-gray-700'>
            <Link to="/" className='w-full text-3xl font-bold text-[#00df9a]'>CricFace</Link>
            <ul className='hidden md:flex'>
              <li className='p-4 hover:bg-gray-700 transition duration-300 text-[#00df9a]'><Link to="/">Home</Link></li>
              <li className='p-4 hover:bg-gray-700 transition duration-300 text-[#00df9a]'><Link to="/about">About</Link></li>
              <li className='p-4 flex items-center hover:bg-gray-700 transition duration-300 text-[#00df9a]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check mr-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                <Link to="/cart">Cart</Link>
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

    export default Navbar;
