import Image from "next/image"
import Link from "next/link"
import Author from "./_children/Author"
import getPost from "../utils/fetchData";

export default function LatestPost() {
    
    getPost(3).then(res => console.log(res));

    return (
        <section className="container mx-auto py-10 md:px-20">
            <h2 className="heading__2">Latest Post</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
                {PostItem()}
                {PostItem()}
                {PostItem()}
                {PostItem()}
                {PostItem()}
                {PostItem()}
            </div>
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
                            width={500} height={350}
                            alt='latestPost Image'
                            className='rounded' />
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
                    <h3 className='text-xl my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h3>
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
