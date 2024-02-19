import { proxy } from "valtio";

type StoreType = {
    panier: any,
    time:  number,  

};

export const store = proxy<StoreType>({
    panier: [],
    time:Date.now(),
   
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

export default store;
