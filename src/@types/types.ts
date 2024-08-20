export type Product = {
    id: number;
    title: string;
    price: number;
    newPrice?: number;
    picture: string;
    countRating: number;
    rating: number;
    availableCount: number;
    developer: string;
    edition: string;
    hot?: number;
    available?: string;
}