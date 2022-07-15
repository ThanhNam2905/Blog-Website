import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Author from './_children/Author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay } from 'swiper';


export default function Banner() {

    const Slide = () => {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="image">
                    <Link href={"/"}>
                        <a>
                            <Image src="/images/img1.jpg"
                                width={600} height={600} 
                                alt='Banner Image'/>
                        </a>
                    </Link>

                </div>
                <div className="info flex flex-col justify-center">
                    <div className='text-base lg:text-xl mb-1.5 lg:mb-3'>
                        <Link href={"/"}>
                            <a className='text-orange-500 hover:text-orange-700'>Business, Travel</a>
                        </Link>
                        <span className='text-gray-700 hover:text-gray-500'>- July 14, 2022</span>
                    </div>
                    <div className='title'>
                        <h3 className='text-3xl md:text-6xl text-gray-800 font-bold hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h3>
                    </div>
                    <div className="description">
                        <p className='text-gray-500 mt-1.5 md:mt-3 py-2 md:py-4 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem quos reprehenderit omnis dignissimos, porro, eaque excepturi reiciendis, accusamus cum ex.</p>
                    </div>

                    {/* Author Components */}
                    <Author />
                </div>
            </div>
        )
    }

    const bgImage = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className='py-16' style={bgImage}>
            <div className='container mx-auto md:px-20'>
                <h2 className='heading__2 pt-2 md:pt-10'>Trending</h2>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
