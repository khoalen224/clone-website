"use client"
import HeaderExport from "../homepage/component/header";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./items";
import { products } from "./itemsData";
export default function ShoppingPage(){

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