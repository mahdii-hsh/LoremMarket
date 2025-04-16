import Link from 'next/link'
import React from 'react'
import { CallAdd, CallCalling, CallReceived, ClipboardTick, Link1, Location, SecurityUser, TruckTime } from 'vuesax-icons-react'

export default function Footer() {

    type TIcon = {
        Component: React.ReactNode,
        txtPersian: string,
        txtEnglish: string
    }
    type TLink = {
        title: string,
        href: string
    }
    type TAppDownload = {
        title: string,
        imgSrc: string
    }

    const icons: TIcon[] = [
        {
            Component: CallAdd,
            txtPersian: "پشتیبانی ۲۴ ساعته",
            txtEnglish: "Support"
        }, {
            Component: TruckTime,
            txtPersian: "ارسال رایگان",
            txtEnglish: "Free shipping"
        },
        {
            Component: ClipboardTick,
            txtPersian: " کیفیت بالا",
            txtEnglish: "High quality"
        },
        {
            Component: SecurityUser,
            txtPersian: "حریم خصوصی",
            txtEnglish: "Privacy"
        }
    ]
    const usefullLinks: TLink[] = [
        {
            title: "دسته بندی ها",
            href: ""
        },
        {
            title: "حساب کاربری من",
            href: ""
        },
        {
            title: "سبد خرید",
            href: ""
        },
        {
            title: "فروشگاه",
            href: ""
        }
    ]

    const appDownloadIcons: TAppDownload[] = [
        {
            title: "کافه بازار",
            imgSrc: "/icons/bazaar-icon.webp"
        },
        {
            title: "مایکت",
            imgSrc: "/icons/myket.png"
        },
        {
            title: "فروشگاه play",
            imgSrc: "/icons/playstore.svg"
        }
    ]

    return (
        <div className='container bg-blue-500 rounded-3xl overflow-hidden '>
            <div className='relative grid grid-cols-12 content-center bg-blue-500 rounded-3xl h-28 2xl:p-4'>
                {/* <div className='absolute w-full bg-white bg-opacity-15 h-32 -top-16 -rotate-3'></div> */}
                {
                    icons.map((item: TIcon) => (
                        <div key={item.txtEnglish} className="2xl:col-span-2 flex p-1 content-center ">
                            <item.Component variant='Bulk' className='text-white 2xl:size-12 p-1 rounded-2xl animate-bounce' />

                            <span className='text-white text-xs content-center 2xl:ps-2' style={{ fontFamily: "vazirExtraBold" }}>
                                {item.txtPersian}
                                <span className='text-white text-xs block 2xl:mt-1' style={{ fontFamily: "vazirRegular" }}>{item.txtEnglish}</span>

                            </span>
                        </div>
                    ))
                }

                <div className='col-span-4 2xl:px-16'>
                    <div style={{ fontFamily: "vazirBold" }} className='text-xl text-end text-white'> ۰۰۰ ۰۰۰ ۹۱ ۹۸ <CallCalling variant="Bold" className='inline p-1 size-8 2xl:mb-1 ' /></div>
                    <div className='text-blue-500 bg-white rounded-xl h-15 text-center' style={{ fontFamily: "vazirExtraBold" }}>info@yourwebsite.com</div>
                </div>
            </div>

            <div className='grid grid-cols-12 bg-white h-96 rounded-3xl'>
                <div className='col-span-6 2xl:p-4'>
                    <div style={{ fontFamily: "vazirBold" }} className=' rounded-3xl text-start content-center text-sm border border-b-2 2xl:h-10 2xl:p-2 2xl:ps-4'>
                        درباره ما
                        <span className='text-end 2xl:ms-52 2xl:ps-3 text-blue-500 border-s border-opacity-15'>همه چیز درباره ی فروشگاه لورم</span>
                    </div>
                    <div></div>

                    <div className='2xl:mt-12  content-center'>
                        <Location variant='Outline' className='text-blue-500 inline 2xl:size-7' />
                        <span style={{ fontFamily: "vazirBold" }} className='2xl:ms-4'>تهران – خیابان پاسداران – فرعی ۱۲ – پلاک صفر</span>

                        <p className='text-justify text-sm 2xl:mt-6 ' style={{ fontFamily: "vazirLight", lineHeight: "24px" }}><b>  لورم ایپسوم</b>  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <b>صنعت چاپ</b> و با استفاده از طراحان گرافیک است.</p>
                    </div>
                </div>
                <div className='2xl:col-span-2 2xl:ms-4'>
                    <p className='text-sm 2xl:mt-6' style={{ fontFamily: "vazirBold" }}> <Link1 className='inline' /> لینک های کاربردی </p>
                    <ul>
                        {usefullLinks.map((item: TLink) => (
                            <li key={item.title} className='2xl:ms-3 2xl:my-3 text-sm hover:text-blue-500 border-s border-opacity-10' style={{ fontFamily: "vazirLight" }}>
                                <Link href={item.href} className='2xl:ps-1'>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* e-namd icon*/}
                <div className='2xl:col-span-4 2xl:ms-4 '>
                    <div className='flex justify-center 2xl:mt-6'>
                        <p style={{ fontFamily: "vazirRegular", wordSpacing: "1px" }} className='2xl:text-sm '>می توانید به ما  <b > اعتماد </b>  کنید </p>
                    </div>
                    <div className='flex justify-center gap-3 2xl:mt-9'>
                        <div className='flex border w-1/3 rounded-3xl border-b-4 border-blue-100'>
                            <img src="/img/enamad.png" alt="e-namd" className=' object-contain border' />
                        </div>
                        <div className='flex border w-1/3 rounded-3xl border-b-4 border-blue-100'>
                            <img src="/img/samandehi.png" alt="samandehi" className='object-contain border' />
                        </div>
                    </div>
                </div>

                {/* app download */}
                <div className='2xl:col-span-6 2xl:ps-4'>
                    <p style={{ fontFamily: "vazirBold" }}>اپ ما را دانلود کنید</p>
                    <p style={{ fontFamily: "vazirRegular" }} className='text-sm'>اپ ما را برای همیشه در <b>موبایل</b> خود داشته باشید</p>
                </div>
                <div className='2xl:col-span-6 '>
                    {appDownloadIcons.map((item: TAppDownload) => (
                        <div key={item.imgSrc} className='inline-block content-center 2xl:w-36 2xl:h-10 2xl:mx-2 2xl:px-2 bg-blue-50 rounded-xl'>
                            <div className='flex w-full h-full content-center 2xl:py-1'>
                                <div style={{ fontFamily: "vazirRegular" }} className='w-3/4 h-full content-center'>{item.title}

                                </div>
                                <div className='w-1/4 h-full content-center'>

                                    <img src={item.imgSrc} alt="" className='object-contain ' />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
