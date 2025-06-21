import React from "react"
import figmaLogo from "../assets/images/figma-logo.png"
import dockerLogo from "../assets/images/docker-logo.png"
import vsCodeLogo from "../assets/images/vs-code-logo.png"
import githubLogo from "../assets/images/github-logo.png"
import notionLogo from "../assets/images/notion-logo.png"
import jiraLogo from "../assets/images/jira-logo.png"
import gcpLogo from "../assets/images/gcp-logo.png"
import slackLogo from "../assets/images/slack-logo.png"
import SectionBorder from "./SectionBorder"
import SectionContent from "./SectionContent"
import Button from "./Button"
import Orbit from "./Orbit"
import Logo from "./Logo"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export const features = [
    "Effortless integration",
    "Intelligent automation",
    "Robust security"
]

export const logos = [
    {
        src: slackLogo,
        name: "slack logo",
        rotate: 0
    },
    {
        src: dockerLogo,
        name: "docker logo",
        rotate: 45
    },
    {
        src: figmaLogo,
        name: "figma logo",
        rotate: 90
    },
    {
        src: githubLogo,
        name: "github logo",
        rotate: 135
    },
    {
        src: vsCodeLogo,
        name: "vs code logo",
        rotate: 180
    },
    {
        src: notionLogo,
        name: "notion logo",
        rotate: 225
    },
    {
        src: jiraLogo,
        name: "jira logo",
        rotate: 270
    },
    {
        src: gcpLogo,
        name: "gcp logo",
        rotate: 315
    }
];


const Features = function () {
    return (
        <section className="pb-20">

            <div className="container features-container mx-auto">

                <SectionBorder borderTop className="pt-10">
                    {/* second container */}
                    <SectionContent className="px-5 md:px-10 lg:px-40">
                        <div className="grid-cols-1 grid lg:grid-cols-2 gap-20">
                            <div>
                                <h2 className="text-3xl md:text-4xl  lg:text-5xl font-semibold text-gray-200" >Your AI-powered collaboration companion</h2>
                                <ul className="mt-12 flex flex-col gap-8">
                                    {features.map(function(feature){
                                        return <li className="flex items-center gap-4" key={feature}>
                                            <FontAwesomeIcon icon={faCircleCheck} className="text-violet-400 size-6"/>
                                            <span className="text-xl font-medium">{feature}</span>
                                        </li>
                                    })}
                                </ul>
                                <Button className="mt-10">Try it now</Button>
                            </div>

                             
                            <div className="justify-center flex lg:mt-10">     
                                <div className="size-[270px] relative md:size-[450px] flex-shrink-5 ">
                                    <div className="absolute inset-0">
                                        <Orbit className="size-full"/>
                                    </div>
                                    <div className="absolute-center">
                                        <Orbit className="size-[180px] md:size-[300px]"/>
                                    </div>
                                    <div className="absolute-center">
                                        <Logo className="size-24 md:size-30" />
                                    </div>

                                    {/* CIRCLE LOGOS */}
                                    {logos.map(function(item){
                                        return (
                                        <div className="absolute inset-0 " style={{
                                            transform: `rotate(${item.rotate}deg)` 
                                            }} key={item.name}>

                                            <div className=" inline-flex size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0 bg-gray-950 translate-x-1.5" style={{
                                            transform: `translate(-50%, -50%) rotate(-${item.rotate}deg)`
                                            }}>
                                                <Image src={item.src} alt={item.name} className="size-6 md:size-9"/>
                                            </div>

                                        </div>
                                    )})}

                                </div>
                            </div>

                        </div>

                    </SectionContent>
                </SectionBorder>

            </div>
        </section>
    )
}

export default Features