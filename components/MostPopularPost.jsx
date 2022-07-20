// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";

import Link from 'next/link';
import Image from 'next/image';
import Author from './_children/Author';
import fetcher from '../libs/swr/fetcher';
import Spinner from './_children/Spinner';
import Error from './_children/Error';


export default function MostPopularPost() {

    const { data, isLoading, isError } = fetcher('api/popular');

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
        <section className="container mx-auto py-10 md:px-20">
            <h2 className="heading__2">Most Popular</h2>

            <Swiper
                slidesPerView={2}
                spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true
                }}
                grabCursor={true}
                modules={[ Autoplay, Pagination ]}
                // breakpoints={{
                //     0: {
                //         slidesPerView: 1,
                //         spaceBetween: 20,
                //       },
                //     991: {
                //       slidesPerView: 2,
                //       spaceBetween: 60,
                //     },
                // }}
                className="swiper__custom">
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <PostItem post={item}/>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </section>
    )
}

const PostItem = ({post}) => {

    const { id, title, img, category, published, author, description } = post;

    return (
        <div className="item">
            <div className="image">
                <Link href={"/"}>
                    <a>
                        <Image
                            src={img || "/"}
                            width={650} height={400}
                            className='rounded-md'
                            alt='MostPopularPost Image'
                            objectFit='cover'/>
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col ">
                <div>
                    <Link href={"/"}>
                        <a className='text-orange-500 hover:text-orange-700'>{category || "Undefined"}</a>
                    </Link>
                    <span className='text-gray-700 hover:text-gray-500'>- {published || "Undefined"}</span>
                </div>
                <div className='title'>
                    <h3 className='text-xl lg:text-[28px] leading-9 my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>{title || "Undefined"}</h3>
                </div>  
                <div className="description">
                    <p className='text-gray-700 line-clamp-2 mt-1.5 leading-7'>{description || "Undefined"}</p>
                </div>  
                {/* Author Components */}
                { author ? (
                    <div className='pb-8'>
                        <Author { ...author}/>
                    </div>
                ) : <></>}    
            </div>
        </div>
    )
}
