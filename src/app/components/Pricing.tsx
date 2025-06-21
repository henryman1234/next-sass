import React from "react"
import SectionBorder from "./SectionBorder"
import SectionContent from "./SectionContent"
import Button, { ButtonProps } from "./Button"
import { twMerge } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

export const pricingTiers = [
    {
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "Free",
        buttonVariant: "secondary",
        buttonText: "Get Started",
        features: [
            "Access to AI chatbot for natural language conversation",
            "Basic test automation",
            "Limited message history storage" 
        ],
        color: "amber",
        className: "lg:py-12 lg:my-6"
    },
    {
        title: "Premium",
        description: "Advanced AI capabilities for enhanced",
        price: 99,
        buttonVariant: "secondary",
        buttonText: "Upgrade to premium",
        features: [
            "All basic features included",
            "Priority access to new IA features and updates",
            "Advanced automation tools for seamless test management", 
            "Customizable chat templates for your spoecific workflow", 
        ],
        color: "violet",
        className: "lg:py-18 lg:my-0"
    },
    {
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        buttonText: "Contact Us",
        buttonVariant: "primary",
        features: [
            "All Premium features included",
            "Dedicated account manager and priority customer support",
            "Enhanced securiry and compliance features for large teams", 
            "Custom AI models tailored to your organization's model", 
            "API access for seamless integration with entreprise systems", 
        ],
        color: "teal",
        className: "lg:py-12 lg:my-6"
    },
] satisfies {
    title: string,
    description: string,
    price: string | number | null,
    buttonText: string,
    features: string[],
    color: string,
    className: string,
    buttonVariant?: ButtonProps["variant"]
} []



const Pricing = function () {
    return (
        <section>

            <div className="container mx-auto pricing-container">

               <SectionBorder borderTop className="pt-4">

                    {/* Second conatiner */}
                    <SectionContent className="px-5 md:px-10">
                        
                        <h2 className="text-3xl font-semibold text-center text-gray-200 leading-tight mt-2 md:text-4xl lg:text-5xl">Flexible plans for every need</h2>

                        <div className="mt-10 flex flex-col gap-8  lg:flex-row lg:items-start">
                            
                            {pricingTiers.map(function(item){
                                return(
                                    <div key={item.title} className={twMerge("border border-[var(--color-border)] rounded-3xl px-6 py-12  flex-1 mx-auto", item.className)}>
                                        <h3 className={twMerge("font-semibold text-4xl",
                                            item.color === "violet" && "text-violet-400",
                                            item.color === "amber" && "text-amber-300",
                                            item.color === "teal" && "text-teal-300"
                                        )}>{item.title}</h3>

                                        <p>{item.description}</p>

                                        <div className="mt-8">
                                            {
                                                typeof item.price === "number" && (
                                                    <span className="text-2xl font-semibold align-top">$</span>
                                                )
                                            }
                                            <span className="text-7xl font-semibold text-gray-200">
                                                {item.price ? item.price : <>&nbsp;</>}
                                            </span>
                                        </div>
                                        <Button block className="mt-8" variant={item.buttonVariant}>{item.buttonText}</Button>
                                        
                                        <ul className="flex flex-col gap-4 mt-8">
                                            {item.features.map(function(c){
                                                return <li  key={c} className="border-t border-[var(--color-border)] pt-4 flex gap-4 ">
                                                    <FontAwesomeIcon icon={faCheckCircle}  className="size-6 text-violet-400"/>
                                                    <span>{c}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </SectionContent>
               </SectionBorder>
            </div>
        </section>
    )
}

export default Pricing