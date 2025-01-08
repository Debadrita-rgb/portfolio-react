// import React from 'react'
// import logo from '../../assets/images/Portfoliologo.png';
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-base-100 bg-gray-900 mb-10 flex items-center justify-between py-6'>
        <div className='flex'>
          {/* <a href='/'><img src={logo} className='image-nav'/></a> */}
          <a href='/'>p</a>
        </div>
        <div className='flex-none gap-2'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto'
            />
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <a className='justify-between' href='/about'>
                  About
                </a>
              </li>
              <li>
                <a className='justify-between' href='/portfolio'>
                  Portfolio
                </a>
              </li>
              <li>
                <a className='justify-between' href='/contact'>
                  Contact
                </a>
              </li>
              <li>
                <a className='justify-between' href='/blog'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
