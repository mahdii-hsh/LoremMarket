"use client"
import React from 'react'
import { productObjectType } from './page'
import Link from "next/link"
function showDescription(desc: string | undefined): React.ReactNode {
    if (desc) {
        var result: string = "description : "
        let limmitDesc = desc.substring(0, 35)
        result += limmitDesc
        if (result.length > 36) {
            return result + "..."
        }
        else {
            return ""
        }
    }
}

function ProductItem({ prdItem }: { prdItem: productObjectType }) {
    return (
        <div className='col-span-1 h-72 shadow-md bg-slate-50 rounded-md'>
            <img src={prdItem.image} className="w-full h-36 mb-2 rounded-md" alt="shield" />
            <p className='font-semibold mb-2'>{prdItem.title}</p>
            <span className='block'>Price : ${prdItem.price}</span>
            <div className='text-sm'> {showDescription(prdItem.description)}</div>
            <Link className="bg-green-400 w-16 text-white rounded" href={`/products/${prdItem.id}`} >Purchase</Link>
        </div>
    )
}

export default ProductItem

