import Image from "next/image"
import Link from "next/link"
import Author from "./_children/Author"
import fetcher from "../libs/swr/fetcher";
import Spinner from "./_children/Spinner";
import Error from "./_children/Error";

export default function LatestPost() {

    const { data, isLoading, isError } = fetcher('api/posts');
    // console.log(data);
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
        <section className="container mx-auto py-10 md:px-20">
            <h2 className="heading__2">Latest Post</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
                {
                    data && data.map((item, index) => {
                        return (
                            <PostItem post={item} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

const PostItem = ({post}) => {

    const { id, title, img, subtitle, category, published, author } = post;
    
    if(!post) return null;

    return (
        <div className="item">
            <div className="image">
                <Link href={`posts/${id}`}>
                    <a>
                        <Image
                            src={img || "/"}
                            width={500} height={350}
                            alt='latestPost Image'
                            className='rounded' />
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col ">
                <div>
                    <Link href={`posts/${id}`}>
                        <a className='text-orange-500 hover:text-orange-700'>{category || "Unknown"}</a>
                    </Link>
                    <span className='text-gray-700 hover:text-gray-500'>- {published || "Unknown"}</span>
                </div>
                <div className='title'>
                    <Link href={`posts/${id}`}>
                        <a className='text-xl my-1.5 md:my-2.5 text-gray-800 font-bold hover:text-gray-600'>{title || "Unknown"}</a>
                    </Link>
                </div>  
                <div className="description">
                    <p className='text-gray-500 mt-1.5 leading-7 line-clamp-2 h-16'>{subtitle || "Unknown"}</p>
                </div>  
                {/* Author Components */}
                { author ? <Author { ... author}/> : <> </>}    
            </div>
        </div>
    )
}
