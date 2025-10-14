export default function GrayFooter(){
    return(
        <div className="bg-[#f7f9fa] w-full">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3">
                <div className="flex flex-col text-center flex-wrap gap-4 p-6">
                    <img
                        src="https://www-cdn.djiits.com/cms/uploads/94964ecb1bc4c100c42c93a814bd4733.svg"
                        alt="where to buy"                        
                        className="h-[72px] w-auto"
                    />
                    <h1 className="text-black text-lg sm:text-2xl font-light">
                        Where to buy
                    </h1>
                    <p className=" mb-8 font-light drop-shadow cursor-pointer text-gray-700 hover:underline">Learn More {'>'}</p>
                </div>
                <div className="flex flex-col text-center justify-center flex-wrap gap-4 p-6">
                    <img
                        src="https://www-cdn.djiits.com/cms/uploads/60ff58dae8a3fffc6a6e292ce587ca46.svg"
                        className="h-[72px] auto"
                    />
                    <h1 className="text-black text-lg sm:text-2xl font-light">
                        Support
                    </h1>
                    <p className=" mb-8 font-light drop-shadow cursor-pointer text-gray-700 hover:underline">Learn More {'>'}</p>
                </div>
                <div className="flex flex-col text-center justify-center flex-wrap gap-4 p-6">
                    <img
                        src="https://www-cdn.djiits.com/cms/uploads/e5878a0a23f0c8b05878dac1e0293dfd.svg"
                        className="h-[72px] auto"
                    />
                    <h1 className="text-black text-lg sm:text-2xl font-light">
                        Fly Safe 
                    </h1>
                    <p className=" mb-8 font-light drop-shadow cursor-pointer text-gray-700 hover:underline">Learn More {'>'}</p>
                </div>
            </div>
        </div>

    )
}