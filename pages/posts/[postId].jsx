import DefaultLayout from "../../layouts/defaultLayout/DefaultLayout";
import Image from 'next/image';
import Author from "../../components/_children/Author";
import RelatedPost from "../../components/_children/RelatedPost";
import getPost from "../../utils/fetchData";
import fetcher from "../../libs/swr/fetcher";
import Spinner from "../../components/_children/Spinner";
import Error from "../../components/_children/Error";
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';

export default function Page({fallback}) {

    const router = useRouter();
    // console.log(router.query.postId);
    const { postId } = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error>{isError}</Error>

    return (
        <SWRConfig value={{fallback}}>
            <Article {...data}/>
        </SWRConfig>
    )
}

function Article({ title, img, subtitle, author, description }) {

    return (
        <>
            <DefaultLayout title="Posts Page">
                <section className="container mx-auto md:px-20 py-16 w-8/12">
                    <div className="flex justify-center">
                        { author ? <Author { ...author}/> : <></>}
                    </div>
                    <div className="py-10">
                        <h2 className="text-4xl font-bold italic text-center mb-6 leading-[50px]">{title || "Null"}</h2>
                        <p className="text-gray-500 font-medium text-xl text-center leading-8">{subtitle || "Null"}</p>
                    </div>
                    <div className="mt-5 mb-10">
                        <Image 
                            src={img || "/"}
                            width={900} height={600}
                            objectFit="cover"
                            alt="Image Post"
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 text-lg leading-8">
                        <p>{description || "Null"}</p>
                    </div>

                    {/* RelatedPost Component */}
                    <RelatedPost/>
                </section>
            </DefaultLayout>
        </>
    )
}


export async function getServerSideProps({params}) {
    const posts = await getPost(params.postId);

    return {
        props: {
            fallback: {
                '/api/posts' : posts
            }
        }
    }
}

// export async function getStaticPaths() {
//     const posts = await getPost();

//     const paths = posts.map(item => {
//         return {
//             params: {
//                 postId: item.id.toString()
//             }
//         };
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }