import React from 'react';
import { HiStar } from 'react-icons/hi2';
import Image from 'next/image'; // Correct import statement
import logo from "../../../public/Objects/logo.jpg"; // Correct import statement

const Logobanner = () => {
  const bannerImg = "/Objects/banner.jpg";
  return (
    <section className="relative h-72 md:h-96">
      {/* Banner Image */}
      <div className="relative h-48 md:h-72 bg-no-repeat bg-cover w-full" style={{ backgroundImage: `url(${bannerImg})` }}></div>
      
      {/* Logo */}
      <div className="absolute bottom-0 left-0 rounded-full w-28 h-28 p-1 overflow-hidden bg-white ring-2 ring-white">
        <Image src={logo} width={100} height={100} className="w-full object-contain" alt="pizza-time-logo" /> {/* Corrected src attribute and added curly braces */}
      </div>
      
      {/* Restaurant Details */}
      <div className="absolute bottom-3 left-40">
        <div className="flex flex-col">
          <div>
            <h1>SUANCOURT</h1>
          </div>
          <div className="flex items-center">
            <HiStar />
            <p className="mx-1">4.5 rating</p>
          </div>
          <div> More Info</div>
        </div>
      </div>
    </section >
  );
};

export default Logobanner;
