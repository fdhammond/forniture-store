'use client'

import Image from 'next/image';
import Stars from '../components/Stars';
import AddButton from '../components/AddButton';

export default function ProductDetail() {
    return (
        <div className="bg-[#FAFAFA] mt-8 font-catamaran">
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="w-full h-auto flex justify-center md:flex-row flex-col gap-0 mt-12">
                    <div className="w-full h-auto grid grid-cols-4 md:grid-cols-1 justify-items-center mb-4 md:mb-0">
                        <Image src="https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/flower-vase_uv5dsy.jpg" alt="" width={100} height={120} className="max-w-[100px] max-h-[120px] object-cover object-center" />
                        <Image src="https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/flower-vase_uv5dsy.jpg" alt="" width={100} height={120} className="max-w-[100px] max-h-[120px] object-cover object-center" />
                        <Image src="https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/flower-vase_uv5dsy.jpg" alt="" width={100} height={120} className="max-w-[100px] max-h-[120px] object-cover object-center" />
                        <Image src="https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/flower-vase_uv5dsy.jpg" alt="" width={100} height={120} className="max-w-[100px] max-h-[120px] object-cover object-center" />
                    </div>
                    <Image
                        src="https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/flower-vase_uv5dsy.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-[100%] h-auto md:max-w-[530px] md:max-h-[530px] object-cover object-center"
                    />
                </div>
                <div className="w-full h-auto flex flex-col mt-12 pl-40 pr-20 justify-start">
                    <div className='flex flex-col justify-start'>
                        <h2 className='text-black text-2xl uppercase mb-2 font-bold'>Flower Vase</h2>
                        <p className='text-black text-2xl font-light font-montserrat'>$19.99</p>
                    </div>
                    <div className='mt-8'>
                        <Stars stars={3} />
                    </div>
                    <div className='mt-8'>
                        <p className='text-[#929292] font-catamaran text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            In ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                            penatibus et magnis dis parturient montes nascetur ridiculus mus.
                            Vestibulum ultricies aliquam convallis.</p>
                    </div>
                    <div className='mt-8 w-full h-full'>
                        <AddButton
                            name="Flower Vase"
                            price={19.99}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
