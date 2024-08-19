import { products } from "../data.ts";

export default function useProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    });
}
