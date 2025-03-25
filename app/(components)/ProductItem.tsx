import { HeartAdd, Hierarchy3, HierarchySquare } from "vuesax-icons-react"

type TSpecs = {
    comfort: string,
    material: string,
    weight: string
}
export type TProductItem = {
    id: number,
    name: string,
    category_id: number,
    price: number,
    in_stock: true,
    images: string[],
    description: string,
}
const replaseAt = (str: string, index: number, replaceStr: string): string => {
    return str.substring(0, index) + replaceStr + str.substring(index + 1)
}
const convertPersianNum = (num: number): string => {

    let strNumber = num.toString()
    for (let index = 0; index < strNumber.length; index++) {
        let element = strNumber[index];
        switch (element) {
            case "0":
                strNumber = replaseAt(strNumber, index, "۰")
                break;
            case "1":
                strNumber = replaseAt(strNumber, index, "۱")
                break;
            case "2":
                strNumber = replaseAt(strNumber, index, "۲")
                break;
            case "3":
                strNumber = replaseAt(strNumber, index, "۳")
                break;
            case "4":
                strNumber = replaseAt(strNumber, index, "۴")
                break;
            case "5":
                strNumber = replaseAt(strNumber, index, "۵")
                break;
            case "6":
                strNumber = replaseAt(strNumber, index, "۶")
                break;
            case "7":
                strNumber = replaseAt(strNumber, index, "۷")
                break;
            case "8":
                strNumber = replaseAt(strNumber, index, "۸")
                break;
            case "9":
                strNumber = replaseAt(strNumber, index, "۹")
                break;

            default:
                break;
        }

    }
    return strNumber

}

const comoPrice = (str: string): string => {
    for (let index = str.length - 4; index >= 0; index = index - 3) {
        str = replaseAt(str, index, str[index] + ",")
    }

    return str
}
export default function ProductItem({ product }: { product: TProductItem }) {
    console.log(product)
    return (
        <div className='w-full  relative rounded-xl text-center border border-blue-100 h-72 content-center px-2'>
            <HeartAdd className="absolute bg-blue-100 p-1 size-7 transition-all duration-300 delay-75 hover:bg-white hover:border hover:border-blue-100 hover:text-blue-600  rounded-full cursor-pointer top-3 start-5" />

            <Hierarchy3 className="absolute bg-blue-100 p-1 size-7 transition-all duration-300 delay-75 hover:bg-white hover:border hover:border-blue-100 hover:text-blue-600  rounded-full cursor-pointer top-3 start-1/4" />

            {/* {product.images.map()} */}
            <div className="size-32 inline-flex justify-center rounded-xl bg-blue-50 items-center cursor-pointer mt-8">
                <img src={product.images[0]} alt="" className="w-5/6 transition-all duration-300 hover:w-full hover:rotate-3 " />
            </div>
            <p style={{ fontFamily: "vazirMeduim" }} className="text-xs mb-4 mt-8 pb-3 border-b border-blue-50">
                {product.name}
            </p>
            <p style={{ fontFamily: "vazirMeduim" }} className="text-blue-600 text-sm ">{comoPrice(convertPersianNum(product.price))} <span className="text-xs">تومان</span></p>
        </div>
    )
}
