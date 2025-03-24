"use client"
import { useCartShoppingContext } from '@/app/context/CartShoppingContext'
import React from 'react'

function QtyClicker({ id }: {id : string}) {
    const { cartItems, handleAddProductQty,handleDecreaseProductQty, handleDeleteProductQty ,getProductQty} = useCartShoppingContext()
    console.log(cartItems)
    return (
        <>
            <button onClick={() => handleAddProductQty(id)} className="bg-blue-400 rounded size-6">+</button>
            <span className="mx-3">{getProductQty(id)}</span>
            <button onClick={() => handleDecreaseProductQty(id)} className="bg-red-400 rounded size-6">-</button>
            <button onClick={() => handleDeleteProductQty(id)} className='bg-slate-200 rounded px-3 h-6 w-20 block my-2 border border-red-400 text-red-500'>Delete</button>

        </>
    )
}

export default QtyClicker