"use client"
import './BigSlider.module.css'
import { useEffect, useState } from "react"
import { ArrowLeft2, ArrowRight2 } from "vuesax-icons-react"

type TSlide = {
  key: number,
  srcImg: string
}
export default function BigSlider({ slides }: { slides: string[] }) {
  const [progress,setProgress] = useState(0)
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState<TSlide[]>([])
  const prevSlide = (): void => {
    if (index - 1 >= 0) {
      setIndex(index - 1)
    }
  }
  const nextSlide = (): void => {
    document.getElementById('slide')?.style 
    if (index + 1 < images.length) {
      setIndex((index + 1) % images.length)
    }
  }


  useEffect(() => {
    setImages(slides.map((item, index) => {
      return { srcImg: item, key: index }
    }))
  }, [])

  if (images.length === 0) return <div>Loading...</div>
  setTimeout(() => {
    if (index+1 == images.length) {
      setIndex(0)
    } else {
      nextSlide()
    }
  }, 2000);
  return (
    <div className='relative h-72 rounded-3xl bg-current mt-6'>

      <ArrowLeft2 className={` absolute bg-white 2xl:end-8 2xl:bottom-4 2xl:size-7 mt-8 inline  p-1 rounded-full cursor-pointer hover:text-white hover:bg-black transition-all duration-200 delay-75 ${index == 0 ? "opacity-50 cursor-default hover:text-black hover:bg-white" : ""}`} variant="Outline" onClick={prevSlide} />

      <ArrowRight2 className={` absolute bg-white 2xl:end-16 2xl:bottom-4 2xl:size-7 inline  p-1 rounded-full cursor-pointer hover:text-white hover:bg-black transition-colors duration-200 delay-75 ${index == images.length - 1 ? "opacity-50 cursor-default hover:text-black hover:bg-white" : ""}`} variant="Outline" onClick={nextSlide} />

      <div className={`absolute h-2 bg-red-400 w-${progress} `} style={{
        width : progress+"px"
      }}></div>
      

      <div className='object-cover w-full h-full  overflow-hidden rounded-3xl'>
        <img src={images[index].srcImg} id='slide' className={` object-cover w-full h-full rounded-3xl transition-all duration-150 delay-150 ease-in-out `} />
      </div>


    </div>
  )
}
