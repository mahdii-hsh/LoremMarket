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
        <div className='container-fluid  bg-gradient-to-b from-white to-blue-50 rounded-3xl'>
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <MenuBoard className='size-12 mt-8 mr-6 flex bg-slate-100 p-3 rounded-xl' variant="Outline" />
                </div>
                <div className='col-span-2 content-center mt-8' style={{ fontFamily: "vazirBold" }}>
                    <span className='text-blue-500'>برترین</span> دسته بندی ها
                </div>
            </div>
            <div className="grid grid-cols-12 w-full p-6">
                {/* Fixed column (not scrollable) */}

                {/* Scrollable columns container */}
                <div className="col-span-12 overflow-x-auto [scrollbar-width:none]">
                    <div className="inline-grid grid-cols-5 gap-4 min-w-max">
                        {categories.map((item) => (
                            <div key={item.title} className='group w-52 h-72 justify-center bg-white border-blue-100 border rounded-xl'>

                                <div className=' justify-center flex mt-10 '>
                                    <img src={item.imgSrc} alt="" className='w-2/3 flex grayscale transition-all duration-300 ease-in-out group-hover:w-1/2 group-hover:grayscale-0' />
                                </div>

                                <div className='justify-center flex text-xl mt-6 cursor-pointer' style={{ fontFamily: "vazirExtraLight" }}>{item.title}</div>

                                <span className='opacity-0 mt-20 group-hover:opacity-100 text-xs flex text-center px-2 group-hover:mt-11 rounded-xl text-blue-600 duration-700' style={{ fontFamily: "vazirBold" }}>بیش از هزاران محصول با کیفیت ایرانی و خارجی
                                </span>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
