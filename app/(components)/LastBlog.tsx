import { ArrowCircleLeft, ArrowCircleRight, Messages1, Mobile, PenAdd, ShoppingBag, Text, User } from 'vuesax-icons-react'
import ProductItem, { TProductItem } from './ProductItem'
import { randomInt } from 'crypto'

type TBlog = {
    id: number,
    title: string,
    category_id: 1,
    related_products: number[],
    author: string,
    publish_date: string,
    image: string,
    summary: string,
    content: string,
    tags: string[],
    read_time: number,
    comments: string[]
}

export default async function LastBlog() {

    const data = await fetch("http://localhost:3001/articles")
    const blogs = await data.json()

    let randBlogs: TBlog[] = []
    for (let index = 0; index < 3; index++) {
        randBlogs.push(blogs[randomInt(blogs.length)])

    }

    return (
        <div className='container-fluid rounded-3xl'>
            <div className=' grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 2xl:grid-cols-12  pb-2 rounded-3xl'>
                <div className='col-span-1 '>
                    <Text className='size-12 xl:size-14 2xl:size-12 mt-8 ms-6 xl:ms-10 flex bg-white p-3 rounded-xl' variant="Outline" />
                </div>
                <div className='col-span-5 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-4 content-center mt-8 ms-6 sm:ms-3 lg:ms-0 xl:ms-0 2xl:ms-4 lg:text-lg xl:text-xl 2xl:text-lg' style={{ fontFamily: "vazirBold" }}>
                    آخرین های <span className='text-blue-500  lg:inline'> وبلاگ </span> لورم
                </div>

                <div className='col-span-full sm:col-span-3 md:col-span-3 lg:col-start-5 xl:col-span-4 2xl:col-start-8 2xl:col-span-3 content-center md:mt-4'>
                    <div className='flex justify-end sm:justify-center 2xl:justify-end'>
                        <div className='mt-4 2xl:mt-8 me-4 pe-2 flex content-center bg-white hover:bg-blue-500 hover:text-white transition-colors duration-200 delay-75 cursor-pointer rounded-xl'>
                            <PenAdd className='size-10 p-2' variant="Outline" />
                            <span className='text-sm content-center xl:text-lg 2xl:text-sm' style={{ fontFamily: "vazirLight" }}>نوشته های بیشتر...</span>
                        </div>
                    </div>


                </div>

            </div>
            <div className="grid grid-cols-12 px-4 2xl:gap-x-2">
                <div className="col-span-full 2xl:col-span-6 bg-white rounded-3xl 2xl:h-[394] mt-4 container">
                    <div className="grid grid-cols-4 2xl:grid-cols-12 ">
                        <div className=" col-span-full p-4 ">
                            <div className='group relative '>
                                <img src={randBlogs[0].image} className="transition duration-300 delay-100 group-hover:grayscale relative rounded-3xl h-52 lg:h-64 w-full object-cover " alt="" />
                                <div className='absolute top-0 rounded-3xl h-52 lg:h-64 w-full bg-gradient-to-t from-blue-500 to-transparent transition duration-300 delay-100 opacity-0 group-hover:opacity-100'></div>
                                <div className='absolute bottom-5 lg:bottom-7 lg:start-5 start-3 xl:start-5 2xl:bottom-5 2xl:start-4 text-xs sm:text-sm lg:text-base text-white transition duration-300 delay-100 opacity-0 group-hover:opacity-100' style={{ fontFamily: "vazirMedium" }}>{randBlogs[0].summary}</div>
                            </div>
                        </div>
                        {/* title of blog1 */}
                        <div className='col-span-full'>
                            <p className='ps-4 ms-2 lg:ms-4 text-sm sm:text-base lg:text-lg  2xl:ps-4' style={{ fontFamily: "vazirMedium" }}>{randBlogs[0].title}</p>
                        </div>

                        <div className='col-span-full justify-center content-center text-blue-500 ms-4 mt-2 mb-4 2xl:mt-2 2xl:ms-4'>

                            <PenAdd className='size-8 xl:size-10 bg-blue-50 p-1 2xl:p-2 ms-2 lg:ms-4 rounded-xl inline-flex' variant="Outline" />

                            <div className='ms-3 text-xs sm:text-sm lg:text-base 2xl:ms-2 inline-flex' style={{ fontFamily: "vazirMedium" }}>
                                {randBlogs[0].author}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-full 2xl:col-span-6 xl:flex 2xl:block rounded-3xl 2xl:h-80 mt-4 ">
                    {/* blog 2 */}
                    <div className='container bg-white rounded-3xl xl:w-1/2 2xl:w-full h-32 sm:h-36 md:h-40 2xl:h-48 mb-2 xl:me-4 xl:mb-4 2xl:mb-2 content-center'>
                        <div className="grid grid-cols-12 content-center">

                            <div className="col-span-5  px-4 content-center">
                                <div className='group relative '>
                                    <img src={randBlogs[1].image} className="rounded-3xl h-24  sm:h-28 md:h-32 2xl:h-40 w-full object-cover transition duration-300 delay-100 group-hover:grayscale" alt="" />
                                    <div className='absolute top-0 rounded-3xl h-24 sm:h-28 md:h-32  2xl:h-40 w-full bg-gradient-to-t from-blue-500 to-transparent transition duration-300 delay-100 opacity-0 group-hover:opacity-100'></div>
                                    <div className='absolute pe-2 xl:pe-4 bottom-5 start-2 lg:start-4 text-xs lg:text-sm text-white transition duration-300 delay-100 opacity-0 group-hover:opacity-100 text-justify' style={{ fontFamily: "vazirMedium" }}>{randBlogs[1].summary}</div>

                                </div>
                            </div>

                            <div className='col-span-7 px-2 2xl:mt-4 2xl:px-2 content-center'>

                                <p className='col-span-8 text-sm sm:text-base lg:text-lg ' style={{ fontFamily: "vazirMedium" }}>{randBlogs[1].title}</p>

                                <div className='justify-center content-center text-blue-500 mt-2 2xl:mt-2 '>

                                    <PenAdd className='size-8 xl:size-10 bg-blue-50 p-1 2xl:p-2 rounded-xl inline-flex' variant="Outline" />

                                    <div className='ms-3 mt-2 text-xs sm:text-sm lg:text-base  2xl:ms-2 inline-flex' style={{ fontFamily: "vazirMedium" }}>
                                        {randBlogs[1].author}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog 3 */}
                    <div className='container bg-white rounded-3xl xl:w-1/2 2xl:w-full h-32 sm:h-36 md:h-40 2xl:h-48 mb-2 xl:me-4 xl:mb-4 2xl:mb-2 content-center'>
                        <div className="grid grid-cols-12 content-center">

                            <div className="col-span-5  px-4 content-center">
                                <div className='group relative '>
                                    <img src={randBlogs[2].image} className="rounded-3xl h-24  sm:h-28 md:h-32 2xl:h-40 w-full object-cover transition duration-300 delay-100 group-hover:grayscale" alt="" />
                                    <div className='absolute top-0 rounded-3xl h-24 sm:h-28 md:h-32  2xl:h-40 w-full bg-gradient-to-t from-blue-500 to-transparent transition duration-300 delay-100 opacity-0 group-hover:opacity-100'></div>
                                    <div className='absolute pe-2 xl:pe-4 bottom-5 start-2 lg:start-4 text-xs lg:text-sm text-white transition duration-300 delay-100 opacity-0 group-hover:opacity-100 text-justify' style={{ fontFamily: "vazirMedium" }}>{randBlogs[2].summary}</div>

                                </div>
                            </div>

                            <div className='col-span-7 px-2 2xl:mt-4 2xl:px-2 content-center'>

                                <p className='col-span-8 text-sm sm:text-base lg:text-lg ' style={{ fontFamily: "vazirMedium" }}>{randBlogs[2].title}</p>

                                <div className='justify-center content-center text-blue-500 mt-2 2xl:mt-2 '>

                                    <PenAdd className='size-8 xl:size-10 bg-blue-50 p-1 2xl:p-2 rounded-xl inline-flex' variant="Outline" />

                                    <div className='ms-3 mt-2 text-xs sm:text-sm lg:text-base  2xl:ms-2 inline-flex' style={{ fontFamily: "vazirMedium" }}>
                                        {randBlogs[2].author}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
