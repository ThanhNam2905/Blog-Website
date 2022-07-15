import Image from 'next/image'
import Link from 'next/link'
import Author from './_children/Author'

export default function BusinessTravelPost() {
    return (
        <section className="container mx-auto py-10 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h3 className="heading__3 underline underline-offset-[5px]">Business</h3>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        { PostItem() }
                        { PostItem() }
                        { PostItem() }
                        { PostItem() }
                    </div>
                </div>
                <div>
                    <h3 className="heading__3 underline underline-offset-[5px]">Travel</h3>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        { PostItem() }
                        { PostItem() }
                        { PostItem() }
                        { PostItem() }
                    </div>
                </div>
            </div>
        </section>
    )
}

const PostItem = () => {
    return (
        <div className="flex gap-x-6">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a>
                        <Image
                            src={"/images/img1.jpg"}
                            width={300} height={300}
                            alt='MusinessTravelPost Image'
                            className='rounded-md'
                            objectFit='contain'/>
                    </a>
                </Link>
            </div>
            <div className="info">
                <div>
                    <Link href={"/"}>
                        <a className='text-orange-500 hover:text-orange-700'>Business, Travel</a>
                    </Link>
                    <span className='text-gray-700 hover:text-gray-500'>- July 14, 2022</span>
                </div>
                <div className='title'>
                    <h3 className='text-xl my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h3>
                </div> 
                {/* Author Components */}
                <Author />   
            </div>
        </div>
    )
}