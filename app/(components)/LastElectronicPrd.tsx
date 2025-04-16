import { ArrowCircleLeft, ArrowCircleRight, Mobile, ShoppingBag } from 'vuesax-icons-react'
import ProductItem, { TProductItem } from './ProductItem'
import ScrollBtn from './CLickEvent/ScrollBtn'



export default async function LastElectronicPrd() {



    const data = await fetch("http://localhost:3001/products")
    const products = await data.json()

    let electronicPrd = products.filter((item: TProductItem) => {
        return item.category_id === 1
    })

    return (
        <div className='container-fluid rounded-3xl'>
            <div className='grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 2xl:grid-cols-12 bg-blue-50 pb-9 rounded-3xl'>
                <div className='col-span-1 '>
                    <Mobile className='size-12 xl:size-14 2xl:size-12 mt-8 ms-6 xl:ms-10 flex bg-white p-3 rounded-xl' variant="Outline" />
                </div>
                <div className='col-span-5 md:col-span-2 lg:col-span-3 2xl:col-span-4 content-center mt-8 ms-6 sm:ms-3 lg:ms-0 xl:ms-0 2xl:ms-4 lg:text-lg xl:text-xl 2xl:text-lg' style={{ fontFamily: "vazirBold" }}>
                    <span className='text-blue-500 md:block lg:inline'>آخرین</span> محصولات دیجیتال
                </div>

                <div className='col-span-4 col-start-2 sm:col-start-3 md:col-start-5 lg:col-start-5 2xl:col-start-9 2xl:col-span-3 content-center'>
                    <div className='flex justify-center sm:justify-end 2xl:justify-end'>
                        <div className='mt-8 me-4 pe-2 flex content-center bg-white hover:bg-blue-500 hover:text-white transition-colors duration-200 delay-75 cursor-pointer rounded-xl'>
                            <ShoppingBag className='size-10 p-2' variant="Outline" />
                            <span className='text-sm content-center xl:text-lg 2xl:text-sm' style={{ fontFamily: "vazirLight" }}>مشاهده بیشتر...</span>
                        </div>
                        <ScrollBtn scrollBarId="lastElectronicScrollbar"/>
                    </div>


                </div>

            </div>
            <div className="grid grid-cols-12 w-full py-6 px-1 relative">
                {/* Fixed column (not scrollable) */}
                {/* Scrollable columns container */}
                <div className="col-span-12 overflow-x-auto overflow-y-clip [scrollbar-width:none]" id='lastElectronicScrollbar'>
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
