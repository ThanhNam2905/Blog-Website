// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";

import Link from 'next/link';
import Image from 'next/image';
import Author from './_children/Author';


export default function MostPopularPost() {
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
                    dynamicBullets: true,
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
                className="mySwiper">
                 <SwiperSlide>{PostItem()}</SwiperSlide>
                 <SwiperSlide>{PostItem()}</SwiperSlide>
                 <SwiperSlide>{PostItem()}</SwiperSlide>
                 <SwiperSlide>{PostItem()}</SwiperSlide>
                 <SwiperSlide>{PostItem()}</SwiperSlide>
                 <SwiperSlide>{PostItem()}</SwiperSlide>
            </Swiper>
        </section>
    )
}

const PostItem = () => {
    return (
        <div className="item">
            <div className="image">
                <Link href={"/"}>
                    <a>
                        <Image
                            src={"/images/img1.jpg"}
                            width={650} height={400}
                            className='rounded-md'
                            objectFit='cover'/>
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col ">
                <div>
                    <Link href={"/"}>
                        <a className='text-orange-500 hover:text-orange-700'>Business, Travel</a>
                    </Link>
                    <span className='text-gray-700 hover:text-gray-500'>- July 14, 2022</span>
                </div>
                <div className='title'>
                    <h3 className='text-xl lg:text-[28px] leading-9 my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h3>
                </div>  
                <div className="description">
                    <p className='text-gray-500 mt-1.5 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem quos reprehenderit omnis dignissimos, porro, eaque excepturi reiciendis, accusamus cum ex.</p>
                </div>  
                {/* Author Components */}
                <Author />    
            </div>
        </div>
    )
}
