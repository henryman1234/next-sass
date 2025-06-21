"use client"

import { useState } from "react";
import Button, { ButtonProps } from "./Button"
import { twMerge } from "tailwind-merge";
import Orbit from "./Orbit"
import Logo from "./Logo";

export const NavItems = [
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    }
]

export const LoginItems = [
    {
        buttonVariant: "primary",
        name: "Login",
        href: "#login"
    },
    {
        buttonVariant: "tertiary",
        name: "Sign Up",
        href: "#sign-up"
    },
    
] satisfies {
    name: string,
    href: string,
    buttonVariant: ButtonProps["variant"]
}[];

const Header = function () {

    const [isMobileNavOpen, setIsMobileNavopen] = useState(false)

    return ( 

        <>
            <header className="border-b  border-gray-200/20 justify-center items-center flex mx-auto ">
                <div className="container w-[100%] ">

                    <div className="h-18 lg:h-20 flex  items-center  justify-between">

                        <div className="flex gap-3 items-center ">
                            <Logo/>
                            <div className="font-extrabold text-2xl ">Henry.ai</div>
    
                        </div>

                        {/* DESKTOP */}
                        <div className="h-full hidden lg:block ">
                            <nav className="h-full w-full ">
                                {NavItems.map(function(item){
                                    return (
                                        <a className="px-8 relative font-bold tracking-widest text-gray-400 text-xs h-full uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:w-px before:bg-gray-200/20 before:left-0 before:h-2 last:after:content-[''] after:absolute after:h-2 after:w-px after:bg-gray-200/20 after:right-0 after:bottom-0" key={item.href} href={item.href}>{item.name}</a>
                                    )
                                })}
                            </nav>
                        </div> 
                    
                        {/* DESKTOP */}
                        <div className="hidden lg:flex gap-4">
                            {LoginItems.map(function(item){
                                return (
                                    <a href={item.href} key={item.name}>
                                        <Button variant={item.buttonVariant}>{item.name}</Button>
                                    </a>
                                )
                            })}

                        </div>
                     
                        {/* MOBILE */}
                        <div className="flex items-center lg:hidden">
                            
                            <button className="size-10 rounded-lg border-2 relative border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-violet-400))_border-box]" onClick={function(){
                                setIsMobileNavopen(function(curr){
                                    return !curr
                                })
                            }}>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className={twMerge("w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300", isMobileNavOpen && "translate-y-0 rotate-45")}></div>
                                </div>

                                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                    <div className={twMerge("w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-3000", isMobileNavOpen && "translate-y-0 -rotate-45")}></div>
                                </div>
                            
                            </button>
                        </div>

                    </div>
                </div>
        </header>

        {isMobileNavOpen && (
            <div className="fixed top-18 bottom-0 right-0 left-0 bg-gray-950 z-30 flex justify-center items-center overflow-hidden">

               {/* ABSOLUTE ELEMENT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
                    <Orbit className="size-[200px]"/>
                </div> 

                {/* ABSOLUTE ELEMENT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
                    <Orbit className="size-[350px]"/>
                </div> 

                {/* ABSOLUTE ELEMENT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
                    <Orbit className="size-[500px]"/>
                </div> 

                {/* ABSOLUTE ELEMENT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
                    <Orbit className="size-[650px]"/>
                </div>

                {/* ABSOLUTE ELEMENT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
                    <Orbit className="size-[800px]"/>
                </div> 

                <div className="container h-full ">

                    <nav className="flex  flex-col items-center justify-center gap-4 py-8  ">
                        {NavItems.map(function(item){
                            return <a className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10" key={item.name} href={item.href}>{item.name}</a>
                        })}
                        {LoginItems.map(function(item){
                            return (
                                <a href={item.href} key={item.name} className="w-full max-w-xs">
                                    <Button block key={item.name} variant={item.buttonVariant}>{item.name}</Button>
                                </a>
                            )
                        })}
                    </nav>
                </div>
            </div>
        )}
        
        </>

    )
}

export default Header