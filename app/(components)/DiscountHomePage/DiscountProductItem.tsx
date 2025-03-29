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

export default function DiscountProductItem({ product, discount }: { product: TProductItem, discount: number }) {

    return (
        <div className=' w-full h-full rounded-3xl bg-gray-50 text-center content-center px-2 cursor-pointer outline outline-0 outline-blue-500 transition duration-150 delay-75 hover:outline-2'>
            <p style={{ fontFamily: "vazirMeduim" }} className="text-xs 2xl:h-1/2 2xl:pt-3">
                {product.name}
            </p>

            <p style={{ fontFamily: "vazirMeduim" }} className="text-gray-400 text-xs content-end">
                <del>{comoPrice(convertPersianNum(product.price))}</del>
            </p>

            <p style={{ fontFamily: "vazirMeduim" }} className="text-blue-600 text-sm ">{comoPrice(convertPersianNum(((100 - discount) / 100) * (product.price)))} <span className="text-xs">تومان</span></p>
            
        </div>
    )
}
