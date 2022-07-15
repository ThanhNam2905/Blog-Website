import DefaultLayout from "../../layouts/defaultLayout/defaultLayout";
import Image from 'next/image';
import Author from "../../components/_children/Author";
import RelatedPost from "../../components/_children/RelatedPost";


export default function Page() {
    return (
        <>
            <DefaultLayout title="Posts Page">
                <section className="container mx-auto md:px-20 py-16 w-8/12">
                    <div className="flex justify-center">
                        <Author/>
                    </div>
                    <div className="py-10">
                        <h2 className="text-4xl font-bold italic text-center mb-6 leading-[50px]">Your most unhappy customers are your greatest source of learning ",subtitle: " 
                            
                        </h2>
                        <p className="text-gray-500 font-medium text-xl text-center leading-8">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="mt-5 mb-10">
                        <Image 
                            src={"/images/img1.jpg"}
                            width={900} height={600}
                            objectFit="cover"
                            alt="Image Post"
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 text-lg leading-8">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam animi dolor reiciendis explicabo atque unde cupiditate dignissimos.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique amet quas. Quidem odit explicabo quasi, iusto facere laborum quod consequuntur sunt! Neque.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam tempore dolorem perferendis tenetur expedita maiores corporis illum doloribus.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia et architecto consequuntur adipisci at iste enim neque eum blanditiis libero obcaecati nemo, fugiat dolor eveniet repellat, corporis similique beatae? Culpa accusamus nostrum quia.</p>
                    </div>

                    {/* RelatedPost Component */}
                    <RelatedPost/>
                </section>
            </DefaultLayout>
        </>
    )
}
