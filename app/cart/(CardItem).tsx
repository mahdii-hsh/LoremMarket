import React from 'react'

type CartIdPropsType = {
    id : string
}

function CardItem({id} : CartIdPropsType) {


    return (
        <div className='grid grid-cols-12 col-span-12 mt-3 bg-slate-50'>
            <img className="col-span-2 " src="https://m.media-amazon.com/images/I/81C+zDr11iL.jpg" alt="" />
            <div className="col-span-10 ml-4">
                <p className='mb-2 font-semibold text-3xl'>Title</p>
                <span className='block text-lg my-3'>Price : $</span>
                <span className='block mt-3 mb-1 text-sm'><span className="text-gray-600 text-lg">Description : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum nisi, vel obcaecati atque aut.</span>

                <button className="bg-blue-400 rounded size-6">+</button>
                <span className="mx-3">8</span>
                <button className="bg-red-400 rounded size-6">-</button>

            </div>
        </div>
    )
}

export default CardItem