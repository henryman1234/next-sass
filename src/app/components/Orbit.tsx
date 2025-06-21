import {twMerge} from "tailwind-merge"
import { HTMLAttributes } from "react"

type OrbitType = HTMLAttributes<HTMLDivElement>

const Orbit = function (props: OrbitType) {
    const {className, children, ...otherProps} = props
    return (
        <div className={twMerge("border border-gray-200/20 rounded-full size-[200px]",className)} {...otherProps}>
            {children}
        </div>
    )
}

export default Orbit