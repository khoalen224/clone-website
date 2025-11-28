import { useEffect, useState } from "react"
import api from "../config/axios";

interface Product {
    productId: number;
    productTitle: string;
    productImage: string;
    price: number;
    quantity: number;
    subtotal: number;
}

interface Order {
    id: number;
    orderNumber: string;
    customerId: string;
    customerName: string;
    customerEmail: string;
    items: Product[];
    productTitle: string;
    subtotal: number;
    tax: number;
    total: number;
    createdAt: string;
    updatedAt: string;
}

export default function OrderManagement(){
    const [orders, setOrders] = useState<Order[]>([]);
    const[loading, setLoading] =  useState<boolean>(true);
    const[error, setError] = useState<string | null>(null);

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);
        try{
            const response = await api.get("/api/orders");
            setOrders(response.data || []);
        } catch(error){
            setError("Failed to load orders.");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOrders();
    },[]);
    return(
        <div className="bg-white rounded-xl shadow p-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Order Management
            </h2>
            {error && (
                <p className="text-red-500 bg-red-50 p-3 rounded-md mb-4">{error}</p>
            )}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="max-h-[600px] overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                            <tr>
                            <th className="px-6 py-3 border-b">Id</th>
                            <th className="px-6 py-3 border-b">Order Number</th>
                            <th className="px-6 py-3 border-b">Customer Name</th>
                            <th className="px-6 py-3 border-b">Customer Email</th>
                            <th className="px-6 py-3 border-b">Product Title</th>
                            <th className="px-6 py-3 border-b">Subtotal</th>
                            <th className="px-6 py-3 border-b">Tax</th>
                            <th className="px-6 py-3 border-b">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                            <tr>
                                <td colSpan={8} className="text-center py-4">
                                Loading...
                                </td>
                            </tr>
                            ) : (
                            orders.map((order) => (
                                <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{order.id}</td>
                                <td className="px-6 py-4">{order.orderNumber}</td>
                                <td className="px-6 py-4">{order.customerName}</td>
                                <td className="px-6 py-4">{order.customerEmail}</td>
                                <td className="px-6 py-4">
                                    {order.items[0]?.productTitle ||'N/A'}
                                </td>
                                <td className="px-6 py-4">{order.subtotal.toFixed(2)}</td>
                                <td className="px-6 py-4">{order.tax.toFixed(2)}</td>
                                <td className="px-6 py-4">{order.total.toFixed(2)}</td>
                                </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}