import { ArrowCircleLeft, ArrowCircleRight, HomeHashtag, Mobile, ShoppingBag } from 'vuesax-icons-react'
import ProductItem, { TProductItem } from './ProductItem'
import ScrollBtn from './CLickEvent/ScrollBtn'



export default async function LastHomePrd() {

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


    const data = await fetch("http://localhost:3001/products")
    const products = await data.json()

    let electronicPrd = products.filter((item: TProductItem) => {
        return item.category_id === 2
    })

    return (
        <div className='container-fluid rounded-3xl'>
            <div className='grid grid-cols-12 bg-blue-50 pb-9 rounded-3xl'>
                <div className='col-span-1'>
                    <HomeHashtag className='size-12 mt-8 mr-6 flex bg-white p-3 rounded-xl' variant="Outline" />
                </div>
                <div className='col-span-3 content-center mt-8' style={{ fontFamily: "vazirBold" }}>
                    <span className='text-blue-500'>آخرین</span> محصولات خانه و آشپزخانه
                </div>

                <div className='col-start-9 col-span-3 '>
                    <div className='flex justify-end'>
                        <div className='mt-8 me-4 pe-2  flex content-center bg-white hover:bg-blue-500 hover:text-white transition-colors duration-200 delay-75 cursor-pointer rounded-xl'>
                            <ShoppingBag className='size-10 p-2' variant="Outline" />
                            <span className='text-sm content-center' style={{ fontFamily: "vazirLight" }}>مشاهده بیشتر...</span>
                        </div>
                        <ScrollBtn scrollBarId="lastHomeScrollbar"/>
                    </div>


                </div>

            </div>
            <div className="grid grid-cols-12 w-full py-6 px-1 relative">
                {/* Fixed column (not scrollable) */}
                {/* Scrollable columns container */}
                <div className="col-span-12 overflow-x-auto overflow-y-clip [scrollbar-width:none] " id='lastHomeScrollbar'>
                    {/* <div className=' w-1/6 h-full end-0 bg-gradient-to-r from-blue-50 to-transparent absolute'></div> */}
                    <div className="inline-grid grid-cols-12 gap-4 min-w-max">
                        {electronicPrd.map((item: TProductItem) => (
                            <ProductItem key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
