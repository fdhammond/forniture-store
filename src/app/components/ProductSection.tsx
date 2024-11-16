'use client'
import { useState, useEffect } from 'react'
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from "./ProductCard";
import { Product } from '../context/types';
import { motion } from 'framer-motion';
import Loader from '../utils/Loader';
export default function ProductSection() {
    const [filterProducts, setFilterProducts] = useState<Product[]>([])
    const [selectedItem, setSelectedItem] = useState<string | null>('all')
    const [loading, setLoading] = useState(false);
    const { products } = useFetchProducts()

    const menuItems = ['all', 'home decor', 'lightning', 'decoration', 'vase', 'basics']

    useEffect(() => {
        setFilterProducts(products ?? []);
    }, [products]);

    const handleFilterProduct = (category: string) => {
        setLoading(true)

        if (!category || category === 'all') {
            setFilterProducts(products)
        } else {
            const newFilterProducts = products.filter((product: Product) => {
                return product.category.includes(category)
            })
            setFilterProducts(newFilterProducts)
        }

        setLoading(false)
    }

    const filterListItems = `text-[#929292] active:text-[black] hover:text-black hover:font-medium cursor-pointer tracking-widest`;
    const selectedItemStyle = `font-bold text-black tracking-widest`

    return (
        <div className='px-4'>
            <div className="w-full h-full flex justify-start">
                <ul className='flex gap-8 text-xs uppercase'>
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={selectedItem === item ? selectedItemStyle : filterListItems}
                            onClick={() => { handleFilterProduct(item); setSelectedItem(item) }}
                        >
                            {item}
                        </li>
                    ))}
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