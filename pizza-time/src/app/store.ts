import { proxy } from "valtio";

type StoreType = {
    panier: any,
};

export const store = proxy<StoreType>({
    panier: [],
   
});

export function setPanier(
    panier: any
): void {
    store.panier = panier;
}

export default store;
