import { cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

export type ButtonProps = Partial<{
  variant: "primary" | "secondary" | "tertiary",
  block: boolean,
  children: React.ReactNode
}> & HTMLAttributes<HTMLButtonElement>

const classes = cva("text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg", {
    variants: {
      block: {
        true: "w-full"
      },
      variant: {
          primary: "border-2 relative border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-violet-400))_border-box]",
          secondary:"bg-gray-100 text-gray-950 font-bold" ,
          tertiary: "bg-gray-800 text-gray-200"
        },
    },

    defaultVariants: {
      variant: "primary",
      block: false
    },

  });

const Button = function (props: ButtonProps) {
    const {className="", children, ...otherProps} = props
    return (
      <button className={classes({...otherProps, className})}>{children}</button>
    )
}

export default Button