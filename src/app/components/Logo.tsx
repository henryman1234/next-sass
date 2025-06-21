import React from "react";
import logoImage from "../assets/images/sphereal-logo.svg"
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type LogoType = HTMLAttributes<HTMLDivElement>

const Logo = function (props: LogoType) {

    const {className, style, ...otherProps} = props
    
    return (
            <div className={twMerge("size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-violet-400))]", className)}
            style={{
            maskImage: `url(${logoImage.src})`,
            maskSize: "contain",
            ...style
            }} {...otherProps}>

        </div>
    )
}

export default Logo