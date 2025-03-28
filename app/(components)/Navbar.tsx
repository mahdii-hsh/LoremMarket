"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { useCartShoppingContext } from '../context/CartShoppingContext';
import React from 'react';
import { PiShoppingCart } from "react-icons/pi";
import { ShoppingCart, LikeShapes, ArrowCircleLeft, HambergerMenu, Global, Buildings, Component } from 'vuesax-icons-react';
export interface navLinkType {
    title: string,
    href: string,
    iconSrc: string,
    type: string
}

const iconComponents = {
    menu: HambergerMenu,
    blog: Global,
    best: LikeShapes,
    about: Buildings

}

const handleShowTotalQty = (totalQty: number): React.ReactNode => {
    if (totalQty <= 10) {
        return totalQty.toString()
    }
    else {
        return "+10"
    }
}
function Navbar() {

    const path = usePathname()
    const { getTotalQty } = useCartShoppingContext()
    const navLinks: navLinkType[] = [
        {
            title: "دسته بندی کالاها",
            href: "/",
            iconSrc: `<Play size="32" color="#FF8A65" variant="Outline"/>`,
            type: "menu"
        },
        {
            title: "لورم وبلاگ",
            href: "/products",
            iconSrc: "/icons/menu.svg",
            type: "blog"
        },
        {
            title: "محبوب ترین ها",
            href: "/cart",
            iconSrc: "/icons/menu.svg",
            type: "best"
        },
        {
            title: "درباره ما",
            href: "/about",
            iconSrc: "/icons/menu.svg",
            type: "about"
        },
    ]

    return (
        <div className='container-fluid  rounded content-center '>
            <div className="grid grid-cols-12 bg-blue-50 h-16 content-center">
                <h1 style={{ fontFamily: "vazirBold" }} className='col-start-3 content-center '>فروشگاه لورم</h1>
                <div className='col-start-4 col-span-2 relative h-10 active:col-span-4'>
                    <CiSearch className='absolute text-gray-500 text-xl top-1 left-1' />

                    <input type="text" placeholder='جستجوی محصولات' className='h-full w-full border-gray-400 rounded-xl pr-3 ' style={{ fontFamily: "vazirExtraLight" }} />

                </div>
                <div className='col-start-9 flex justify-end content-center px-4 '>
                    <ShoppingCart variant="Outline" className='text-blue-700 p-2 transition-all duration-75 delay-75 outline-blue-100 cursor-pointer outline hover:outline-4 w-10 h-full bg-white rounded-full' />
                </div>
                <div className='col-start-10 col-span-2 flex'>
                    <button className='w-36 h-full rounded-xl bg-white flex justify-center items-center' style={{ fontFamily: "vazirLight" }}>
                        عضویت و ورود
                        <img src="/icons/user-square.svg" className=' mr-1' width={20} alt="" />
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-10 justify-between h-16 content-center">
                <div className='col-span-2'></div>

                {navLinks.map((item: navLinkType, index) => {
                    let Component = iconComponents[item.type]
                    return (
                        <Link key={item.title} href={item.href}
                            style={{ fontFamily: "vazirLight" }}
                            className={`group col-span-1 flex justify-center text-gray-400 duration-150 delay-75 hover:shadow-blue-300 hover:bg-blue-500 hover:text-white hover:shadow-md rounded-xl items-center h-full ${path === item.href ? "bg-blue-50" : ""}`}>
                            <span className="transition-colors">
                                <Component variant='Outline' className='duration-150 delay-75 inline mx-1 text-sm' />
                                {item.title}
                            </span>
                        </Link>
                    )
                })}

                <span className='ml-4 bg-slate-100 size-8 rounded-lg text-center flex items-center justify-center'>{handleShowTotalQty(getTotalQty)}</span>
            </div>

        </div>
    )
}

export default Navbar