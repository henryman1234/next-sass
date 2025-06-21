import EchoValleyLogo from "../assets/images/echo-valley-logo.svg"
import QuantumLogo from "../assets/images/quantum-logo.svg"
import PulseLogo from "../assets/images/pulse-logo.svg"
import OutsideLogo from "../assets/images/outside-logo.svg"
import CelestialLogo from "../assets/images/celestial-logo.svg"
import AcneCorpLogo from "../assets/images/acme-corp-logo.svg"
import React from "react"
import Image from "next/image"
import SectionBorder from "./SectionBorder"
import SectionContent from "./SectionContent"


export const companies = [
    {
        name: "Acne Corp",
        logo: AcneCorpLogo
    },
     {
        name: "Echo Valley",
        logo: EchoValleyLogo
    },
     {
        name: "Quantum",
        logo: QuantumLogo
    },
     {
        name: "Pulse",
        logo: PulseLogo
    },
     {
        name: "Outside",
        logo: OutsideLogo
    },
     {
        name: "Celestial",
        logo: CelestialLogo
    },
]


const Companies = function () {
    return (
        <section className="pb-[100px]">

            <div className="container mx-auto companies-container">

               <SectionBorder>

                    <SectionContent className="pt-0 md:pt-0">

                        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">Empowering creators at leading companies</h2>

                        <div className="mt-8 overflow-x-clip -mx-4 ">

                            <div className="flex flex-none gap-18 px-18 ">

                                {companies.map(function(company){
                                    return (
                                        <Image key={company.name} src={company.logo} className="h-10 w-auto" alt="" />
                                    )
                                })}
                        
                            </div>

                        </div>

                    </SectionContent>

               </SectionBorder>
               
            </div>
        </section>
    )
    
}

export default Companies