import Image from 'next/image'
import Link from 'next/link'
import fetcher from '../libs/swr/fetcher'
import Author from './_children/Author'
import Error from './_children/Error';
import Spinner from './_children/Spinner';

export default function BusinessTravelPost() {

    const { data, isLoading, isError } = fetcher('api/popular');

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    return (
        <section className="container mx-auto py-10 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h3 className="heading__3 underline underline-offset-[5px]">Business</h3>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        { data[0] ? <PostItem post={data[0]}/> : "Undefined"}
                        { data[1] ? <PostItem post={data[1]}/> : "Undefined"}
                        { data[2] ? <PostItem post={data[2]}/> : "Undefined"}
                    </div>
                </div>
                <div>
                    <h3 className="heading__3 underline underline-offset-[5px]">Travel</h3>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        { data[3] ? <PostItem post={data[3]}/> : "Undefined"}
                        { data[4] ? <PostItem post={data[4]}/> : "Undefined"}
                        { data[1] ? <PostItem post={data[1]}/> : "Undefined"}
                    </div>
                </div>
            </div>
        </section>
    )
}

const PostItem = ({ post }) => {

    const { id, title, img, category, published, author, description } = post;

    return (
        <div className="flex gap-x-6">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a>
                        <Image
                            src={img || "/"}
                            width={250} height={250}
                            alt='MusinessTravelPost Image'
                            className='rounded-md'
                            objectFit='cover'/>
                    </a>
                </Link>
            </div>
            <div className="info">
                <div>
                    <Link href={"/"}>
                        <a className='text-orange-500 hover:text-orange-700'>{category || "Undefined"}</a>
                    </Link>
                    <span className='text-gray-700 hover:text-gray-500'>- {published || "Undefined"}</span>
                </div>
                <div className='title'>
                    <h3 className='text-xl my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>{title || "Undefined"}</h3>
                </div> 
                {/* Author Components */}
                { author ? <Author { ...author}/> : <></>}   
            </div>
        </div>
    )
}