'use client'; 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import ProductManagement from "./productdashboard";
import OrderManagement from "./orderdashboard";
export default function AdminPage(){
    const [activeView, setActiveView] = useState("CreateProduct");
    const router = useRouter();
    const renderMainContent= () =>{
        switch(activeView){
            case "productOverview":
                return <ProductManagement/>;
            case "orderOveriew":
                return <OrderManagement/>;
            default:
                return <ProductManagement/>;
        }
    }
    return(
        <div className="min-h-screen flex bg-gradient-to-r from-blue-100 to indigo-100 flex-col">
            <div className="bg-white px-6 py-3 shadow flex items-center gap-4">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIuODUiLz48L3N2Zz4="
                    className="h-[60px]"
                />
                <span className="text-black font-semibold text-3xl" >
                    Admin Dashboard
                </span>
            </div>

            <div className="flex flex-1" >
                <aside className="w-64 bg-white shadow-md p-4 hidden md:block m-2 rounded-[5px]">
                    <nav className="flex flex-col gap-1">
                        <button onClick={()=> setActiveView("productOverview")}
                            className={`flex items-center gap-3 px-4 py-2 rounded-[5px] shadow-md hover:bg-blue-50 ${
                            activeView === "productOverview" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
                        }`}> 
                            <div className="font-bold text-2xl">Product</div>
                        </button>
                        <button onClick={()=> setActiveView("orderOveriew")}
                            className={`flex items-center gap-3 px-4 py-2 rounded-[5px] shadow-md hover:bg-blue-50 ${
                            activeView === "orderOveriew" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
                        }`}> 
                            <div className="font-bold text-2xl">Order</div>
                        </button>
                    </nav>
                </aside>
                <main className="flex-1 p-6 bg-transparent">
                    {renderMainContent()}
                </main>
            </div>
        </div>
    )
}