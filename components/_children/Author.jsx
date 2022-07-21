import Image from "next/image"
import Link from "next/link"

export default function Author({ name, img, designation }) {
    if(!name && !img && !designation) return null;

    return (
        <div className="author flex py-4 space-x-5">
            <Image 
                src={img || "/"} 
                width={60} height={60} alt="Author"
                className="rounded-full"/>
            <div className="flex flex-col justify-center">
                <Link href={"/"}>
                    <a className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "No name"}</a>
                </Link>
                <span className="text-sm text-gray-500">{designation || "Unknown"}</span>
            </div>
        </div>
    )
}
