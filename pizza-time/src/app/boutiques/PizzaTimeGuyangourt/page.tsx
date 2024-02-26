"use client"
import React from 'react';
import MenuModal from '../../Home/MenuModal';
import { MenuData } from '@/Data/menu-data';
import Header from '@/app/common/Header';
import SideBar from '@/app/common/SideBar';
import Logobanner from '@/app/Home/LogoBanner';
const page = () => { 
  
  return (
    <div>
      <Header />
      <SideBar />
      <Logobanner/>
      <section className="mb-24">
        <div className="max-w-2x1 max-auto my-5 text-center">
          <h2 className="text-3xl leading-tight tracking-tight text-gray-600 sm:text-4xl">
            Menu
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {MenuData.map((menu:any) => (
            <MenuModal menu={menu}  />
          ))} 
        </div>
      </section>
    </div>
  );
};

export default page;
