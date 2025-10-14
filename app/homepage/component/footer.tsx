import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer (){
    return (
        <div className="footer-color text-white " >
            <div className="container mx-auto px-6 py-12" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 " >
                    <div>
                        <h3 className="h-[24px] font-bold">Product Categories</h3>
                        <p className="h-[24px] font-light" > Consumer </p>
                        <p className="h-[24px] font-light" > Professional</p>
                        <p className="h-[24px] font-light" > Enterprise</p>
                        <p className="h-[24px] font-light" > Components</p>
                        <div className="mt-2">
                            <h3 className="h-[24px] font-bold">Service Plans</h3>
                            <p className="h-[24px] font-light" > DJI Care Refresh </p>
                            <p className="h-[24px] font-light" > DJI Care Pro</p>
                            <p className="h-[24px] font-light" > DJI Care Enterprise</p>
                            <p className="h-[24px] font-light" > DJI Maintenance Program</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="h-[24px] font-bold">Where to Buy</h3>
                        <p className="h-[24px] font-light" > DJI Online Store </p>
                        <p className="h-[24px] font-light" > Flagship Stores </p>
                        <p className="h-[24px] font-light" > DJI-Operated Stores </p>
                        <p className="h-[24px] font-light" > Retail Stores </p>
                        <p className="h-[24px] font-light" > Enterprise Retailers </p>
                        <p className="h-[24px] font-light" > Agricultural Drone Dealer </p>
                        <p className="h-[24px] font-light" > Delivery Drone Dealer </p>
                        <p className="h-[24px] font-light" > Pro Retailers  </p>
                        <p className="h-[24px] font-light" > DJI Store App </p>
                        <div className="mt-2">
                            <h3 className="h-[24px] font-bold">Cooperation</h3>
                            <p className="h-[24px] font-light" > Become a Dealer</p>
                            <p className="h-[24px] font-light" > Apply For Authorized Store</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="h-[24px] font-bold">Fly Safe</h3>
                        <p className="h-[24px] font-light" > Fly Safe </p>
                        <p className="h-[24px] font-light" > DJI Flying Tips </p>
                        <div className="mt-2">
                            <h3 className="h-[24px] font-bold">Support</h3>
                            <p className="h-[24px] font-light" > Product Support </p>
                            <p className="h-[24px] font-light" > Service Request and Inquiry </p>
                            <p className="h-[24px] font-light" > Help Center </p>
                            <p className="h-[24px] font-light" > After-Sales Service Policies </p>
                            <p className="h-[24px] font-light" > Download Center </p>
                            <p className="h-[24px] font-light" > Security and Privacy </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="h-[24px] font-bold">Community</h3>
                        <p className="h-[24px] font-light" > Media Center </p>
                        <p className="h-[24px] font-light" > Buying Guides</p>
                        <p className="h-[24px] font-light" > DJI Trust Center </p>
                        <p className="h-[24px] font-light" > DJI Blog </p>
                    </div>
                    <div>
                        <h3 className="h-[24px] font-bold">Explore</h3>
                        <p className="h-[24px] font-light" > SkyPixel</p>
                        <p className="h-[24px] font-light" > DJI Forum</p>
                        <p className="h-[24px] font-light" > Developer</p>
                        <div className="mt-3">
                            <h3 className="h-[24px] font-bold">Subscribe</h3>
                            <p className="h-[24px] font-light" > Get the latest news from DJI</p>
                            <input 
                                type="email" 
                                placeholder="Enter an email address" 
                                className="w-full px-4 py-2 rounded-2xl bg-transparent text-gray-300 border-1"
                            />     
                        </div>              
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 border-b border-gray-700 mt-4" >
                    <nav className="flex flex-wrap gap-5 text-sm mb-3">
                        <div>
                            <img
                                src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="}
                                className="h8 "
                            />
                        </div>
                        <div className="hover:text-white" >Who We Are</div>
                        <div className="hover:text-white" >Contact Us</div>
                        <div className="hover:text-white" >Careers</div>
                        <div className="hover:text-white" >Dealer Portal</div>
                        <div className="hover:text-white" >RoboMaster</div>
                    </nav>
                    <nav className="flex ml-90 mb-3">
                        <Facebook size={20} className='ml-4 mr-4'/>
                        <Twitter size={20} className='ml-4 mr-4'/>
                        <Youtube size={20} className='ml-4 mr-4'/>
                        <div>
                            <img
                                src={"//www-cdn.djiits.com/uploads/footer_social/cover/61631/a76bea6a8542dca3a1c6b12487c9285a.png"}
                                className='h-[20px] ml-4 mr-4'
                            />
                        </div>
                        <Instagram size={20} className='ml-4 mr-4'/>
                    </nav>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-2" >
                    <nav className="flex flex-wrap gap-4 text-sm mb-3">
                        <div className="hover:text-white" >DJI Privacy Policy </div>
                        <span className="text-white">·</span>
                        <div className="hover:text-white" > Use of Cookies </div>
                        <span className="text-white">·</span>
                        <div className="hover:text-white" >Terms of UseBusiness</div>
                        <span className="text-white">·</span>
                        <div className="hover:text-white" > Information</div>
                        <div className="flex gap-2 mt-3">
                            <div className="text-gray-400 font-extralight" >Copyright © 2025 DJI All Rights Reserved. </div>
                            <div className="text-white font-extralight" >Feedback on web experience</div>
                        </div>
                    </nav>
                    <nav className="flex ml-90 gap-3 mb-3">
                        <img
                            src={"https://www-cdn.djiits.com/dps/dd414ceb936237ce4f434d1efcddfc1b.png"}
                            className='h-[15px] mt-1'
                        />
                        <div className="hover:text-white" >Other Regions / English </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}