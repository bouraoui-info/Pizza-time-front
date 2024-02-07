"use client";
import React from 'react';
import styles from './Header.module.css';
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';

const Header = () => {
    const onOpen = () => {
        // Define the logic for opening login/signup here
        console.log("Open login/signup modal");
    };

    return (
        <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
            {/* Left Area */}
            <div className="flex items-center gap-x-8">
                <button className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600">
                    <HiBars3 size={28} className="cursor-pointer" />
                </button>
                <button>Location</button> {/* Corrected button tag closing */}
            </div>
            {/* Right Area */}
            <div className="hidden md:flex items-center justify-end space-x-4"> {/* Corrected justify-and to justify-end */}
                <Link href="/cart" className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600">
                    <HiOutlineShoppingCart className="pr-1" size={28} />
                    <span className="absolute top-0 right-1 font-bold text-green-600">0</span>
                </Link>
                <button className="bg-slate-200 text-gray-500 px-4 py-1 rounded-full" onClick={onOpen}>
                    Login/SignUp
                </button>
            </div>
        </header>
    );
};

export default Header;
