import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Author from './_children/Author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay, Pagination } from 'swiper';
import fetcher from '../libs/swr/fetcher';
import Spinner from './_children/Spinner';
import Error from './_children/Error';


export default function Banner() {

    const { data, isLoading, isError } = fetcher('api/trending');
    console.log(data);

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    const Slide = ({post}) => {

        const { id, title, img, category, published, author, description } = post;

        return (
            <div className='grid grid-cols-1 gap-x-4 pb-8 md:grid-cols-2'>
                <div className="image">
                    <Link href={`posts/${id}`}>
                        <a>
                            <Image src={img || '/'}
                                width={640} height={600} 
                                alt='Banner Image'
                                objectFit='fill' 
                                className='rounded-md'/>
                        </a>
                    </Link>

                </div>
                <div className="info flex flex-col justify-center">
                    <div className='text-base lg:text-xl mb-1.5 lg:mb-3'>
                        <Link href={`posts/${id}`}>
                            <a className='text-orange-500 hover:text-orange-700'>{category || "Unknown"}</a>
                        </Link>
                        <span className='text-gray-700 hover:text-gray-500'>- {published || "Unknown"}</span>
                    </div>
                    <div className='title'>
                        <Link href={`posts/${id}`}>
                            <a className='text-3xl md:text-[40px] leading-[3.0rem] text-gray-800 font-bold '>{title || "Unknown"}</a>
                        </Link>
                    </div>
                    <div className="description ">
                        <p className='text-gray-800 text-lg leading-7 h-[180px] overflow-y-hidden line-clamp-6 mt-1.5 md:mt-3 py-2 md:py-4'>{description || "Unknown"}</p>
                    </div>

                    {/* Author Components */}
                    { author ? <Author { ...author}/> : <> </>}
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
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="swiper__banner--custom"
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Slide post={item}/>
                            </SwiperSlide>
                        ))
                    }  
                </Swiper>
            </div>
        </section>
    )
}
