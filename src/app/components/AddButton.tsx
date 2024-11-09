'use client'
import { useState, useContext } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CartContext } from "../context/CartContext";

export default function AddButton({name, price}: { name: string, price: number }) {
    const [quantity, setQuantity] = useState(1);

    const cartContext = useContext(CartContext);
    if (!cartContext) {
        console.error("CartContext is not available. Ensure CartProvider wraps this component.");
        return null
    }

    const { addToCart } = cartContext;
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToCart({ id: 0, name, price, image: '', category: [], quantity });
    }
    return (
        <div className="text-black">
            <form action="" className="flex w-full h-full" onSubmit={onSubmit}>
                <div className="max-w-[195px] h-[50px] flex justify-center align-middle text-sm">
                    <div className="flex justify-center align-middle items-center pl-[16px] pr-[10px] border border-[#929292] text-[#929292] w-[195px]">
                        <span className="pr-12">Quantity</span>
                        <span>
                            <IoMdArrowDropleft
                                className="text-[22px] cursor-pointer hover:text-black"
                                onClick={handleDecrement}
                            />
                        </span>
                        <input
                            type="text"
                            value={quantity}
                            name="quantity"
                            className="text-[16px] w-full text-center"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <span>
                            <IoMdArrowDropright
                                className="text-[22px] cursor-pointer hover:text-black"
                                onClick={handleIncrement}
                            />
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-sm bg-black text-white uppercase w-[190px] h-[50px] font-catamaran font-medium tracking-wider"
                >Add to cart
                </button>
            </form>
        </div>
    )
}