import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { ProductsContextType } from "../context/types";

export const useFetchProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
};