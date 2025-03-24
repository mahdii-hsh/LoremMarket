"use client"
import React, { createContext, useContext, useState } from "react";

type CartContextType = {
    children: React.ReactNode
}

type CartItemType = {
    id: string,
    qty: number
}

type ContextCartItemType = {
    cartItems: CartItemType[],
    handleAddProductQty: (id: string) => void
    handleDecreaseProductQty: (id: string) => void,
    handleDeleteProductQty: (id: string) => void
    getProductQty: (id: string) => number
    getTotalQty: number
}

const CartShoppingContext = createContext({} as ContextCartItemType)

export const useCartShoppingContext = () => {
    return useContext(CartShoppingContext)
}



export function CartShoppingContextProvider({ children }: CartContextType) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    const handleAddProductQty = (id: string) => {
        setCartItems((currItem) => {
            let isProductExist = currItem.find(item => item.id === id) != null

            if (!isProductExist) {
                return ([...cartItems, { id: id, qty: 1 }])
            }
            else {
                return (
                    currItem.map(item => {
                        if (item.id == id) {
                            return {
                                ...item,
                                qty: item.qty + 1
                            }
                        }
                        else {
                            return item
                        }
                    })
                )
            }
        })
    }

    const handleDecreaseProductQty = (id: string) => {
        setCartItems(currItem => {
            let isLastProduct = cartItems.find((item) => item.id == id)?.qty == 1
            if (isLastProduct) {
                return (
                    currItem.filter((item) => item.id !== id)
                )
            }
            else {
                return (
                    currItem.map((item) => {
                        if (item.id == id) {
                            return {
                                ...item,
                                qty: item.qty - 1
                            }
                        }
                        else return item
                    }
                    )
                )
            }
        }
        )
    }

    const handleDeleteProductQty = (id: string) => {
        setCartItems(currItem => {
            return currItem.filter(item => item.id != id)
        })
    }

    const getProductQty = (id: string) => {
        return cartItems.find((item) => (item.id == id))?.qty || 0
    }

    const getTotalQty = cartItems.reduce((totalQty, item) => {
        return totalQty + item.qty
    }, 0)

    return (
        <CartShoppingContext.Provider value={{ cartItems, handleAddProductQty, handleDecreaseProductQty, handleDeleteProductQty, getProductQty, getTotalQty }}>
            {children}
        </CartShoppingContext.Provider>
    )
}