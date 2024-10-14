import Image from "next/image"
export default function Navbar() {
    return (
        <div>
            <ul className="flex gap-4 justify-center p-8 bg-white text-black">
                <li>Home</li>
                <li>Blog</li>
                <li className="md:px-60 px-4">
                    <Image src='https://res.cloudinary.com/dzkqopnby/image/upload/v1728172555/muebles-ecommerce/logo-nav_pmc5vi.png' alt='' width={106} height={20} />
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}