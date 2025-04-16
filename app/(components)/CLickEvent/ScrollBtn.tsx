"use client"
import React from 'react'
import { ArrowCircleLeft, ArrowCircleRight } from 'vuesax-icons-react'

const scrollLeft = (id : string) => {
    const elm = document.getElementById(id)
    console.log(elm?.clientWidth)
    // if (elm?.scrollLeft > -elm?.clientWidth) {
        elm?.scrollBy({
            left: -200,
            behavior: "smooth"})
    //     })
    // }
    // else {
    //     elm?.scrollTo(-(elm?.clientWidth+120),0)
    // }
}

const scrollRight = (id : string) => {
    const elm = document.getElementById(id)
    elm?.scrollBy({
        left: +200,
        behavior: "smooth"
    })
}

export default function ScrollBtn({scrollBarId } : {scrollBarId :string}) {
    return (
        <div>
            <ArrowCircleRight className='size-10 mt-8 inline bg-white p-2 rounded-xl cursor-pointer hover:text-blue-500 transition-colors duration-200 delay-75' variant="Outline" onClick={()=>scrollRight(scrollBarId)} />
            <ArrowCircleLeft className='size-10 mt-8  inline bg-white p-2 rounded-xl cursor-pointer hover:text-blue-500 transition-colors duration-200 delay-75' variant="Outline" onClick={()=>scrollLeft(scrollBarId)} />

        </div>
    )
}
