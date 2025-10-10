"use client"
import SwiperCard from "./component/swiperCard";

export default function HomePage() {
    return (
        <div className="max-h-screen flex flex-col" >
            <SwiperCard/>
            <div className="flex h-[450px] flex-row justify-center gap-5" >
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Revolutionary Image Quality Action Camera</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >OSMO-ACTION-5-PRO</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >Be All In</h2>
                    </div>
                    <img
                    src={"https://www-cdn.djiits.com/cms/uploads/295f032ce36ae1b885ad3fd17178541d@1x.webp"}
                    />
                </div>
                <div className="flex-1 relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center pt-8 z-10" >
                        <p className=" text-gray-500 text-0.5s mb-8 font-extralight drop-shadow">Revolutionary Image Quality Action Camera</p>
                        <h2 className="text-black text-2xl font-extrabold drop-shadow" >OSMO-ACTION-5-PRO</h2>
                        <h2 className="text-black text-2m font-sans drop-shadow" >Be All In</h2>
                    </div>
                    <img
                    src={"https://www-cdn.djiits.com/cms/uploads/295f032ce36ae1b885ad3fd17178541d@1x.webp"}
                    />
                </div>
            </div>

        </div>
    )
}