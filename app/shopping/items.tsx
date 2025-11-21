import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../homepage/auth/authContext";
import api from "../config/axios";

interface ProductCardProps {
    productId: number;
    image: string;
    title: string;
    description: string;
    price: number;
}
export default function ProductCard({productId, image, title, description, price}: ProductCardProps){
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useAuth();
    const handleBuyNow = async (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setIsLoading(true);

        const orderData ={
            customerId: user?.id || 'guest',
            items:[
                {
                productId: productId,
                productTitle: title,
                productImage: image,
                quantity: 1,
                price: price
                },
            ],
        };

        try {
            const response = await api.post('/api/order', orderData);
            if(response.status===201){
                alert(`Ordered successfully! Order Number: ${response.data.orderNumber}`);
            }
        } catch(error :any) { 
            if(error.response?.status===400){
                alert("Invalid input");
            }
            else if(error.response?.status===404){
                alert("Order not found");
            } else{
                alert("An error occured !!")
            }
        } finally{
            setIsLoading(false);
        }
    };
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
                <button 
                    onClick={handleBuyNow}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"

                >
                    {isLoading? "IsLoading" : "BUY NOW"}
                </button>
            </div>
        </div>
    )
}