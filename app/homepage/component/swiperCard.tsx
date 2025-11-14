'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newArrivals } from "./swiper";
import { useEffect, useRef, useState } from "react";
import HeaderExport from "./header";

export default function SwiperCard (){

    return(
        <div className="w-full" >
            <HeaderExport/>
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll:1,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {newArrivals.map((swiper)=>(
                        <CarouselItem key={swiper.id} 
                            className="basis-full sm:basis-1/2 md:basis-1/1 p-1"
                        >
                            <div className="relative overflow-hidden shadow-lg bg-white h-[28rem] flex items-stretch" >
                                <img
                                    src={swiper.imageUrl}
                                    alt={swiper.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute left-1/2 top-20 -translate-x-1/2 w-11/12 text-center z-10" >
                                    <p className=" text-gray-200 text-0.5s mb-8 font-extralight drop-shadow">{swiper.description}</p>
                                    <h2 className="text-white text-2xl font-extrabold drop-shadow" >{swiper.title}</h2>
                                    <h2 className="text-white text-2m font-sans drop-shadow" >{swiper.slogan}</h2>
                                </div>
                                <div className="mt-16 inline-flex justify-center relative opacity-0" >
                                    <div className="border-white-1 flex items-center border-r-6 m-8 " >
                                        Learn More
                                    </div>
                                    <div className="border-white-1 flex items-center border-r-6 m-8 " >
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex mb-2 space-x-2 pr-12" >
                    <CarouselPrevious 
                        className="  bg-white border rounded p-5 text-2xl w-14 h-14 flex items-center justify-center hover:bg-transparent-100 " 
                    />
                    <CarouselNext
                        className="  bg-white border rounded p-5 text-2xl w-14 h-14 flex items-center justify-center hover:bg-transparent-100 " 
                    />
                </div>
            </Carousel>
        </div>
    )
}