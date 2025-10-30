import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newArrivals } from "./swiper";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { clearTimeout } from "timers";

//Main menu
const MENU_CONFIG =[
    { id: 'cameraDrone', label: 'Camera Drones', hasDropdown:true},
    { id: 'handHeld', label: 'Handheld', hasDropdown:true},
    { id: 'power', label: 'Power', hasDropdown:true},
    { id: 'specialized', label: 'Specialized', hasDropdown:true},
    { id: 'explore', label: 'Explore', hasDropdown:true},
    { id: 'support', label: 'Support', hasDropdown:true},
    { id: 'whereToBuy', label: 'Where to buy', hasDropdown:true},
];

//Camera Drone Categories
const CAMERA_DRONE_CATEGORIES: {id:CategoryId; label:string }[] =[
    {id: 'public-safety', label:'Public Safety'},
    {id: 'geospatial', label:'Geospatial'},
    {id: 'inspection', label:'Inspection'}
]

type CategoryId = 'public-safety' | 'geospatial' | 'inspection';

const CAMERA_DRONE_CONTENT: Record<CategoryId, {
    sections: {title: string, links: string[]} [];
    learnMore: string;
}> = {
    'public-safety': {
        sections: [
            {
                title: 'Law Enforcement',
                links: ['Situational Awareness', 'First Response', 'Collision Reconstruction']
            },
            {
                title: 'Firefighting',
                links: ['Urban Fires', 'Wildfires', 'Additional Response']
            },
            {
                title: 'Emergency Response',
                links: ['Disaster Response']
            },
            {
                title: 'Search and Rescue',
                links: ['Search and Rescue']
            }
        ],
        learnMore: 'Learn more about Public Safety solutions >'
    },
    'geospatial': {
        sections: [
            {
                title: 'Surveying And Mapping',
                links: ['Land Survey', 'Cadastral Survey', 'Urban Planning']
            },
            {
                title: 'Construction',
                links: ['Progress Management', 'Earthwork', 'BIM', 'Heritage Preservation']
            },
            {
                title: 'Mining',
                links: ['Mining Survey', 'Facade High Wall', 'Asset Inspection', 'Site Safety']
            },
            {
                title: 'Search and Rescue',
                links: ['Search and Rescue']
            }
        ],
        learnMore: 'Learn more about Public Safety solutions >'
    },
    'inspection': {
        sections:  [
            {
                title: 'Electricity',
                links: ['Powerline Inspection', 'Substation Inspection']
            },
            {
                title: 'Oil and Gas',
                links: ['Facility Inspection', 'Pipeline Inspection']
            },
            {
                title: 'Renewables',
                links: ['Photovoltaic Power Plant', 'Inspection of Wind Turbines']
            },
            {
                title: 'Infrastructure',
                links: ['Bridge Inspection', 'Roof Inspection']
            }
        ],
        learnMore: 'Learn more about Public Safety solutions >'
    }
};

const HANDHELD_SECTIONS = [
    {
        image: "https://www-cdn.djiits.com/cms/uploads/f23c00b928367ef9c322a62f6016e8c7.png",
        title: "Drones",
        description: "Aerial tools for your daily tasks",
        links: [
        "DJI Matrice 400", "Matrice 350 RTK", "DJI Matrice 4 Series",
        "DJI Matrice 4D Series", "DJI Mavic 3 Enterprise Series",
        "Matrice 30 Series", "DJI Flycart 30"
        ]
    },
    {
        image: "https://www-cdn.djiits.com/cms/uploads/1785fed645924fa26052e6b48adb8d09.png",
        title: "Payloads",
        description: "Gather data from multiple angles",
        links: [
        "Zenmuse S1", "Zenmuse V1", "Zenmuse H30 Series",
        "Zenmuse L2", "Zenmuse H20N", "Zenmuse P1", "Zenmuse H20 Series"
        ]
    },
    {
        image: "https://www-cdn.djiits.com/cms/uploads/67c6cbeb4670781bf2126136232c091f.png",
        title: "Remote Drone Operation Solutions",
        description: "For Roads Less Traveled",
        links: ["DJI Dock 3", "DJI Dock 2", "DJI Dock"]
    },
    {
        image: "https://www-cdn.djiits.com/cms/uploads/6014568d113d6b783b8b5de662df3c86.png",
        title: "Software",
        description: "Create digital transformation",
        links: [
        "DJI FlightHub 2", "DJI FlightHub 2 On-Premises",
        "DJI Terra", "DJI Modify", "DJI DeliveryHub"
        ]
    },
    {
        image: "https://www-cdn.djiits.com/cms/uploads/fad6fcb334102606758c50c19fb59e2f.png",
        title: "Developer Technologies",
        description: "Unleash enterprise potential",
        links: ["Cloud API", "Mobile SDK", "Payload SDK"]
    },
    {
        image: "https://www-cdn.djiits.com/cms/uploads/da080c3600581491e8b883bf4b3ab4a0.png",
        title: "Accessories",
        description: "Expand your capabilities",
        links: [
        "DJI FlightHub 2 AIO", "Manifold 3", "D-RTK 3 Multifunctional Station",
        "D-RTK 2 Mobile Station", "DJI SkyPort V2", "DJI X-Port"
        ]
    },
];

