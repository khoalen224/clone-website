import { useEffect, useState } from "react"
import api from "../config/axios";
import { tr } from "framer-motion/client";
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

export default function ProductManagement(){
    const [products, setProducts] = useState<Product[]>([]);
    const[loading, setLoading] =  useState<boolean>(true);
    const[error, setError] = useState<string | null>(null);
    const[isModalOpen, setIsModalOpen] =  useState<boolean>(false);
    const[formData, setFormData] = useState({
        image: "",
        title:"",
        description:"",
        price:"",
        stockQuantity:""
    })
    const [submitting, setSubmitting] = useState<boolean>(false)

    const handleCreateProducts = async (e:React.FormEvent) =>{
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try{
            const response = await api.post("/api/products", {
                image: formData.image,
                title: formData.title,
                description: formData.description,
                price: parseFloat(formData.price),
                stockQuantity: parseInt(formData.stockQuantity),
                isActive:true
            });

            setProducts([...products, response.data]);

            setFormData({
                image: '',
                title: '',
                description: '',
                price: '',
                stockQuantity: '',
            });
            setIsModalOpen(false);

        }catch(error){
            setError("Create product error");
        }finally{
            setSubmitting(false);
        }
    }

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try{
            const response = await api.get("/api/products");
            setProducts(response.data || []);
        } catch(error){
            setError("Failed to load products.");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[]);
    return(
        <div className="bg-white rounded-xl shadow p-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Product Management
            </h2>
            <button
                onClick={()=> setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mt-2 mb-2"
            >
                <span>+</span>
                Create Product
            </button>
            {error && (
                <p className="text-red-500 bg-red-50 p-3 rounded-md mb-4">{error}</p>
            )}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="max-h-[500px] overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                            <tr>
                            <th className="px-6 py-3 border-b">Id</th>
                            <th className="px-6 py-3 border-b">Image</th>
                            <th className="px-6 py-3 border-b">Title</th>
                            <th className="px-6 py-3 border-b">Description</th>
                            <th className="px-6 py-3 border-b">Price</th>
                            <th className="px-6 py-3 border-b">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4">
                                Loading...
                                </td>
                            </tr>
                            ) : (
                            products.map((product) => (
                                <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{product.id}</td>
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">   
                                    <img
                                        src={product.image}
                                        className="w-full h-full object-cover"
                                    />
                                    </div>
                                </td>
                                <td className="px-6 py-4">{product.title}</td>
                                <td className="px-6 py-4">{product.description}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.stockQuantity}</td>
                                </tr>
                            ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
                        <form onSubmit={handleCreateProducts}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData,  title: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                                <input
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                                <input
                                    type="number"
                                    value={formData.stockQuantity}
                                    onChange={(e) => setFormData({ ...formData, stockQuantity: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={() =>  setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Finish</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}