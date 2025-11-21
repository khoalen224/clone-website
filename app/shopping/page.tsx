"use client"
import HeaderExport from "../homepage/component/header";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./items";
import api from "../config/axios";
interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    stockQuantity: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export default function ShoppingPage(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError]= useState<string | null>(null);
    const fetchProduct = async () =>{
        try{
            const response = await api.get('/api/products');
            setProducts(response.data);
            setLoading(false);
        } catch(err: any){
            setError(err.message || "Something's wrong");
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProduct();
    });

    if(loading){
        <div>Loading</div>;
    }
    
    if(error){
        <div>Error: {error}</div>
    }
    return(
        <div
            className="min-w-[480px] min-h-screen"
            style={{
                backgroundImage: 'url("https://account.djicdn.com/img/banner-04.acb127a8.webp")',
            }}
        >
            <HeaderExport/>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 ">
                    {products.map((product)=>(
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}