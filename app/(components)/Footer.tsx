import React from 'react'
import { CallReceived } from 'vuesax-icons-react'

export default function Footer() {

    return (
        <div className='container'>
            <div className='relative grid grid-cols-12 border-2 border-blue-50 rounded-3xl h-28'>
                <div className='absolute -top-5 start-20 bg-blue-50 rounded-xl w-1/5 h-8 text-center content-center' style={{fontFamily : "vazirBold"}}>برخی از ویژگی های ما</div>
                <div className='col-span-1'>
                    <CallReceived className='bg-white shadow-xl size-20 p-4 rounded-full '/>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
