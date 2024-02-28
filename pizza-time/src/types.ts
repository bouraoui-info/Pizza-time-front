import { type } from "os";

export type Menu ={
prepType: any;
id:string; 
title:string; 
shortDescr:string; 
lengDescr:string; 
price: number; 
image: string; 
category:string;

}; 
type CartOptions={
quantity: number;
instrictions: string;
prepare: string;
}; 
export type CartItemType =CartOptions & Menu ;

export type CartType = {
    menus: CartItemType[];
}; 
export type CartAction = {
addToCart:(menu: CartItemType) => void;
removeFromCart:(menu: CartItemType) => void;
increaseCartItem:(menu: CartItemType, id:string) => void;
decreaseCartItem:(menu: CartItemType, id:string) => void;
resetCart:()=>void; 
}; 