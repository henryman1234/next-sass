import React from "react";
import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

type SectionContentProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

const SectionContent = function (props:SectionContentProps) {
    return (
        <div className={twMerge("relative mx-auto !container overflow-hidden ",props.className)}>{props.children}</div>
    )
}

export default SectionContent
