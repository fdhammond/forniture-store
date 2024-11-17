'use client'

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Stars from '../../components/Stars';
import AddButton from '../../components/AddButton';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useState, useEffect } from 'react';
import type { Product } from '../../types/types';

interface ProductDetailProps {
  params: { id: string };
}

export default function Product({params}: ProductDetailProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedInformationButton, setSelectedInformationButton] = useState<number | null>(0);
    const { products } = useFetchProducts(); // Fetch all products

    const buttonsLabels = ['Description', 'Additional information', 'Reviews'];
    const productInformationLabels = ['Description', 'Additional information', 'Reviews'];

    const productInformationContent = {
        0: (
            <p className="text-md text-[#929292]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.
                Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
                Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis,
                ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec
                venenatis id, pretium sit amet purus. Interdum et malesuada fames.
            </p>
        ),
        1: (
            <ul className="list-none flex py-4 font-catamaran text-[#929292]">
                <div className="pr-4 space-y-2">
                    <li>Weight</li>
                    <li>Dimensions</li>
                    <li>Color</li>
                    <li>Material</li>
                </div>
                <div className="space-y-2">
                    <li>2kg</li>
                    <li>10 x 10 x 15 cm</li>
                    <li>Gold, White</li>
                    <li>Concrete, Metal</li>
                </div>
            </ul>
        ),
        2: <p className="text-md font-catamaran text-[#929292]">No reviews yet.</p>,
    };

    useEffect(() => {

        const fetchProduct = async () => {
            const foundProduct = products.find(product => product.id === Number(params.id));

            if (!foundProduct) {
                try {
                    const response = await fetch(`https://api-products-eight.vercel.app/products/${params.id}`);
                    if (!response.ok) throw new Error('Product not found.')
                    const data = await response.json();
                    setProduct(data);
                } catch {
                    notFound();
                }
            } else {
                setProduct({...foundProduct, quantity: 1});
            }
        };

        fetchProduct();

    }, [params.id, products]);

    const handleSelectedProductInformation = (label: string) => {
        if (label === 'Description') {
            setSelectedInformationButton(0);
        } else if (label === 'Additional information') {
            setSelectedInformationButton(1);
        } else if (label === 'Reviews') {
            setSelectedInformationButton(2);
        }
    }

    return (
        <div className="w-full h-full font-catamaran">
            <div className='bg-[#FAFAFA] mt-8 border border-b-[#b8b8b8]'>
                {product && (
                    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start md:px-[10%]">
                        <div className="w-full h-full flex justify-center items-center md:flex-row flex-col gap-4 mt-12">
                            <div className="w-full h-full grid grid-cols-4 md:grid-cols-1 justify-items-start mb-4 md:mb-0 gap-4">
                                <Image src={product.image} alt="" width={100} height={120} className="w-auto h-full object-cover object-center" />
                                <Image src={product.image} alt="" width={100} height={120} className="w-auto h-full object-cover object-center" />
                                <Image src={product.image} alt="" width={100} height={120} className="w-auto h-full object-cover object-center" />
                                <Image src={product.image} alt="" width={100} height={120} className="w-auto h-full object-cover object-center" />
                            </div>
                            <Image
                                src={product.image}
                                alt=""
                                width={500}
                                height={500}
                                className="w-[100%] h-full md:max-w-[530px] md:max-h-auto object-cover object-center"
                            />
                        </div>
                        <div className="w-full h-auto flex flex-col mt-20 md:pl-40 px-[60px] justify-start">
                            <div className='flex flex-col justify-start'>
                                <h2 className='text-black text-2xl uppercase mb-2 font-bold'>{product.name}</h2>
                                <p className='text-black text-2xl font-light font-montserrat'>$ {product.price}</p>
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
                                    price={product.price}
                                />
                            </div>
                        </div>

                        <div className='px-[60px] md:px-0 w-full h-auto flex flex-col md:flex-row md:justify-start flex-wrap md:mt-36 mt-28 text-black'>
                            {
                                buttonsLabels.map((label, index) => (
                                <button
                                    key={index}
                                        className={`${selectedInformationButton === index ? 'bg-black text-white' : ''} flex align-start uppercase text-xs font-bold tracking-wide px-10 py-4 border-b-0 border-y border-x md:border-x-0 md:border-l border-[#b8b8b8] md:first:border-l md:last:border-r`}
                                        onClick={() => handleSelectedProductInformation(label)}
                                    >
                                    {label}
                                </button>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
            <div className="pt-[70px] pb-16 px-[60px] md:px-[10%] w-full text-black font-catamaran">
                {productInformationLabels.map((label, index) => (
                    <div
                        key={index}
                        className={`${selectedInformationButton === index ? '' : 'hidden'}`}
                    >
                        <h2 className="text-black text-md uppercase mb-4 font-bold tracking-[3.7px]">
                            {label}
                        </h2>
                        {productInformationContent[index]}
                    </div>
                ))}
            </div>
        </div>
    );
}
