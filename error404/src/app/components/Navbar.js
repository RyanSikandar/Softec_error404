"use client"
import Image from "next/image"
import PakTravels from "../../../public/PakTravels.webp"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function Navbar() {
    const [isHeaderShown, setIsHeaderShown] = useState(false);
    let lastScrollTop = 0;

    useEffect(() => {

        const handleScroll = () => {
            const st = window.scrollY;
            if (st < 10) {
                setIsHeaderShown(false);
            } else if (st > lastScrollTop) {
                setIsHeaderShown(true);
            } else {
                setIsHeaderShown(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        let width = window.innerWidth;
        if (width < 768) {
            setIsMobile(true);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`justify-between flex fixed top-0 z-10 bg-${isHeaderShown ? "white" : "transparent"} w-screen px-4 transition-all ease-in-out duration-200`}>
            <Image src={PakTravels} alt="Logo" height={170} width={170} />

            <div>

            </div>
            <div className="flex justify-between mt-12 gap-20 mr-4">
                <button className="btn btn-outline  text-[#EDBE73] hover:bg-[#EDBE73] ">Login</button>
                <button className="btn btn-outline btn-accent">Plan a trip</button>
            </div>

        </div>
    )
}
