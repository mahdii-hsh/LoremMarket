import { Mobile, TicketDiscount } from 'vuesax-icons-react'
import ScrollBtn from '../CLickEvent/ScrollBtn'
import { TProductItem } from '../ProductItem'
import { randomInt } from 'crypto'
import DiscountProductItem from './DiscountProductItem'

export default async function LastDiscount() {

  const data = await fetch("http://localhost:3001/products")
  const products = await data.json()
  // let discountProduct = []
  // for (let index = 0; index < 7; index++) {
  //   let randId = randomInt(10)
  //   discountProduct.push(products[randId])
  // }
  const discountProduct = products.filter((item: TProductItem) => (
    item.category_id === 3
  ))
  // const discountProduct = products
  return (
    <div className='container my-6'>
      <div className='grid grid-cols-12 h-40'>
        <div className='container col-span-4 rounded-s-3xl relative bg-white border-e-2 border-dashed border-blue-50'>
          <div className='rounded-full size-10 bg-blue-50 absolute -end-5 -top-5'></div>
          <div className='rounded-full size-10 bg-blue-50 absolute -end-5 -bottom-5'></div>
          <span className='absolute bottom-5 w-1 h-7 rounded-e bg-blue-500 inline-flex shadow-lg shadow-blue-400'>
          </span>
          <div className='absolute bottom-5 start-2 rounded text-sm content-center' style={{ fontFamily: "vazirMeduim" }}>
            <span className='text-blue-600'>تا ۳۰٪ تخفیف</span>
          </div>
          <div className="grid grid-cols-7 h-1/2 content-center">
            <div className='col-span-2 justify-center'>
              <TicketDiscount className=' justify-center size-12 xl:size-14 2xl:size-12 xl:ms-8 2xl:mt-5  bg-blue-50 p-3 rounded-xl' variant="Outline" />
            </div>
            <div className='col-span-5 content-end  ms-0 sm:ms-3 lg:ms-0 xl:ms-0 lg:text-lg xl:text-xl 2xl:text-lg' style={{ fontFamily: "vazirBold" }}>
              پیشنهادات شگفت انگیز
              <span className='block text-sm' style={{ fontFamily: "vazirLight" }}>بهترین ها را از ما بخواهید</span>
            </div>
          </div>

          <div className="grid grid-cols-7">
            <div className="col-span-full justify-end flex 2xl:me-7 ">
              <ScrollBtn scrollBarId='discountScrollBar' />
            </div>
          </div>

        </div>
        <div className=" col-span-8 rounded-e-3xl overflow-x-auto overflow-y-hidden [scrollbar-width:none] content-center bg-white " id='discountScrollBar' >
          <div className="grid grid-cols-12 2xl:gap-4 2xl:ms-4 2xl:ps-2 min-w-max ">
            {discountProduct.map((item: TProductItem) => (
              <div key={item.id} className=' size-28 rounded-full '>
                <DiscountProductItem product={item} discount={randomInt(30)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
