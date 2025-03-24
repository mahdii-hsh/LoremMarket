"use client"
import { useEffect } from 'react'
import { useCartShoppingContext } from '../context/CartShoppingContext'
import CardItem from './(CardItem)'
import { TProductObject } from '../products/page'

export default function cartPage() {

    const { cartItems } = useCartShoppingContext()

    var data: TProductObject[] = []

    useEffect(() => {
        cartItems.forEach(async (item) => {
            let response = await fetch(`http://localhost:3001/pruducts/${item.id}`)
            console.log(await response.json(), "ddd")
            data.push(await response.json())
        })
    }, [1])

    console.log(data)
    return (
        <div className='container col-span-full'>
            <div className="grid grid-cols-12">
                <CardItem id='' />

                <div className='col-start-4 col-span-6 bg-slate-300 my-10 shadow'>
                    <h2 className='text-center text-xl border-b '>Total Price : $80</h2>
                    <h2 className='text-center text-xl border-b '>Total Price : $80</h2>
                    <h2 className='text-center text-xl border-b '>Total Price : $80</h2>

                </div>

            </div>
        </div>
    )
}
