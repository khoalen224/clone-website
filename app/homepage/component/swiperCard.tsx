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
export default function SwiperCard (){
    const [activeCategory, setActiveCategory] = useState('public-safety');
    // Camera Drone Menu 
    const [showCameraDroneMenu, setShowCameraDroneMenu] = useState(false);
    const cameraDroneMenuRef = useRef(null);
    const cameraDroneTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleCameraDropDownEnter = () =>{
        if(cameraDroneTimeout.current){
            clearTimeout(cameraDroneTimeout.current);
        }
        setShowCameraDroneMenu(true);
    }
    const handleCameraDropDownLeave = () =>{
        cameraDroneTimeout.current = setTimeout(() => {
            setShowCameraDroneMenu(false);
            setActiveCategory('public-safety');
        }, 50);
    };
    
    // Hand held 
    const [showHandHeld, setShowHandHeld] = useState(false);
    const handHeldRef = useRef(null);
    const handHeldTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleHandHeldEnter = () =>{
        if(handHeldTimeout.current){
            clearTimeout(handHeldTimeout.current);
        }
        setShowHandHeld(true);
    }
    const handleHandHeldLeave = () =>{
        handHeldTimeout.current = setTimeout(() => {
            setShowHandHeld(false);
        }, 50);
    };

    //Power 
    const [showPower, setShowPower] = useState(false);
    const powerRef = useRef(null);
    const powerTimeout = useRef<NodeJS.Timeout | null>(null);
    const handlePowerEnter = () =>{
        if(powerTimeout.current){
            clearTimeout(powerTimeout.current);
        }
        setShowPower(true);
    }
    const handlePowerLeave = () =>{
        powerTimeout.current = setTimeout(() => {
            setShowPower(false);
        }, 50);
    };

    //Specialized
    const [showSpecialized, setShowSpecialized] = useState(false);
    const specializedRef = useRef(null);
    const specializedTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleSpecializedEnter = () =>{
        if(specializedTimeout.current){
            clearTimeout(specializedTimeout.current);
        }
        setShowSpecialized(true);
    }
    const handleSpecializedLeave = () =>{
        specializedTimeout.current = setTimeout(() => {
            setShowSpecialized(false);
        }, 50);
    };

    //Explore 
    const [showExplore, setShowExplore] = useState(false);
    const exploreRef = useRef(null);
    const exploreTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleExploreEnter = () =>{
        if(exploreTimeout.current){
            clearTimeout(exploreTimeout.current);
        }
        setShowExplore(true);
    }
    const handleExploreLeave = () =>{
        exploreTimeout.current = setTimeout(() => {
            setShowExplore(false);
        }, 50);
    };

    //Support 
    const [showSupport, setShowSupport] = useState(false);
    const supportRef = useRef(null);
    const supportTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleSupportEnter = () =>{
        if(supportTimeout.current){
            clearTimeout(supportTimeout.current);
        }
        setShowSupport(true);
    }
    const handleSupportLeave = () =>{
        supportTimeout.current = setTimeout(() => {
            setShowSupport(false);
        }, 50);
    };
    
    //Where to buy 
    const [showWhereToBuy, setShowWhereToBuy] = useState(false);
    const whereToBuyRef = useRef(null);
    const whereToBuyTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleShowWhereToBuyEnter = () =>{
        if(whereToBuyTimeout.current){
            clearTimeout(whereToBuyTimeout.current);
        }
        setShowWhereToBuy(true);
    }
    const handleShowWhereToBuyLeave = () =>{
        whereToBuyTimeout.current = setTimeout(() => {
            setShowWhereToBuy(false);
        }, 50);
    };

    const[isScrolled, setIsScrolled] = useState(false);
    const[isHovered , setIsHovered] = useState(false);
    const whiteLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";
    const blackLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIuNTQ4NDE2MyA0Ljg4MTM1NTFjLS43MDM0MjIxIDIuNjEzNzk5Ny0xLjQwMzY4MzEgNS4yMjgzNDMyLTIuMDg5NjI2NiA3Ljg0Njc5MTUtLjM0MzA2NDcgMS4zMDkwMzgzLS42Nzk4MDczIDIuNjE5MDA2Mi0xLjA3NDc1MDEgMy45MTQyODQ2LS4zODM2MDAzIDEuMjU4NDYxNy0uODU0Nzc5NyAyLjYwMTcxMzQtMS41NDE0NjY5IDMuNzQ0NzA0Ni0uNzE2MjUyMSAxLjE5MjgyMzktMS42NDM3MzU1IDIuMTI0MjEyLTIuOTI3Mjk5NSAyLjcyMDUzMS0uNTEzMjAyNS4yMzgxOTI5LTEuMDM5MDQ5MS40MDE2MzY3LTEuNTkwNzQxNy41MTg1OTQ4LS43ODI4MTk4LjE2NTg2MTEtMS41NjkxNzI0LjIzNDEwMjEtMi4zNjQ2MzYyLjI3OTEwMDMtMS45Njk4Nzk0LjExMTAwOC02LjE0ODc2MDcuMDk0NDU5LTguMTE4MDgyMy4wOTQ0NTlsMS4yMDczMjc0LTQuNDc0NTMwNmMuOTEzOTA5NSAwIDEuODI3NjMzMS4wMDMxNjExIDIuNzQxMzU2Ni0uMDIyMTI3Mi44ODE3NDE0LS4wMjQ1NDQ0IDEuODUxOTkxNi0uMDcxNzczOSAyLjcyMDM0NS0uMjc3MDU0OS45NTA5MTIyLS4yMjQ5OTEgMS42Njg0NjU5LS42MTEwMDg1IDIuMjk2OTUzLTEuMzg0NzE3LjU3MjUxODMtLjcwNDcyMzcuOTU3NDIwMS0xLjU4NDA0NzggMS4yNzI3Nzk0LTIuNDEzMzUzMy41NzYwNTExLTEuNTE0NTA1MSAxLjE2NTg2MjEtMy42ODI5NzE1IDEuNTgxNjMwNS01LjI0MjQ3NDguNDcwMjQ5Ny0xLjc2NTM0MjIuOTIyMjc2OS0zLjUzNTE0NyAxLjM3NzgzNzEtNS4zMDQyMDh6bTguMTM1NTQyMy0uMDAwMDM3MmwtMy41MTIwOSAxMy4wMTY5MzQ2aC02LjUwODE4ODRsMy41MTE5MDQxLTEzLjAxNjkzNDZoNi41MDgzNzQzek0xOS4yMjExODAxIDBoNi41MDgzNzQ0Yy0uNjgxODUyNyAyLjU0MDkxMDEtMS4zNjI3NzU3IDUuMDgyMDA2MS0yLjA1MjQzOCA3LjYyMDg3MDktLjQ4MDY2MjUgMS43Njg2ODktLjk1Nzk3OCAzLjUzODEyMi0xLjQ3OTczMzkgNS4yOTU0Njg2LS4yMjc1OTQxLjc2NjA4NDgtLjQ1NDgxNjQgMS41Mjk5Mzg0LS43NTMwNjg4IDIuMjczNzEwMS0uMjM5NjgwNS41OTc0MzQ2LS41MDc2MjQyIDEuMTI5MDQ1NS0xLjAwMjk3NjIgMS41NzU0OTQ0LS4zNzAwMjY0LjMzMzM5NTctLjc3MzUyMjUuNTQwNzIyLTEuMjQzNDAwMy42ODg1NDY3LS42MDQ1MDA1LjE5MDIxOTYtMS4yMTU1MDg5LjI1OTk0ODItMS44NDAwOTEyLjMxMTA4MjUtLjg5ODI5MDMuMDczNjMzNC0xLjc5Njc2NjUuMDkyNDEzNi0yLjY5NjU0NDQuMTA2OTE3Mi0yLjA2OTM1ODguMDMzMjgzOC01LjgyNzI2NTMuMDI4NjM1Mi03Ljg5NjYyNDIuMDE5NzA5OS0uNzQzNTg1OC0uMDAzMzQ2OS0xLjQ4NzE3MTUtLjAwNzgwOTYtMi4yMzA3NTczLS4wMjEzODM0LS41MzkwNDg1LS4wMDk2NjktMS4wNzc1MzkyLS4wMjMwNTY5LTEuNjE1ODQ0LS4wNTY3MTI2LS4zNTk0Mjc3LS4wMjI2ODUtLjcxNjA2NjItLjA1MjgwNzgtMS4wNzEyMTcyLS4xMTgyNTk3LS4yNDA5ODItLjA0NDI1NDQtLjQ3MzAzODgtLjEwMzc1NjItLjY5OTE0NTQtLjIwMjQ5MTktLjc0NDcwMTQtLjMyNTQwMDEtMS4xMjQyMTEtLjk3NTgyODQtMS4xNDYzMzgyLTEuNzY3OTQ1My0uMDEyODMtLjQ1MzMyODkuMDY2MDA5OC0uODg1MDg4My4xNTY3NS0xLjMyMzU0MTguMTI4ODU4NC0uNjIxMDQ5My4yODkzMjcxLTEuMjMzNTQ1My40NDgzMDgzLTEuODQ2Nzg1MS4zMDM0NTg5LTEuMTcxNjI2NC44NTg4NzA0LTMuMzMzMzk4OSAxLjI5MTc0NTUtNC40NzEzNjk2LjMzOTE2LS44OTE3ODIzLjc4NzA5NjQtMS43NzkyODc4IDEuNjM4MTU3Mi0yLjM0MzgxMDYuNDc1ODI4LS4zMTU1NDUxLjk3NTgyODUtLjQ4MzI2NTYgMS41MjcxNDkzLS41OTQyNzM2LjQwODcwMjUtLjA4MjE4NjcuODE5NDUwNS0uMTI1Njk3NCAxLjIzMzkxNzItLjE1NjU2NC42OTQxMjUtLjA1MTUwNjEgMS4zODg4MDc4LS4wNjc2ODMxIDIuMDg0MjM0My0uMDc5OTU1NC45ODgyODY3LS4wMTcyOTI3IDEuOTc2NTczMy0uMDIxMDExNSAyLjk2NDg2LS4wMjM5ODY2bDIuNDY1MzAxLS4wMDMzNDdoMi40NjUxNjE2bC0uODc4MDIyNSAzLjI1NDE4NzJjLTEuNDY1MjMwMiAwLTIuOTMwMDg4Ni0uMDA0MDkwOC00LjM5NTMxODkuMDA0NDYyNi0uNDI3NjY4Ny4wMDI2MDMyLS44NTQ3Nzk2LS4wMDA1NTc4LTEuMjgyMDc2NC4wMjczMzM2LS4xNTE3Mjk1LjAwOTg1NS0uMjk5OTI2LjAxOTcxLS40NDY2MzUuMDcxMDMwMi0uMTkzMDA4Ny4wNjY5Mzk1LS4yODgzOTc1LjE4ODE3NDMtLjM3MzE4NzQuMzYyMjE2OS0uMTI0MDI0LjI1NDc0MTgtLjE5NTYxMi41MjM0MjkzLS4yNzQ2Mzc3Ljc5MjMwMjgtLjEyMDY3Ny40MTA1NjItLjIzMjQyODcuODIzNTQxMi0uMzQ0MzY2MyAxLjIzNjcwNjQtLjE3MjM2OTEuNjM2NDgyNi0uMzQ0NzM4MiAxLjI3Mjk2NTItLjUwODM2OCAxLjkxMTg2NTEtLjA2MDQzMTQuMjM2NTE5NC0uMTE5NzQ3Mi40NzMwMzg5LS4xNzA2OTU2LjcxMTc4OTYtLjAzNTg4Ny4xNjczNDg2LS4wNjgyNDEuMzM0MTM5NC0uMDg0MjMyMS41MDQ4MzUtLjAxNzQ3ODcuMTg2Njg2Ny0uMDIyODcxLjQxMDkzMzkuMDkwMTgyMy41ODQyMzI3LjExNDkxMjcuMTc1OTAyLjMwOTIyMy4yMTY4MDk0LjQ5MDUxNzQuMjQzMDI3NC4yMDQ5MDkxLjAyOTkzNjguNDEwMTkwMS4wMzY0NDQ4LjYxNjIxNDkuMDQyNTgwOS4zMzczMDA0LjAxMDIyNjkuNjc0NjAxLjAxMTcxNDQgMS4wMTE5MDE0LjAxMzM4NzkuOTIyODM0Ny4wMDQ0NjI2IDEuODQ1NjY5NS4wMDQ2NDg2IDIuNzY4NTA0Mi0uMDAxMTE1Ni40MjUyNTE1LS4wMDI2MDMyLjg1MDEzMTEtLjAwNTU3ODMgMS4yNzUwMTA3LS4wMjI2ODUxLjI5MjY3NDEtLjAxMTcxNDQuNTgxNjI5NS0uMDIxNzU1My44Njk4NDEtLjA5MTQ4MzkuMjE5MDQwOC0uMDUyOTkzNy4zOTAyOTQyLS4xMzYyOTYyLjUzODQ5MDctLjMxNTM1OTIuMTAwMjIzMi0uMTIxMjM0OC4xNjU2NzUyLS4yNTU2NzE1LjIyNTU0ODgtLjM5ODQ3NTcuMTQ4NzU0My0uMzU0MDM1My4yNTI2OTY0LS43MjA1Mjg4LjM2MTEwMTEtMS4wODY4MzY0LjQxNTk1NDQtMS40MDUxNzA3Ljc5MDYyOTQtMi44MjExMjYgMS4xNzM0ODU5LTQuMjM1NDA4bDEuMTQzNDA5NS00LjI0NDE0NzNMMTkuMjIxMTgwMSAwaDYuNTA4Mzc0NHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIuODUiLz48L3N2Zz4=";
    useEffect(()=>{

        const onScroll = () => setIsScrolled(window.scrollY>80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[]);


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
                    <div
                        className={`ml-5 mr-5 transition-colors  cursor-pointer ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleCameraDropDownEnter}
                        onMouseLeave={handleCameraDropDownLeave}
                    >
                        Camera Drones
                        {showCameraDroneMenu && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleHandHeldEnter}
                        onMouseLeave={handleHandHeldLeave}
                    >
                        Handheld
                        {showHandHeld && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handlePowerEnter}
                        onMouseLeave={handlePowerLeave}
                    >
                        Power
                        {showPower && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleSpecializedEnter}
                        onMouseLeave={handleSpecializedLeave}
                    >
                        Specialized
                        {showSpecialized && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleExploreEnter}
                        onMouseLeave={handleExploreLeave}
                    >
                        Explore 
                        {showExplore && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleSupportEnter}
                        onMouseLeave={handleSupportLeave}
                    >
                        Support
                        {showSupport && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
                    <div 
                        className={` ml-5 mr-5 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                        onMouseEnter={handleShowWhereToBuyEnter}
                        onMouseLeave={handleShowWhereToBuyLeave}                        
                    >
                        Where to buy
                        {showWhereToBuy && (
                            <div className="border-2 border-gray-500 mt-4">
                            </div>
                        )}
                    </div>
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
                {/*Camera Drones*/}
                {showCameraDroneMenu && (
                    <div 
                        className="absolute top-full bg-white w-full shadow-lg"
                        ref={cameraDroneMenuRef}
                        onMouseEnter={handleCameraDropDownEnter}
                        onMouseLeave={handleCameraDropDownLeave}
                    >
                        <div className="max-w-7xl mx-auto flex relative">
                            <div className="w-64 py-8">
                                <div
                                    className={`w-full text-left px-8 py-3 text-lg text-black bg-white hover:bg-gray-100
                                    ${activeCategory === 'public-safety'}`}
                                    onMouseEnter={()=> setActiveCategory('public-safety')}
                                >
                                    Public Safety
                                </div>
                                <div 
                                    className={`w-full text-left px-8 py-3 text-lg text-black bg-white hover:bg-gray-100
                                    ${activeCategory === 'geospatial'}`}
                                    onMouseEnter={()=> setActiveCategory('geospatial')}
                                >
                                    Geospatial
                                </div>
                                <div 
                                    className={`w-full text-left px-8 py-3 text-lg text-black bg-white hover:bg-gray-100
                                    ${activeCategory === 'inspection'}`}
                                    onMouseEnter={()=> setActiveCategory('inspection')}
                                >
                                Inspection
                                </div>
                                <div className="absolute left-80 top-5 w-[1000px] h-auto">
                                    {activeCategory==='public-safety'&&(
                                        <div className="grid grid-cols-4 gap-5">
                                            <div className="flex flex-col text-left space-y-3">
                                                <h3 className="text-black font-bold" >Law Enforcement</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Situational Awareness</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >First Response</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Collision Reconstruction</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3">
                                                <h3 className="text-black font-bold mb-3" >Firefighting</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Urban Fires</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Wildfires</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Additional Response</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Emergency Response</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Disaster Response</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="block text-black font-bold" >Search and Rescue</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Search and Rescue</Link>
                                            </div>
                                            <div className="w-full mb-100">
                                                <Link href={"#"} className="text-black font-light hover:underline text-[12px]" >Learn more about Public Safety solutions {">"}</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeCategory==='geospatial'&&(
                                        <div className="grid grid-cols-4 gap-5">
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Surveying And Mapping</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Land Survey</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Cadastral Survey</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Urban Planning</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold mb-3" >Construction</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Progress Management</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Earthwork</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >BIM</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Heritage Preservation</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Mining</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Mining Survey</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Facade High Wall</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Asset Inspection</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Site Safety</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Search and Rescue</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Search and Rescue</Link>
                                            </div>
                                            <div className="w-full mb-140">
                                                <Link href={"#"} className="text-black font-light hover:underline text-[12px]" >Learn more about Public Safety solutions {">"}</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeCategory==='inspection'&&(
                                        <div className="grid grid-cols-4 gap-5">
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Electricity</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Powerline Inspection</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Substation Inspection</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold mb-3" >Oil and Gas</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Facility Inspection</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Pipeline Inspection</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Renewables</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Photovoltaic Power Plant</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Inspection of Wind Turbines</Link>
                                            </div>
                                            <div className="flex flex-col text-left space-y-3" >
                                                <h3 className="text-black font-bold" >Infrastructure</h3>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Bridge Inspection</Link>
                                                <Link href={"#"} className="block text-black font-light hover:underline text-[12px]" >Roof Inspection</Link>
                                            </div>
                                            <div className="w-full mb-40">
                                                <Link href={"#"} className="text-black font-light hover:underline text-[12px]" >Learn more about Public Safety solutions {">"}</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/*Handheld*/}
                {showHandHeld && (
                    <div 
                        className="bg-white w-full h-full"
                        ref={handHeldRef}
                        onMouseEnter={handleHandHeldEnter}
                        onMouseLeave={handleHandHeldLeave}
                    >
                        <div className="ml-40 grid grid-cols-8 mr-40 mt-5 mb-5 border-b border-gray-300">
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/f23c00b928367ef9c322a62f6016e8c7.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Drones</Link>
                                <p className="text-gray-400 text-[12px] font-light">Aerial tools for your daily tasks</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Matrice 400</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Matrice 350 RTK</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Matrice 4 Series</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Matrice 4D Series</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Mavic 3 Enterprise Series</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Matrice 30 Series</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Flycart 30</Link>
                            </div>
                            <div className="border-l border-gray-300 h-55 ml-20"></div>
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/1785fed645924fa26052e6b48adb8d09.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Payloads</Link>
                                <p className="text-gray-400 text-[12px] font-light">Gather data from multiple angles</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse S1</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse V1</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse H30 Series</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse L2</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse H20N</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse P1</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Zenmuse H20 Series</Link>
                            </div>
                            <div className="border-l border-gray-300 h-55 ml-20"></div>
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/67c6cbeb4670781bf2126136232c091f.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Remote Drone Operation Solutions</Link>
                                <p className="text-gray-400 text-[12px] font-light">For Roads Less Traveled</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Dock 3</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Dock 2</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Dock</Link>
                            </div>
                        </div>
                        <div className="ml-40 grid grid-cols-8 mr-40 mt-5 mb-5 ">
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/6014568d113d6b783b8b5de662df3c86.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Software</Link>
                                <p className="text-gray-400 text-[12px] font-light">Create digital transformation</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI FlightHub 2</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI FlightHub 2 On-Premises</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Terra</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI Modify</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI DeliveryHub</Link>
                            </div>
                            <div className="border-l border-gray-300 h-55 ml-20"></div>
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/fad6fcb334102606758c50c19fb59e2f.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Developer Technologies</Link>
                                <p className="text-gray-400 text-[12px] font-light">Unleash enterprise potential</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Cloud API</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Mobile SDK</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Payload SDK</Link>
                            </div>
                            <div className="border-l border-gray-300 h-55 ml-20"></div>
                            <div>
                                <img
                                    src={"https://www-cdn.djiits.com/cms/uploads/da080c3600581491e8b883bf4b3ab4a0.png"}
                                    className="w-[160px] h-[160px]"
                                />
                            </div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Accessories</Link>
                                <p className="text-gray-400 text-[12px] font-light">Expand your capabilities</p>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI FlightHub 2 AIO</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >Manifold 3</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >D-RTK 3 Multifunctional Station</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >D-RTK 2 Mobile Station</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI SkyPort V2</Link>
                                <Link href={"#"} className="block text-black font-extralight hover:underline text-[14px]" >DJI X-Port</Link>
                            </div>
                        </div>
                    </div>
                )}
                {/*Power*/}
                {showPower && (
                    <div 
                        className="bg-white w-full h-full"
                        ref={powerRef}
                        onMouseEnter={handlePowerEnter}
                        onMouseLeave={handlePowerLeave}
                    >
                        <div className="ml-110 grid grid-cols-3 mr-110 mt-5 mb-5">
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Ecosystem Solution Catalogue</Link>
                                <p className="text-gray-400 text-[12px] font-light">Learn DJI Ecosystem Solution to Expand Drone Application</p>     
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >DJI Developer</Link>
                                <p className="text-gray-400 text-[12px] font-light">Automate DJI Drones with Powerful Customization Tools</p> 
                            </div>
                        </div>
                    </div>
                )}
                {/*Explore*/}
                {showExplore && (
                    <div 
                        className="bg-white w-full h-full"
                        ref={exploreRef}
                        onMouseEnter={handleExploreEnter}
                        onMouseLeave={handleExploreLeave}
                    >
                        <div className="ml-50 grid grid-cols-7 mr-50 mt-5 mb-5">
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Blogs</Link>
                                <p className="text-gray-400 text-[12px] font-light">The latest on enterprise drones</p>    
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Users Stories</Link>
                                <p className="text-gray-400 text-[12px] font-light">How industry leaders are putting drones to work</p> 
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >News</Link>
                                <p className="text-gray-400 text-[12px] font-light">Stay informed with the latest Enterprise drone trends</p> 
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Rescue Map</Link>
                                <p className="text-gray-400 text-[12px] font-light">Drone have helped rescue people around the world, see where</p> 
                            </div>
                        </div>
                    </div>
                )}

                {showWhereToBuy && (
                    <div 
                        className="bg-white w-full h-full"
                        ref={exploreRef}
                        onMouseEnter={handleShowWhereToBuyEnter}
                        onMouseLeave={handleShowWhereToBuyLeave}
                    >
                        <div className="ml-50 grid grid-cols-7 mr-50 mt-5 mb-5 border-b border-gray-300">
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Data Security</Link>
                                <p className="text-gray-400 text-[12px] font-light">Put Your Data First</p>    
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20 mb-5"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Service Request and Inquiry</Link>
                                <p className="text-gray-400 text-[12px] font-light">Start your service journey</p> 
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20 mb-5"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >DJI Care Enterprise</Link>
                                <p className="text-gray-400 text-[12px] font-light">Comprehensive Fleet Protection</p> 
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20 mb-5"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >UTC Training</Link>
                                <p className="text-gray-400 text-[12px] font-light">UAS Training Center</p> 
                            </div>
                        </div>
                        <div className="ml-50 grid grid-cols-7 mr-50 mt-5 mb-5 border-b border-gray-300">
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >Fly Safe</Link>
                                <p className="text-gray-400 text-[12px] font-light">Tips, Regulations, and Geo Unlocking</p>    
                            </div>
                            <div className="border-l border-gray-300 h-25 ml-20 mb-5"></div>
                            <div>
                                <Link href={"#"} className="block text-black font-bold hover:underline text-[15px]" >DJI Maintenance Program</Link>
                                <p className="text-gray-400 text-[12px] font-light">Keep Your Fleet Online</p> 
                            </div>
                            <div></div>
                            <div>
                            </div>
                            <div></div>
                            <div>

                            </div>
                        </div>
                    </div>
                )}
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