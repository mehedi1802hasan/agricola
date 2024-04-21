"use client"
import React, { useState, useEffect } from 'react';
import logo from "../../assest/logo.jpg";
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import Image from 'next/image';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`fixed z-20 navbar lg:px-24 text-white font-bold flex justify-between items-center ${scrolling ? 'bg-green-800' : 'bg-[#FAF7F0] text-green-700 shadow-md'}`}>
        <div className="">
          {
            scrolling ? (<div>
              <Image src={logo} alt='logo image' className=''></Image>
            </div>)
              :
              (
                <div className='text-4xl'>
                  Agricola
                </div>
              )
          }
        </div>

        <div className='flex gap-4 lg:hidden md:hidden'>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/'>Pages</Link></li>
              <li><Link href='/'>Portfolio</Link></li>
              <li><Link href='/'>Blogs</Link></li>
              <li><Link href='/'>Shop</Link></li>
              <li><Link href='/'>Contacts</Link></li>
            </ul>
          </div>
          <div className='flex gap-5 items-center text-2xl '>
            <RiShoppingBagLine />  <CiSearch />
          </div>
        </div>
        <div className={`hidden lg:flex gap-5 `}>
          <div>
            <ul className="menu menu-horizontal px-1 text-base">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/pages'>Pages</Link></li>
              <li><Link href='/portfolio'>Portfolio</Link></li>
              <li><Link href='/blogs'>Blogs</Link></li>
              <li><Link href='/shop'>Shop</Link></li>
              <li><Link href='/contacts'>Contacts</Link></li>
            </ul>
          </div>
          <div className='flex gap-5 items-center text-2xl '>
            <RiShoppingBagLine />  <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
