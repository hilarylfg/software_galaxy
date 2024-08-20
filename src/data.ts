import { Product } from "./@types/types";

export const data : Product[] = [
    {
        id: 1,
        title: "Windows 11",
        price: 19999,
        newPrice: 10000,
        picture: "product.png",
        countRating: 270,
        rating: 4,
        availableCount: 12,
        developer: "Adobe",
        edition: "Enterprise",
    },
    {
        id: 2,
        title: "Windows 10",
        price: 12222,
        picture: "product-test.png",
        countRating: 140,
        rating: 3,
        availableCount: 12,
        developer: "Microsoft",
        edition: "Enterprise",
    },
]