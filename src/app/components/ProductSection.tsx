'use client'
import { useState, useEffect } from 'react'
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from "./ProductCard";
import { Product } from '../types/types';
import { motion } from 'framer-motion';
import Loader from '../utils/Loader';
export default function ProductSection() {
    const [products, setProducts] = useState<Product[]>([])
    const [filterProducts, setFilterProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const productsData = useFetchProducts()

    useEffect(() => {
        if (!productsData) {
            setLoading(true)
        } else {
            setLoading(false)
        }
        setProducts(productsData ?? []);
        setFilterProducts(productsData ?? []);
    }, [productsData]);

    const handleFilterProduct = (category: string) => {
        setLoading(true)

        setTimeout(() => {
            if (!category) {
                setFilterProducts(products)
            } else {
                const newFilterProducts = products.filter((product: Product) => {
                    return product.category.includes(category)
                })
                setFilterProducts(newFilterProducts)
            }
            setLoading(false)
        }, 1000)
    }

    const filterListItems = `text-[#929292] active:text-[black] hover:text-black cursor-pointer tracking-widest`;

    return (
        <div className='px-4'>
            <div className="w-full h-full flex justify-start">
                <ul className='flex gap-8 text-xs uppercase'>
                    <li className={filterListItems} onClick={() => setFilterProducts(products)}>All</li>
                    <li className={filterListItems} onClick={() => handleFilterProduct('home decor')}>Home Decor</li>
                    <li className={filterListItems} onClick={() => handleFilterProduct('lightning')}>Lightning</li>
                    <li className={filterListItems} onClick={() => handleFilterProduct('decoration')}>Decoration</li>
                    <li className={filterListItems} onClick={() => handleFilterProduct('vase')}>Vases</li>
                    <li className={filterListItems} onClick={() => handleFilterProduct('basics')}>Basics</li>
                </ul>
            </div>
            <div className="w-full h-full grid place-items-center grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-4 md:grid-rows-2 mt-12 gap-2">
                {   loading ? (
                        <div className='col-span-full row-span-full flex justify-center items-center w-full h-full mt-8'>
                            <Loader />
                        </div>
                ) : (
                    filterProducts.map((product: Product) => (
                        <motion.div
                            animate={{ opacity: 100 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            key={product.id}
                        >
                            <ProductCard key={product.id} product={product} />
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
}