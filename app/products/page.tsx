import React from 'react'
import ProductItem from './ProductItem'

export type TProductObject = {
  id: string,
  title: string,
  price: number,
  description?: string,
  image?: string
}

async function ProductsPage() {

  const data = await fetch("http://localhost:3001/pruducts")

  const products: TProductObject[] = await data.json()

  return (
    <div className='col-span-full container'>
      <div className="grid grid-cols-4 gap-4">
        {products.map((item: TProductObject) => (
          <ProductItem key={item.id} prdItem={item} />
        ))}

      </div>
    </div>
  )
}

export default ProductsPage
