'use client'
import React, { useState } from 'react';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';
import { MenuData } from "../../Data/menu-data";
import {FaPencil  } from 'react-icons/fa6';

const CartList = () => {
  // État local pour la quantité de chaque article
  const [quantities, setQuantities] = useState(MenuData.map(item => item.quantity));

  // Fonction pour augmenter la quantité d'un article
  const increaseQuantity = (index:any) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Fonction pour diminuer la quantité d'un article
  const decreaseQuantity = (index:any) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <div>
      <div>Commande en Livraison à </div>

      <div className="">
        {MenuData.map((menuItem, index) => (
          <div className="flex justify-between items-center mt-3" key={menuItem.id}>
            <div className="flex space-x-3 border rounded-full px-2">
              {/* Bouton pour diminuer la quantité */}
              <button onClick={() => decreaseQuantity(index)}>
                <HiMinusCircle />
              </button>

              <p> {quantities[index]}</p>

              {/* Bouton pour augmenter la quantité */}
              <button onClick={() => increaseQuantity(index)}>
                <HiPlusCircle />
              </button>
            </div>

            <div className="px-3">
              <p>
                {" "}
                <span className="text-sm">{menuItem.shortDescr}: </span>{" "}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p>{menuItem.price} </p>
              <FaPencil />
              <span className="cursor-pointer text-green-700"></span> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
