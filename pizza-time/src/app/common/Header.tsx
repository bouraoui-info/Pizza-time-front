"use client";
import React from 'react';
import styles from './Header.module.css';
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { useSideBarDrawer } from '../../../../lib/store';

const Header = () => {
    const {onSideBarOpen}=useSideBarDrawer()
    return (
        <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
            {/* Left Area */}
            <div className="flex items-center gap-x-8">
                <button className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600"
                onClick={onSideBarOpen}>
            <div className="cursor-pointer shrink-0" >  <HiBars3 size={28}/></div>
                  

                </button>
                <button>Location</button> {/* Corrected button tag closing */}
            </div>
            {/* Right Area */}
            <div className="hidden md:flex items-center justify-end space-x-4"> {/* Corrected justify-and to justify-end */}
                <Link href="/cart" className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600">
                   <div  className="pr-1"> <HiOutlineShoppingCart size={28} /></div>
                    <span className="absolute top-0 right-1 font-bold text-green-600">0</span>
                </Link>
                {/* <button className="bg-slate-200 text-gray-500 px-4 py-1 rounded-full" onClick={onOpen}>
                    Login/SignUp
                </button> */}
            </div>
        </header>
    );
};

export default Header;
