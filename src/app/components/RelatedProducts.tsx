import { useState, useEffect } from "react"
import { useFetchProducts } from "../hooks/useFetchProducts"
import ProductCard from "./ProductCard"
import { Product } from "../context/types"

export default function RelatedProducts({category, productId}: {category: string[], productId: number}) {
    const [filterProducts, setFilterProducts] = useState<Product[]>([])
    const { products } = useFetchProducts()

    useEffect(() => {
        setFilterProducts(products.filter((product: Product) => {
            if (product.id === productId) return false
            return product.category.some((cat) => category.includes(cat));
        }));
    }, [products, category, productId]);

    return (
        <div className="w-full h-full flex justify-start flex-col">
            <div className="w-full h-full mb-4">
                <h2 className="font-catamaran text-[#929292] text-md font-bold uppercase mb-4 tracking-[3.7px] leading-[16px]">Related Products</h2>
            </div>
            <div className="flex justify-start w-full h-full gap-4">
                {
                    filterProducts.slice(0, 4).map((product: Product) => {
                        return (
                            <div key={product.id} className="w-full h-full">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}