'use client'

import { createContext, useState, ReactNode } from 'react';
import { Product } from '../types/types';
interface CartContextType {
    products: Product[]
    loading: boolean
    error: string | null
    addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    console.log(products);

    return (
        <CartContext.Provider value={{ products, loading: false, error: null, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}