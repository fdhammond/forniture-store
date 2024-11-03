import { FaStar, FaRegStar } from "react-icons/fa";

export default function Stars({ stars }: { stars: number }) {
    return (
        <div className='flex justify-start items-center'>
            {[...Array(5)].map((_, index) => (
                index < stars
                    ? <FaStar key={index} className='w-4 h-4 text-yellow-300' />
                    : <FaRegStar key={index} className='w-4 h-4 text-yellow-300' />
            ))}
        </div>
    );
}