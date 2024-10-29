import { useEffect, useState } from 'react'
import { Product } from '../types/types'

const useFetchProducts = (): Product[] | null => {
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
                try {
                    const res = await fetch('https://api-products-eight.vercel.app/products')
                    const data = (await res.json() as Product[])
                    setProducts(data)
                } catch (error) {
                    console.log('Failed fetching products:', error);
                }
        }
        fetchProducts()
    }, [])

    return products
}

export default useFetchProducts;