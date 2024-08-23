import {data} from "./data.ts";
import {Product} from "../@types/types.ts";

export function getProducts(): Product[] {
    return data;
}