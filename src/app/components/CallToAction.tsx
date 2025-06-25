import React from "react";
import SectionBorder from "./SectionBorder";
import SectionContent from "./SectionContent";
import Button from "./Button";
import UnderlineImage from "../assets/images/underline.svg"
import Orbit from "./Orbit";
import Planet from "./Planet";

const CallToAction = function () {
    return (
        <section >
            <div className="container callToAction-container mx-auto">

                <SectionBorder borderTop >

                    <SectionContent className="relative px-5 md:px-10 py-10 isolate size-full ">
                        
                        <div className="absolute size-full -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"/>

                        <div className="absolute inset-0 -z-10">
                            <Orbit className="size-[200px] absolute-center"/>
                            <Orbit className="size-[350px] absolute-center"/>
                            <Orbit className="size-[500px] absolute-center"/>
                            <Orbit className="size-[650px] absolute-center"/>
                            <Orbit className="size-[800px] absolute-center"/>
                        </div>

                        {/* Planets */}
                        <div className="absolute-center -z-10">
                            <Planet size="lg" color="violet" className="translate-x-[250px] -translate-y-[50px] rotate-45"/>
                        </div>

                         <div className="absolute-center -z-10">
                            <Planet size="lg" color="fuchsia" className="translate-x-[200px] -translate-y-[160px] -rotate-45"/>
                        </div>

                         <div className="absolute-center -z-10">
                            <Planet size="lg" color="teal" className="-translate-x-[400px] translate-y-[30px] -rotate-45"/>
                        </div>

                        <div className="absolute-center -z-10">
                            <Planet size="md" color="violet" className="translate-x-[390px] translate-y-[100px] -rotate-45"/>
                        </div>

                          <div className="absolute-center -z-10">
                            <Planet size="sm" color="violet" className="translate-x-[300px] translate-y-[100px] -rotate-45"/>
                        </div>

                        <h2 className="font-semibold text-gray-200 text-3xl leading-tight md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center">Join the AI Revolution with {""}
                            <span className="relative isolate">
                                <span>Sphereal</span>
                                <span className="absolute top-full left-0 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]" style={{
                                    maskImage: `url(${UnderlineImage.src})`,
                                    maskSize: "contain",
                                    maskRepeat: "no-repeat",
                                    maskPosition: "top"
                                }}>
                                </span>
                            </span>
                        </h2>

                        <p className="!text-xl mt-8 text-center mx-auto max-w-2xl">Experience the transformation power of AI with Sphereal, Boost your productivity and streamline with our innovative AI chat platform</p>

                        <div className="flex items-center mt-5 justify-center">
                            <Button variant="secondary">Get Started</Button>
                        </div>

                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}

export default CallToAction