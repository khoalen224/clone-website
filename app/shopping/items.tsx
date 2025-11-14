import Link from "next/link";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price: number;
}
export default function ProductCard({image, title, description, price}: ProductCardProps){
    return(
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col" >
            <div className="w-full h-64 flex items-center justify-center mb-4">
                <img
                    src={image}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <h2 className="text-xl font-bold text-black mb-2">
                {title}
            </h2>
            <p className="font-light text-black mb-4 flex-grow">
                {description}
            </p>
            <div className="flex items-center justify-between mt-auto" >
                <span className="text-2xl font-bold text-blue-600">
                    USD ${price.toLocaleString()}
                </span>
                <Link href ="/fetchjson">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    BUY NOW
                </button>
                </Link>
            </div>
        </div>
    )
}