const POWER_SECTIONS = [
  {
    title: "Ecosystem Solution Catalogue",
    description: "Learn DJI Ecosystem Solution to Expand Drone Application"
  },
  {
    title: "DJI Developer",
    description: "Automate DJI Drones with Powerful Customization Tools"
  }
];

const EXPLORE_SECTIONS = [
    {
        title: "Blogs",
        description: "The latest on enterprise drones"
    },
    {
        title: "Users Stories",
        description: "How industry leaders are putting drones to work"
    },
    {
        title: "News",
        description: "Stay informed with the latest Enterprise drone trends"
    },
    {
        title: "Rescue Map",
        description: "Drone have helped rescue people around the world, see where"
    }
];

const WHERE_TO_BUY_SECTIONS = [
    [
        { title: "Data Security", description: "Put Your Data First" },
        { title: "Service Request and Inquiry", description: "Start your service journey" },
        { title: "DJI Care Enterprise", description: "Comprehensive Fleet Protection" },
        { title: "UTC Training", description: "UAS Training Center" }
    ],
    [
        { title: "Fly Safe", description: "Tips, Regulations, and Geo Unlocking" },
        { title: "DJI Maintenance Program", description: "Keep Your Fleet Online" }
    ]
];

const useMenuState = () => {
    const [menuStates, setMenuStates] = useState(
        Object.fromEntries(MENU_CONFIG.map(item =>[item.id, false]))
    );
    const menuRefs = useRef(
        Object.fromEntries(MENU_CONFIG.map(item =>[item.id, null]))
    );
    // FIX: Change NodeJS.Timeout to number for browser environment
    const menuTimeouts = useRef<{[key: string]: number | null}>(
        Object.fromEntries(MENU_CONFIG.map(item =>[item.id, null]))
    );

    const handleMenuEnter = (menuId : string) => {
        if(menuTimeouts.current[menuId]){
            window.clearTimeout(menuTimeouts.current[menuId]!);
            menuTimeouts.current[menuId] = null;
        }
        setMenuStates(prev =>({...prev, [menuId]:true}));
    };

    const handleMenuLeave = (menuId : string, resetCategory?: () => void) => {
        menuTimeouts.current[menuId] = window.setTimeout(()=>{
            setMenuStates(prev =>({...prev, [menuId]:false}));
            if(resetCategory) resetCategory();
            menuTimeouts.current[menuId] = null;
        }, 200);
    };

    return{menuStates, menuRefs, handleMenuEnter, handleMenuLeave};
};

