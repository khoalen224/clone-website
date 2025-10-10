"use client"
import GrayFooter from "./component/grayFooter";
import SwiperCard from "./component/swiperCard";
import SwiperVideoCard from "./component/swiperVidCard";

export default function HomePage() {
    return (
        <div className="flex flex-col" >
            <SwiperCard/>
            <div className="flex h-[450px] flex-row justify-center gap-5" >
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Revolutionary Image Quality Action Camera</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >OSMO-ACTION-5-PRO</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >Be All In</h2>
                        <div className="text-center grid grid-cols-2">
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline" >Buy Now {'>'} </p>
                        </div>
                    </div>
                    <img
                        src={"https://www-cdn.djiits.com/cms/uploads/295f032ce36ae1b885ad3fd17178541d@1x.webp"}
                        className="absolute inset-0 w-full h-full object-cover m-3 "
                    />
                </div>
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">All-In-One 1-Inch Large CMOS Mini Camera Drone</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >MINI-5-PRO</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >Pro in Mini</h2>
                        <div className="text-center grid grid-cols-2">
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline" >Buy Now {'>'} </p>
                        </div>
                    </div>
                    <img
                        src={"https://www-cdn.djiits.com/cms/uploads/ae336dfdfe515c79b6d4c939a1f39dfe@1x.webp"}
                        className="absolute inset-0 w-full h-full object-cover m-3 "
                    />
                </div>
            </div>
            <div className="flex h-[450px] flex-row justify-center gap-5 mt-8" >
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Wearable Camera for Versatile Perspectives</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >OSMO-NANO</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >Own the Moment</h2>
                        <div className="text-center grid grid-cols-2">
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline" >Buy Now {'>'} </p>
                        </div>
                    </div>
                    <img
                        src={"https://www-cdn.djiits.com/cms/uploads/dd5c43ef2435d8530198df063c9ea525@1x.webp"}
                        className="absolute inset-0 w-full h-full object-cover m-3 "
                    />
                </div>
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Product Info</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >Compare Camera Drones</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >See product overviews and comparisons here</h2>
                        <div className="text-center grid grid-cols-2">
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline" >Buy Now {'>'} </p>
                        </div>
                    </div>
                    <img
                        src={"https://www-cdn.djiits.com/cms/uploads/4cf64945038645b881669c49081c462f@1x.webp"}
                        className="absolute inset-0 w-full h-full object-cover m-3 "
                    />
                </div>
            </div>  
            <div className="m-4.5">
                <SwiperVideoCard/>  
            </div>      
            <div className="w-full h-full text-center">
                <h1 className="text-3xl font-extrabold mr-110 ml-110">
                    Standing at the Forefront of Innovation
                </h1>
                <p className="font-extralight text-gray-700 mr-110 ml-110"  >
                    As we explore new technology, we push the capabilities of what is possible, driving progress through continuous innovation.
                </p>
                <div className="flex h-[450px] flex-row justify-center gap-5" >
                    <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                            <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Industy Insight Report</p>
                            <h2 className="text-black text-2xl font-extrabold drop-shadow" >DJI Agriculture Annual Report</h2>
                            <div className="text-center grid grid-cols-1">
                                <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            </div>
                        </div>
                        <img
                            src={"https://www-cdn.djiits.com/cms/uploads/d16f528a96b53c9b6917cca7a9df33af@1x.webp"}
                            className="absolute inset-0 w-full h-full object-cover m-3 "
                        />
                    </div>
                    <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                            <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Engineering, Science & Technology</p>
                            <h2 className="text-black text-2xl font-extrabold drop-shadow mr-3 ml-4" >DJI Ronin 2 Gimbal System Honored with 2025 Scientific and Technical Award</h2>
                            <div className="text-center grid grid-cols-1">
                                <p className=" mb-8 font-light drop-shadow cursor-pointer text-black hover:underline">Learn More {'>'}</p>
                            </div>
                        </div>
                        <img
                            src={"https://www-cdn.djiits.com/cms/uploads/d1459d32dcecad9bc4a7c659118f08fa@1x.webp"}
                            className="absolute inset-0 w-full h-full object-cover m-3 "
                        />
                    </div>
                </div>
            </div>   
            <div className="w-full h-full text-center mt-5">
                <h1 className="text-3xl font-extrabold mr-110 ml-110">
                    Standing at the Forefront of Innovation
                </h1>
                <div className="grid h-[450px] grid-cols-3 justify-center gap-5" >
                    <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                            <h2 className="text-white text-2xl font-extrabold drop-shadow" >Video Production</h2>
                            <p className=" text-white text-0.5s mb-8 font-extralight drop-shadow">Professional Aerial and Ground Filmmaking Tools</p>
                            <div className="text-center grid grid-cols-1">
                                <p className=" mb-8 font-light drop-shadow cursor-pointer text-white hover:underline">Learn More {'>'}</p>
                            </div>
                        </div>
                        <img
                            src={"https://www-cdn.djiits.com/cms/uploads/89ebb24d2adc09cc7199829cff0ea712@1x.webp"}
                            className="absolute inset-0 w-full h-full object-cover m-3"
                        />
                    </div>
                    <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                            <h2 className="text-white text-2xl font-extrabold drop-shadow mr-3 ml-4" >Enterprise</h2>
                            <p className=" text-white text-0.5s mb-8 font-extralight drop-shadow">Drone Solutions for a New Generation of Work</p>
                            <div className="text-center grid grid-cols-1">
                                <p className=" mb-8 font-light drop-shadow cursor-pointer text-white hover:underline">Learn More {'>'}</p>
                            </div>
                        </div>
                        <img
                            src={"https://www-cdn.djiits.com/cms/uploads/67017bc2168a06d9a518ca9c993e82f5@1x.webp"}
                            className="absolute inset-0 w-full h-full object-cover m-3 "
                        />
                    </div>
                    <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                            <h2 className="text-white text-2xl font-extrabold drop-shadow" >DJI Agriculture Annual Report</h2>
                            <p className=" text-white text-0.5s mb-8 font-extralight drop-shadow">Efficient and Intelligent </p>
                            <div className="text-center grid grid-cols-1">
                                <p className=" mb-8 font-light drop-shadow cursor-pointer text-white hover:underline">Learn More {'>'}</p>
                            </div>
                        </div>
                        <img
                            src={"https://www-cdn.djiits.com/cms/uploads/81781be6863d766ac89e633f06433922@1x.webp"}
                            className="absolute inset-0 w-full h-full object-cover m-3 "
                        />
                    </div>
                </div>
            </div>
            <div className="mt-7">
            <GrayFooter/>        
            </div>  
        </div>
    )
}