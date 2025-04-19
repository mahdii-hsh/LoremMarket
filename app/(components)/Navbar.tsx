"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { useCartShoppingContext } from '../context/CartShoppingContext';
import React from 'react';
import { ShoppingCart, LikeShapes, HambergerMenu, Global, Buildings, Menu, User, Shop } from 'vuesax-icons-react';
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
        <div className='container-fluid relative  '>

            <div className='grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 bg-blue-50 p-3 lg:py-8'>
                <h1 className='col-span-2 lg:col-span-2 text-lg lg:text-center md:text-xl content-center' style={{ fontFamily: "vazirBold" }}>فروشگاه لورم</h1>
                <div style={{ fontFamily: "vazirMedium" }} className='hidden text-lg lg:block lg:col-span-2 bg-blue-600 rounded-2xl content-center text-white px-4 mx-4 '>
                    <span>دسته بندی</span>
                </div>
                <div className='relative col-span-4 sm:col-span-6 lg:col-span-4 transition-all duration-200'>

                    <input type="text" placeholder='جستجوی محصولات ...' style={{ fontFamily: "vazirLight" }} className=' w-full h-16 lg:h-14 rounded-2xl px-3 md:text-lg' />
                    <CiSearch className='absolute text-blue-600 text-3xl bottom-4 lg:bottom-3 left-3' />

                </div>
                {/* shopping cart */}
                <div className='hidden lg:flex lg:col-span-4 content-center justify-center '>

                    <div className='relative'>
                        <Shop className='size-10 content-center lg:mt-2 flex  outline outline-8 bg-blue-600 text-white outline-blue-200 rounded-full p-2' />
                        <div className='absolute size-5 bg-white content-center text-center justify-center rounded-full top-5 -right-4'>
                            <div className='text-blue-600 text-xs content-center' style={{ fontFamily: "vazirBold" }}>۱  </div>
                        </div>
                    </div>

                    <Link href="/login" className='lg:ms-6 lg:mt-2'>
                        <User className='relative size-10 z-20  outline outline-8  outline-white content-center inline-block rounded-full bg-blue-50 text-blue-500 p-2 ' />
                        <div style={{ fontFamily: "vazirRegular" }} className='inline-block ms-5 text-xl text-blue-500'>ورود و عضویت</div>

                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-8 p-3 lg:hidden'>
                <Menu className='col-span-3 size-14 bg-white p-4 rounded-2xl content-center' />
                <div className='relative col-span-5 content-center sm:col-start-6 sm:col-span-3'>
                    <div >
                        <User className='relative size-10 z-20  outline outline-8 shadow-xl outline-white content-center inline-block rounded-full bg-blue-50 text-blue-500 p-2 ' />
                        <div style={{ fontFamily: "vazirRegular" }} className='inline-block ms-5 text-xl text-blue-500'>ورود و عضویت</div>

                    </div>

                </div>
            </div>


            {/* <div className="grid grid-cols-9 bg-blue-50 content-center">
                <h1 style={{ fontFamily: "vazirBold" }} className='col-span-3 content-center '>فروشگاه لورم</h1>
                <div className='col-span-6 relative h-10 active:col-span-4'>
                    <CiSearch className='absolute text-gray-500 text-xl top-1 left-1' />

                    <input type="text" placeholder='جستجوی محصولات' className='h-full w-full border-gray-400 rounded-xl pr-3 ' style={{ fontFamily: "vazirExtraLight" }} />
                </div>
                <div className='col-span-9 flex justify-end content-center px-4 '>
                    <ShoppingCart variant="Outline" className='text-blue-700 p-2 transition-all duration-75 delay-75 outline-blue-100 cursor-pointer outline hover:outline-4 w-10 h-full bg-white rounded-full' />
                </div>
                <div className='col-span-10  flex'>
                    <button className='w-36 h-full rounded-xl bg-white flex justify-center items-center' style={{ fontFamily: "vazirLight" }}>
                        عضویت و ورود
                        <img src="/icons/user-square.svg" className=' mr-1' width={20} alt="" />
                    </button>
                </div>
            </div> */}


            {/* <div className="grid grid-cols-10 justify-between h-16 content-center">
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
            </div> */}

        </div>
    )
}

export default Navbar