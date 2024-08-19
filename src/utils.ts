import {products} from "./data.ts";

export function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    });
}

export function Price({ value } : {value: number}) {
    return value.toLocaleString("ru-RU") + " ₽";
}