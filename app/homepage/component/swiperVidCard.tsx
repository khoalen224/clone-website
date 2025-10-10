import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Arrivals } from "./swiperVid";
import { motion, AnimatePresence } from "framer-motion";

export default function SwiperVideoCard() {
    return (
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={24}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="py-10  w-full"
            >
                {Arrivals.map((swiper)=>(
                    <SwiperSlide key={swiper.id} 
                        className="basis-full sm:basis-1/2 md:basis-[75%] p-3 "
                    >
                    <div className="relative shadow-lg bg-white h-[28rem] flex items-stretch" >
                        <div className="relative w-full h-full shadow-lg overflow-hidden" >
                            <video
                                src={swiper.videoUrl}
                                autoPlay
                                muted
                                loop                                    
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover zoom-in-20"
                            />
                            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-11/12 text-center z-10" >
                                <p className=" text-gray-200 text-4xl mb-8 font-extralight drop-shadow">Shot on</p>
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={swiper.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-white text-4xl font-extrabold drop-shadow"
                                    >
                                        {swiper.title}
                                    </motion.h2>
                                </AnimatePresence>
                                <div className="text-center grid grid-cols-2">
                                    <p className=" mb-8 font-light drop-shadow cursor-pointer text-white hover:underline ml-80">Learn More {'>'}</p>
                                    <p className=" mb-8 font-light drop-shadow cursor-pointer text-white hover:underline mr-80" >Buy Now {'>'} </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </SwiperSlide >
                ))}
        </Swiper>          
    )
}