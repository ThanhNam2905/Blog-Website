import Image from 'next/image';

export default function Error() {
    return (
        <div className='text-center py-10'>
            <h3 className='heading__3 text-orange-600 my-8'>Something Went Wrong</h3>
            <Image 
                src={"/images/not_found.png"} 
                width={400} height={400} 
                alt="Error image"
                objectFit='contain'/>
        </div>
    )
}