"use client"
import React, { useState } from 'react';
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import Location from '../Maps/Location';
import DropDownMenu from './DropDownMenu';
import dynamic from 'next/dynamic';
import { card } from '@/constats';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const DropDownMenuDynamic = dynamic(() => import('./DropDownMenu'), { ssr: false });


    return (
        <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
            {/* Left Area */}
            <div className="flex items-center gap-x-8">
                <button>
                    <div className="px-4 sm:px-6 lg:px-8 mt-2">
                        <div className=" py-4">
                            <h2 className="text-lg leading-6 my-4 font-medium text-gray-900">
                                <Location />
                            </h2>
                        </div>
                    </div>
                </button>
            </div>
            {/* Right Area */}
            <div className="hidden md:flex items-center justify-end space-x-4">
                <Link href="/cart" className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600">
                    <div className="pr-1">
                        <HiOutlineShoppingCart size={28} />
                    </div>
                    <span className="absolute top-0 right-1 font-bold text-green-600">0</span>
                </Link>
                <div className="flex items-center gap-x-8">
                    <button className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600"

                        onClick={toggleDropdown}>
                        <div className="cursor-pointer shrink-0">
                            <HiBars3 size={28} />
                        </div>
                        {isDropdownOpen && <DropDownMenuDynamic />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;