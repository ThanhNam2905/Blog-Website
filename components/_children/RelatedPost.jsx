import Author from "../_children/Author";
import Image from "next/image";
import Link from "next/link";
import fetcher from "../../libs/swr/fetcher";
import Spinner from "./Spinner";
import Error from "./Error";

export default function RelatedPost() {

    const { data, isLoading, isError } = fetcher('api/posts');

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
        <section>
            <h3 className="heading__3 mt-20">Related Post</h3>
            <div className="flex flex-col gap-y-7 mt-2">
                {
                    data.map((item, index) =>(
                        <PostItem key={index} post={item}/>
                    ))
                }
            </div>
        </section>
    )
}

const PostItem = ({post}) => {

    const { id, title, img, category, published, author } = post;

    return (
            <div className="flex gap-x-6">
                <div>
                    <Image
                        src={img || "/"}
                        width={300} height={300}
                        objectFit="cover"
                        alt="Image Post"
                        className="rounded-md"
                    />
                </div>
                <div>
                    <div className="post-link">
                        <Link href={`/posts/${id}`}>
                            <a className='text-orange-500 hover:text-orange-700'>{category || "Null"}</a>
                        </Link>
                        <span className='text-gray-700 hover:text-gray-500'>- {published || "Null"}</span>
                    </div>
                    <div className='title'>
                        <Link href={`/posts/${id}`}>
                            <a className='text-xl lg:text-[24px] leading-9 my-1 md:my-2 text-gray-800 font-bold hover:text-gray-600'>{title || "Null"}</a>
                        </Link>
                        
                    </div>  
                    {/* Author Components */}
                    {
                        author ? <Author { ...author}/> : <></>
                    }
                </div>
            </div>
    )
}