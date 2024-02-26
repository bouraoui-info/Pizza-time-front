import { proxy } from "valtio";

type StoreType = {
    panier: any,
    time:  number,  
    isDropdownOpen:boolean

};

export const store = proxy<StoreType>({
    panier: [],
    time:Date.now(),
    isDropdownOpen:false
   
});

export function setPanier(
    panier: any
): void {
    store.panier = panier;
}
export function setTime(
    time: any
): void {
    store.time = time;
}
export function setIsDropdownOpen(
    isDropdownOpen: boolean
): void {
    store.isDropdownOpen = isDropdownOpen;
}

export default store;
