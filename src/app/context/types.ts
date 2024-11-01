export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string[];
    loading?: boolean;
}

export interface ProductsContextType {
    products: Product[];
    loading: boolean;
    error: string | null;
}