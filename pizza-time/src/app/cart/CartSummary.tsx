"use client"
import React, { useState } from "react";
import CartList from "../cart/CartList";
import { MenuData } from "../../Data/menu-data";
import store from "../store";
import { useSnapshot } from "valtio";


const CartSummary = () => {
  const { panier,time } = useSnapshot(store);


  // Fonction pour calculer le nombre total d'articles
  const calculateTotalNumberOfArticles = (cartItems:any) => {
    let totalArticles = 0;

    // Itérer sur chaque article dans le panier et ajouter ses quantités au total
    cartItems.forEach((item:any) => {
      totalArticles += item.quantity;
    });

    return totalArticles;
  };

  // Fonction pour calculer la somme des prix des articles
  const calculateTotalPrice = (cartItems:any) => {
    let totalPrice = 0;

    // Itérer sur chaque article dans le panier et ajouter son prix à la somme totale
    cartItems.forEach((item:any) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  };

  // Calculer le prix total
  const totalPrice = calculateTotalPrice(panier);

  // Calculer le nombre total d'articles
  const totalArticles = calculateTotalNumberOfArticles(panier);

  return (
    <div className="border border-gray-200 p-4">
      <CartList />

      <div className="px-4 sm:px-6 lg:px-8 mt-2">
        <div className="border-t border-gray-200 py-4">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
            {/* Vous pouvez ajouter plus d'informations récapitulatives ici si nécessaire */}
          </dl>
        </div>
      </div>

      <div className=" justify-center px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex w-80 justify-center justify-end">
          <button className="flex w-96 items-center justify-center bg-green-600 text-lg px-4 py-1 text-white border border-green-500 space-x-2  hover:text-green-700 hover:bg-green-200">
            <div className="w-96 flex items-center justfiy-center  space-x-4">
              <p className="text-gray-700">{totalArticles} articles</p>
              <p className="text-gray-700">Paiement</p>
              <p className="text-gray-700">Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
