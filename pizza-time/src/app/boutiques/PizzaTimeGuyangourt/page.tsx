import React from 'react';
import MenuModal from '../../Home/MenuModal';
import { MenuData } from '@/Data/menu-data';
import Link from 'next/link';
import { } from 'next/navigation';

const PizzaTimeGuyangourt = () => { 
  return (
    <section className="mb-24">
      <div className="max-w-2x1 max-auto my-5 text-center">
        <h2 className="text-3xl leading-tight tracking-tight text-gray-600 sm:text-4xl">
          Menu
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { /*{MenuData.map((menu) => (
          <MenuModal menu={menu} key={menu.id} />
        ))} */}
      </div>
    </section>
  );
};

export default PizzaTimeGuyangourt;
