import { useState, useEffect } from 'react'
import Image from 'next/image'

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string[];
}
export default function ProductCard() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://api-products-eight.vercel.app/products')
            const data = await res.json()
            setProducts(data)
        }
        fetchProduct()
    }, [])

    return (
        <div>
            {
                products.map((product: Product) => {
                    return (
                        <div key={product.id} className='pb-12'>
                            <Image src={product.image} alt={product.name} width={300} height={360} />
                            <div className="flex flex-col justify-center items-center mt-[22px]">
                                <h2 className='text-md uppercase leading-5 text-black font-bold'>{product.name}</h2>
                                <div className="mt-2">
                                    <p className='text-sm text-[#999999] font-montserrat'>$ {product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}