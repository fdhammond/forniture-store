export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string[];
    loading?: boolean;
    quantity: number;
}