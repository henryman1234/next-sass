import React from "react";
import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

type SectionBorderProps = {
    borderTop?: boolean
}
& HTMLAttributes<HTMLDivElement>

 const SectionBorder = function (props: SectionBorderProps) {

    const {className, borderTop, children, ...otherProps} = props

    return <div className={twMerge("border-l border-r border-[var(--color-border)] relative pb-5", borderTop &&"border-t" ,className)} {...otherProps}>

        {borderTop && <>
            <div className="absolute size-4 text-gray-200 left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200"/>
            </div>
            <div className="absolute size-4 -right-4 -translate-x-1/2 text-gray-200 -translate-y-1/2 top-0">
                <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200"/>
            </div>
        </>}

        {children}

    </div>
}

export default SectionBorder