import React from 'react'

interface IContainerProps {
    children: React.ReactNode
}
function Container(props: IContainerProps) {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                {props.children}
            </div>
        </div>
    )
}

export default Container