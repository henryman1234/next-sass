"use client"
import React from "react"
import AshwinSantiago from "@/app/assets/images/ashwin-santiago.jpg"
import AlecWhitten from "@/app/assets/images/alec-whitten.jpg"
import ReneWells from "@/app/assets/images/rene-wells.jpg"
import MollieMall from "@/app/assets/images/mollie-hall.jpg"
import SectionBorder from "./SectionBorder"
import SectionContent from "./SectionContent"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"


export const testimonials = [
    {
        Quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, architecto a, velit rem pariatur cupiditate non neque sapiente alias ipsum sequi quasi quaerat doloribus ex perferendis accusamus deserunt. Eligendi, perferendis?",
        name: "Ashwin Santiago",
        title: "Operation Manager",
        image: AshwinSantiago
    },
    {
        Quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, architecto a, velit rem pariatur cupiditate non neque sapiente alias ipsum sequi quasi quaerat doloribus ex perferendis accusamus deserunt. Eligendi, perferendis?",
        name: "Alec Whitten",
        title: "Lead Developer",
        image: AlecWhitten
    },
    {
        Quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, architecto a, velit rem pariatur cupiditate non neque sapiente alias ipsum sequi quasi quaerat doloribus ex perferendis accusamus deserunt. Eligendi, perferendis?",
        name: "Rene Wells",
        title: "Custom Success Manager",
        image: ReneWells
    },
    {
        Quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, architecto a, velit rem pariatur cupiditate non neque sapiente alias ipsum sequi quasi quaerat doloribus ex perferendis accusamus deserunt. Eligendi, perferendis?",
        name: "Mollie Mall",
        title: "Product Designer",
        image: MollieMall
    },


]

const SELECTED_TESTIMONIALS_INDEX = 0;

const Testimonials = function () {
    return (
        <section>
            <div className="container testimonials-container mx-auto">
                <SectionBorder borderTop className="pt-8">

                    <SectionContent className="px-5 md:px-10 lg:px-20">

                        <div className="border-gradient rounded-3xl px-6 md:px-10 md:flex-row items-center py-16 relative flex flex-col gap-10 lg:py-20">

                            <FontAwesomeIcon icon={faQuoteLeft} className="absolute !size-[80px] top-0  text-violet-400 left-6 md:left-10 lg:left-16 "/>
                            
                            {testimonials.map(function(item, index){
                                return (
                                    <React.Fragment key={item.name}>
                                        {
                                            SELECTED_TESTIMONIALS_INDEX === index && (
                                                <blockquote  key={item.name} className="flex flex-col gap-10 lg:flex-row mt-3">
                                                    <p className="font-medium text-lg ">{item.Quote}</p>
                                                    {/* Contient les informations à chaque citation */}
                                                    <cite className="not-italic lg:text-right">
                                                        <Image src={item.image} alt={item.name} className="rounded-xl size-28 max-w-none"/>
                                                        <div className="font-bold mt-4">{item.name}</div>
                                                        <div className="text-sm text-gray-400 mt-1">{item.title}</div>
                                                    </cite>
                                                </blockquote>
                                            )
                                        }
                                    </React.Fragment>
                                )
                            })}
                            <div className="flex items-center flex-row md:flex-col justify-center gap-2">
                                {testimonials.map(function(item, index){
                                    return (
                                        <div key={item.name} className="size-6 relative isolate inline-flex justify-center items-center ">
                                            {SELECTED_TESTIMONIALS_INDEX === index && (
                                                <div className="border-gradient size-full !absolute rounded-full -z-10"></div>
                                            )}
                                            <div className="size-1.5 bg-gray-200 rounded-full"></div>
                                        </div>
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

export default Testimonials