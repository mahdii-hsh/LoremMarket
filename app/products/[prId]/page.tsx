
import { json } from "stream/consumers";
import QtyClicker from "./QtyClicker"
import { TProductObject } from "../page";

type Props = {
    params: {
        prId: string; // The dynamic segment name (matches the folder name [slug])
    };
};

async function page({ params }: Props) {

    const { prId } = params;
    console.log(prId)

    const response = await fetch(`http://localhost:3001/pruducts/${prId}`)
    const product: TProductObject = await response.json()

    return (
        <div className="container col-span-full">
            <div className="grid grid-cols-12 shadow-lg bg-white-50">
                <div className="col-span-3 pr-2 border-r-2 border-yellow-100">
                    <img src={product.image} alt="" className="h-full w-full" />
                </div>
                <div className="col-span-9 ml-2">
                    <p className='mb-2 font-semibold text-3xl'>{product.title}</p>
                    <span className='block text-lg my-3'>Price : {product.price}$</span>
                    <span className='block mt-3 mb-1 text-sm'><span className="text-gray-600 text-lg">Description : </span>{product.description}</span>

                    <QtyClicker id={prId} />

                </div>

            </div>
        </div>
    )
}

export default page