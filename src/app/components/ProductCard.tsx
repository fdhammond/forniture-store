import Image from 'next/image'
import Link from 'next/link'

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string[];
}
export default function ProductCard({ product }: { product: Product }) {
    const { name, price, image } = product
    return (
        <div className='pb-12 max-w-[300px] h-full'>
            <Link href={`/product/${product.id}`} className="w-full h-full">
                <Image src={image} alt={name} width={300} height={360} className="w-auto h-auto" />
            </Link>
            <div className="flex flex-col justify-center items-center mt-[22px]">
                <h2 className='text-md uppercase leading-5 text-black font-bold'>{name}</h2>
                <div className="mt-2">
                    <p className='text-sm text-[#999999] font-montserrat'>$ {price}</p>
                </div>
            </div>
        </div>
    )
}