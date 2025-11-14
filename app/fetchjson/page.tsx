"use client"
import { useEffect, useState } from "react";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function PhotoGallery(){
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string |null>(null);
    const [displayCount, setDisplayCount] = useState(20);

    const fetchPhotos =async () =>{
        try{
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');

            if(!response.ok){
                throw new Error(`Http error! status: ${response.status}`);
            }
            const data = await response.json();
            setPhotos(data);
            setError(null);
        }catch(err){
            setError(err instanceof Error ? err.message: 'Something is wrong!!!');
        } finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchPhotos();
    }, []);
    if(loading){
        return(
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
            </div>
        </div>
        )
    };

    if(error){
        return(
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h2 className="text-red-800 font-semibold text-lg mb-2">Lỗi!</h2>
            <p className="text-red-600">{error}</p>
            <button 
                onClick={fetchPhotos}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
                Thử lại
            </button>
            </div>
        </div>
        )
    };

    return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-500 mb-2">
                    Photo Gallery
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {photos.slice(0, displayCount).map((photo)=>(
                        <div
                            key={photo.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-square bg-gray-200 overflow-hidden">
                                <img
                                    src={photo.thumbnailUrl}
                                    alt={photo.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>  
                            <div className="p-4">
                                <p className="text-xs text-blue-600 font-semibold mb-1">
                                    Album {photo.albumId} * Id {photo.id}
                                </p>
                                <h3 className="text-sm text-gray-700 line-clamp-2" title={photo.title}>
                                    {photo.title}
                                </h3>
                            </div> 
                        </div>
                    ))}
                </div>

                {displayCount < photos.length &&(
                    <div className="text-center mt-8">
                        <button
                            onClick={()=> setDisplayCount(prev => prev + 20)}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md" 
                        >
                            Xem thêm ({photos.length - displayCount} ảnh còn lại)
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}