"use client"
import { ArrowCircleLeft, MenuBoard } from 'vuesax-icons-react'


export default function BestCategories() {

    const categories = [
        {
            title: "کالای دیجیتال",
            imgSrc: "/img/DigitalCategory.jpg"
        },
        {
            title: "آرایشی و بهداشتی",
            imgSrc: "/img/BehdashtCategory.jpg"
        },
        {
            title: "خانه و آشپزخانه",
            imgSrc: "/img/HomeCategory.jpg"
        },
        {
            title: "مد و پوشاک",
            imgSrc: "/img/PooshakCategory.jpg"
        },
        {
            title: "ورزش و سفر",
            imgSrc: "/img/VarzeshCategory.jpg"
        }
    ]
    return (
        <div className='container-fluid bg-gradient-to-b from-white to-blue-50 rounded-3xl'>
            <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-12'>
                <div className='col-span-1'>
                    <MenuBoard className='size-12 xl:size-14 2xl:size-12 mt-8 ms-6 xl:ms-10 flex bg-slate-100 p-3 rounded-xl' variant="Outline" />
                </div>
                <div className='col-span-3 2xl:col-span-2 content-center ms-3 lg:ms-0 xl:ms-4 mt-8 lg:text-lg xl:text-xl 2xl:text-lg' style={{ fontFamily: "vazirBold" }}>
                    <span className='text-blue-500 '>برترین</span> دسته بندی ها
                </div>
            </div>
            <div className="grid grid-cols-12 w-full p-6">

                <div className="col-span-12 overflow-x-auto overflow-y-clip [scrollbar-width:none]" >
                    <div className="inline-grid grid-cols-5 gap-4 min-w-max ">
                        {categories.map((item) => (
                            <div key={item.title} className='group w-36 h-48 md:w-40 md:h-52 xl:w-48 xl:h-60 2xl:w-44 2xl:h-64 justify-center bg-white border-blue-100 border rounded-xl'>

                                <div className=' justify-center flex mt-10 '>
                                    <img src={item.imgSrc} alt="" className='w-2/3 flex grayscale transition-all duration-300 ease-in-out group-hover:w-1/2 group-hover:grayscale-0' />
                                </div>

                                <div className='justify-center flex text-lg 2xl:text-xl  2xl:mt-6 cursor-pointer' style={{ fontFamily: "vazirExtraLight" }}>{item.title}</div>

                                <span className='opacity-0 mt-10 group-hover:opacity-100 text-xs flex text-center px-2 group-hover:mt-3 md:group-hover:mt-4 xl:group-hover:mt-8 rounded-xl text-blue-600 duration-700' style={{ fontFamily: "vazirBold" }}>بیش از هزاران محصول با کیفیت ایرانی و خارجی
                                </span>


                            </div>
                        ))}


                    </div>
                </div>
            </div>

        </div>
    )
}