const MenuItem = ({item, isScrolled, isHovered, onEnter, onLeave, showMenu}:{
    item: {id: string; label: string; hasDropdown: boolean};
    isScrolled: boolean;
    isHovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
    showMenu: boolean;
}) =>(
    <div
        className={`ml-5 mr-5 transition-colors cursor-pointer ${
            isScrolled || isHovered ? 'text-black' : 'text-white'
        }`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
    >
        {item.label}
        {showMenu && <div className="border-2 border-gray-500 mt-4"/>}
    </div>
);

const SectionWithDivider =({children, showDivider = true, index}:{
    children: React.ReactNode;
    showDivider?: boolean;
    index:number;
})=>(
    <>
    {children}
    {showDivider && <div className="border-l border-gray-300 h-30 ml-20 mb-5"/>}
    </>
);
export default function SwiperCard (){
    const [activeCategory, setActiveCategory] = useState<CategoryId>('public-safety');
    const {menuStates, menuRefs, handleMenuEnter, handleMenuLeave} = useMenuState();
    const[isScrolled, setIsScrolled] = useState(false);
    const[isHovered , setIsHovered] = useState(false);
    const whiteLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";
    const blackLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIuODUiLz48L3N2Zz4=";
    useEffect(()=>{

        const onScroll = () => setIsScrolled(window.scrollY>80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[]);

    const resetCategory = () => setActiveCategory('public-safety' as CategoryId);

    //Render Camera Drop Down 
    const renderCamerDroneDropDown = () =>(
        <div 
            className="absolute top-full bg-white w-full shadow-lg"
            ref={menuRefs.current.cameraDrone}
            onMouseEnter={() => handleMenuEnter('cameraDrone')}
            onMouseLeave={() => handleMenuLeave('cameraDrone', resetCategory)}
        >
            <div className="max-w-7xl mx-auto flex relative">
                <div className="w-64 py-8">
                    {CAMERA_DRONE_CATEGORIES.map(category =>(
                        <div
                            key={category.id}
                            className={`w-full text-left px-8 py-3 text-lg text-black bg-white hover:bg-gray-100 ${
                                activeCategory === category.id ? 'bg-gray-100' : ''
                            }`}
                            onMouseEnter={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>

                <div className="absolute left-80 top-5 w-[1000px] h-auto">
                    <div className="grid grid-cols-4 gap-5">
                        {CAMERA_DRONE_CONTENT[activeCategory]?.sections.map((section, idx) =>(
                            <div key={idx} className="flex flex-col text-left space-y-3">
                                <h3 className="text-black font-bold" >{section.title}</h3>
                                {section.links.map((link, linkIdx)=>(
                                    <a
                                        key={linkIdx}
                                        href="#"
                                        className="block text-black font-light hover:underline text-[12px]"
                                    >
                                    {link}
                                    </a>
                                ))}
                            </div>
                        ))}
                        <div className="w-full mb-40">
                            <a href="#" className="text-black font-light hover:underline text-[12px]">
                                {CAMERA_DRONE_CONTENT[activeCategory]?.learnMore}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    const renderHandleheldDropdown = () => (
        <div
            className="bg-white w-full h-full"
            ref={menuRefs.current.handHeld}
            onMouseEnter={() => handleMenuEnter('handHeld')}
            onMouseLeave={() => handleMenuLeave('handHeld')}
        >
            {[0,3].map(startIdx =>(
                <div
                    key={startIdx}
                    className={`ml-40 grid grid-cols-8 mr-40 mt-5 mb-5 ${
                        startIdx === 0 ? 'border-b border-gray-300' : ''
                    }`}
                >
                    {HANDHELD_SECTIONS.slice(startIdx, startIdx +3).map((section, idx) => (
                    <SectionWithDivider key={idx} showDivider={idx<2} index={idx}>
                        <div>
                            <img src={section.image} className="w-[160px] h-[160px]" alt={section.title} />
                        </div>
                        <div>
                            <a href="#" className="block text-black font-bold hover:underline text-[15px]" >
                                {section.title}
                            </a>
                            <p className="text-gray-400 text-[12px] font-light">{section.description}</p>
                            {section.links.map((link, linkIdx) =>(
                                <a
                                    key={linkIdx}
                                    href="#"
                                    className="block text-black font-extralight hover:underline text-[14px]"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </SectionWithDivider>
                    ))}                    
                </div>
            ))}
        </div>
    );

    const renderPowerDropdown = () =>(
        <div
            className="bg-white w-full h-full"
            ref={menuRefs.current.power}
            onMouseEnter={()=> handleMenuEnter('power')}
            onMouseLeave={()=> handleMenuLeave('power')}
        >
            <div className="ml-110 grid grid-cols-3 mr-110 mt-5 mb-5">
                {POWER_SECTIONS.map((section, idx) => (
                <SectionWithDivider key={idx} showDivider={idx===0} index={idx}>
                    <div>
                        <a href="#" className="block text-black font-bold hover:underline text-[15px]" >
                            {section.title}
                        </a>
                        <p className="text-gray-400 text-[12px] font-light">{section.description}</p>
                    </div>
                </SectionWithDivider>
                ))}
            </div>
        </div>  
    );

    const renderExploreDropDown= () =>(
        <div
            className="bg-white w-full h-full"
            ref={menuRefs.current.explore}
            onMouseEnter={() => handleMenuEnter('explore')}
            onMouseLeave={() => handleMenuLeave('explore')}
        >
            <div className="ml-50 grid grid-cols-7 mr-50 mt-5 mb-5">
                {EXPLORE_SECTIONS.map((section, idx) => (
                <SectionWithDivider key={idx} showDivider={idx<EXPLORE_SECTIONS.length -1} index={idx}>
                    <div>
                        <a href="#" className="block text-black font-bold hover:underline text-[15px]" >
                            {section.title}
                        </a>
                        <p className="text-gray-400 text-[12px] font-light">{section.description}</p>
                    </div>
                </SectionWithDivider>
                ))}
            </div>
        </div>
    );

    const renderWhereToBuyDropdown= () =>(
        <div
            className="bg-white w-full h-full"
            ref={menuRefs.current.explore}
            onMouseEnter={() => handleMenuEnter('whereToBuy')}
            onMouseLeave={() => handleMenuLeave('whereToBuy')}
        >
            {WHERE_TO_BUY_SECTIONS.map((row, rowIdx) => (
            <div
                key={rowIdx}
                className={`ml-50 grid grid-cols-7 mr-50 mt-5 mb-5 ${
                    rowIdx === 0 ? 'border-b border-gray-300' : ''
                }`}
            >
                {row.map((section, idx) => (
                <SectionWithDivider key={idx} showDivider={idx < row.length -1} index={idx}>
                    <div>
                        <a href="#" className="block text-black font-bold hover:underline text-[15px]" >
                            {section.title}
                        </a>
                        <p className="text-gray-400 text-[12px] font-light">{section.description}</p>
                    </div>
                </SectionWithDivider>
                ))}
            </div>
            ))}
        </div>
    );

    return(
        <div className="w-full" >
            <header 
                className={`fixed left-0 w-full  z-50 transition-colors duration 500 ${
                    isScrolled || isHovered
                        ? 'bg-white shadow-md'
                        : 'bg-transparent'
                }`}
                style={{backdropFilter: !isScrolled ? "blur(0.5px)": undefined }}
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
            >
                <div className=" mt-7 mb-3 max-w-7xl mx-auto items-center flex " >
                    <img
                        src={isScrolled || isHovered? blackLogo : whiteLogo}
                        alt="logo"
                        className="h8 "
                    />
                    {MENU_CONFIG.map(item =>(
                        <MenuItem
                            key={item.id} 
                            item ={item}
                            isScrolled={isScrolled}
                            isHovered={isHovered}
                            onEnter={()=> handleMenuEnter(item.id)}
                            onLeave={()=> handleMenuLeave(item.id, item.id === 'cameraDrone' ? resetCategory : undefined) }
                            showMenu={menuStates[item.id]}
                        />
                    ))}

                    <div className={`ml-50 px-4 py-2`}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="7"
                                stroke={isScrolled || isHovered ? "black" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M20 20L16.5 16.5"
                                stroke={isScrolled || isHovered ? "black" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    
                    <div className={`ml-2 px-4 py-2`}>
                        <Link
                            href="/login"
                            className="inline-block"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                cx="12"
                                cy="8"
                                r="4"
                                stroke={isScrolled || isHovered ? "black" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                />
                                <path
                                d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21"
                                stroke={isScrolled || isHovered ? "black" : "white"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                />
                            </svg>
                        </Link>
                    </div>
                    <button className="h-8 w-22 bg-blue-500 rounded text-white flex items-center justify-center " >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M6 6H18L19 21H5L6 6Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                        Buy
                    </button>
                </div>
                {/* Dropdowns */}
                {menuStates.cameraDrone && renderCamerDroneDropDown()}
                {menuStates.handHeld && renderHandleheldDropdown()}
                {menuStates.power && renderPowerDropdown()}
                {menuStates.explore && renderExploreDropDown()}
                {menuStates.whereToBuy && renderWhereToBuyDropdown()}
            </header>
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