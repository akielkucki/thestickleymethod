"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {RainbowButton} from "@/components/ui/rainbow-button";
import {motion} from "framer-motion";

const Navbar = () => {
    const navItems = [
        {label: 'Home', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Blog', href: '/blog'},
    ]
    return (
        <div className={"flex justify-around items-center "}>
            <div className={"flex justify-center items-center flex-col gap-2 relative"}>
                <Image src={"/bird.webp"} alt={"Logo"} width={100} height={100} className={""}/>
                <div className={"absolute bottom-0 font-bold text-blue-800 font-title"}>
                {"TSM".split("").map((char,index) => (<motion.span key={index} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: index*0.3}}>{char}</motion.span>))}
                </div>
            </div>
            <div className={"justify-center flex gap-10"}>
                {navItems.map((item) => (
                    <span
                        key={item.label}
                        className="
    relative cursor-pointer
    text-black
    transition-all duration-200 ease-out
    hover:text-sky-500

    hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.35)]

    after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0
    after:-translate-x-1/2 after:rounded-full
    after:bg-sky-400
    after:transition-all after:duration-200 after:ease-out
    hover:after:w-full
  "
                    >
  {item.label}
</span>
                ))}
            </div>
            <div>
                <RainbowButton size={"lg"}>
                    GET STARTED
                </RainbowButton>
            </div>
        </div>
    );
};

export default Navbar;