import { Hashtag, Mobile, TicketDiscount, ArrowCircleLeft, DocumentText } from 'vuesax-icons-react'
import ScrollBtn from '../CLickEvent/ScrollBtn'
import { TProductItem } from '../ProductItem'
import { randomInt } from 'crypto'
import BuyerCommentItem, { TReview } from './BuyerCommentItem'

export default async function BuyerCommentList() {

  const data = await fetch("http://localhost:3001/product_reviews")
  const comments = await data.json()

  let randComments: TReview[] = []
  for (let index = 0; index < 3; index++) {
    randComments.push(comments[randomInt(comments.length)])
  }

  return (
    <div className='container my-6'>
      <div className='grid grid-cols-12 2xl:h-56 2xl:gap-x-4'>
        <div className='container col-span-3 rounded-s-3xl relative bg-blue-500 border-e-2 border-dashed border-blue-50'>

          <div className="grid grid-cols-7 content-center">
            <div className='col-span-2 justify-center'>
              <DocumentText className=' justify-center size-12 xl:size-14 2xl:size-12 xl:ms-8 2xl:mt-5  bg-blue-50 p-3 rounded-xl' variant="Outline" />
            </div>
            <div className='col-span-5 content-center  ms-0 sm:ms-3 lg:ms-0 xl:ms-0 2xl:mt-5 2xl:ps-4 lg:text-lg xl:text-xl 2xl:text-sm' style={{ fontFamily: "vazirBold" }}>
              دیدگاه های خریداران
            </div>
            <div className="col-span-full p-4">
              <p className='text-justify text-sm text-white' style={{ fontFamily: "vazirLight" }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
            </div>
            <div className='col-span-full p-4 justify-end content-center'>
              <button className='text-xs rounded-xl bg-white bg-opacity-20 text-white h-8 p-2' style={{ fontFamily: "vazirLight" }}>مشاهده سایر دیدگاه ها
                <ArrowCircleLeft className='inline size-5 ms-1' />
              </button>
            </div>
          </div>


        </div>
        <div className=" col-span-9 rounded-e-3xl content-center " id='discountScrollBar' >
          <div className="grid grid-cols-12 2xl:gap-4 2xl:ms-4 2xl:ps-2 2xl:h-full">
            {comments.map((item: TReview) => (
              <div key={item.id} className=' col-span-4 rounded-full '>
                <BuyerCommentItem comment={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
