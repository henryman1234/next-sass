"use client"
import robotImg from "../assets/images/robot.jpg"
import Image from "next/image"
import Button from "./Button"
import underlineImage from "../assets/images/underline.svg"
import Loader from "../assets/images/loader.svg"
import Orbit from "./Orbit"
import Planet from "./Planet"

const Hero = function () {
    return (
        <section>
            
            <div className="container container-hero mx-auto ">

                <div className="border-l border-r border-[var(--color-border)] ">

                    <div className="container isolate px-5 container-hero2 py-20 md:py-36  mx-auto relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

                        <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>

                        <div className="absolute inset-0 -z-10">

                            <div className="absolute-center">
                                <Orbit className="size-[350px]"/>
                            </div>

                            <div className="absolute-center">
                                <Orbit className="size-[600px]"/>
                            </div>

                            <div className="absolute-center">
                                <Orbit className="size-[850px]"/>
                            </div>

                            <div className="absolute-center">
                                <Orbit className="size-[1100px]"/>
                            </div>

                            <div className="absolute-center">
                                <Orbit className="size-[1350px]"/>
                            </div>

                        </div>

                        <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight ">Developpé par Henry avec React, Tailwind et{""}    
                        <span className="relative">
                            <span> NextJS</span>
                            <span className="absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]" style={{
                                maskImage: `url(${underlineImage.src})`,
                                maskSize:"contain",
                                maskPosition: "center",
                                maskRepeat: "no-repeat"
                            }}></span>
                        </span>
                        </h1>
                        <p className="text-center text-[16px] md:text-lg mt-8 ">cette landing-page futuriste a été créee avec le célèbre framework NextJS, le but ici n'est pas d'avoir une interface full-stack mais juste une interface front pour montrer les capacités design de Next. </p>

                        <div className="mt-6 flex justify-center items-center">
                            <Button variant="secondary">Commençer</Button>
                        </div>
                        

                        <div className="relative isolate max-w-5xl mx-auto">

                            {/* PLANETS */}
                            <div className="absolute left-1/2 top-0">
                                <Planet size="lg" color="violet" className="-translate-x-[290px] -translate-y-[76px] rotate-135" />
                                <Planet size="lg" color="violet" className="-translate-x-[295px] -translate-y-[280px] -rotate-135" />
                                <Planet size="sm" color="fuchsia" className="-translate-x-[500px] -translate-y-[360px] rotate-135" />
                                <Planet size="sm" color="teal" className="translate-x-[500px] -translate-y-[350px] -rotate-135" />
                            </div>

                            <div className="absolute top-[30%] -translate-x-10 left-0 z-10 hidden lg:block">
                                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                                    <div>
                                        Can you generate an incredible frontend dev video tutorial?
                                    </div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">1m ago</div>
                                </div>
                            </div>

                            <div className="absolute top-[50%] translate-x-10 right-0 z-10 hidden lg:block">
                                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                                    <div>
                                        <strong>Brainwave:</strong> I created one based on videos from frontend Tribe
                                    </div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">1m ago</div>
                                </div>
                            </div>

                            <div className="mt-10 border-gradient rounded-2xl border-2 overflow-hidden relative">

                                <Image src={robotImg} alt="RobotImage"/>
                                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
                                    <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                                        <Image src={Loader} alt="loader-image"/>
                                        <div className="font-semibold text-gray-100">AI is generating <span>|</span></div>
                                    </div>
                                </div>
                            
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
