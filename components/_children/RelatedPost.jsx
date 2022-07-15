import Author from "../_children/Author";
import Image from "next/image";
import Link from "next/link";

export default function RelatedPost() {
    return (
        <section>
            <h3 className="heading__3 mt-20">Related Post</h3>
            <div className="flex flex-col gap-y-7 mt-2">
                {PostItem()}
                {PostItem()}
                {PostItem()}
            </div>
        </section>
    )
}

const PostItem = () => {
    return (
            <div className="flex gap-x-6">
                <div>
                    <Image
                        src={"/images/img2.jpg"}
                        width={300} height={300}
                        objectFit="cover"
                        alt="Image Post"
                        className="rounded-md"
                    />
                </div>
                <div>
                    <div className="post-link">
                        <Link href={"/"}>
                            <a className='text-orange-500 hover:text-orange-700'>Business, Travel</a>
                        </Link>
                        <span className='text-gray-700 hover:text-gray-500'>- July 14, 2022</span>
                    </div>
                    <div className='title'>
                        <h3 className='text-xl lg:text-[24px] leading-9 my-1 md:my-2 text-gray-800 font-bold hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h3>
                    </div>  
                    {/* Author Components */}
                    <Author /> 
                </div>
            </div>
    )
}