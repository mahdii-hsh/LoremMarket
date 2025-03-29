import React from 'react'

type TToolTip = {
    children: React.ReactNode,
    text: string,
    styleToolTip: styleToolTip
}

type styleToolTip = {
    backColor: string,
    textColor: string,
    radius: " " | "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full",
    position: "top" | "right" | "bottom" | "left"
}
export default function ToolTip({ children, text, styleToolTip }: TToolTip) {
    return (

        <div className='group transition duration-200 delay-75 relative bg-blue-800'>
            {children}

            <span className={` ${styleToolTip.position + "-1"} inline-block z-10 text-xs py-2 px-4 transition duration-200 delay-75 absolute opacity-0 group-hover:opacity-100 ${styleToolTip.backColor}  ${styleToolTip.textColor} ${styleToolTip.radius == " " ? "rounded" : "rounded-" + styleToolTip.radius}`} style={{ fontFamily: "vazirLight" }}>{text}</span>

        </div>
    )
}