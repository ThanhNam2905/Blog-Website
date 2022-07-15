import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-50">
            <div className="lg:container lg:mx-auto flex flex-col items-center text-center py-4 sm:flex-row sm:justify-between">
                <div className="w-96 order-2 flex justify-center py-4 sm:order-1 sm:py-0 md:flex-none">
                    <input type="text" className="input-search" placeholder="Search..." />
                </div>
                <div className="shrink w-80 order-1 sm:order-2">
                    <Link href={"/"}>
                        <a className="font-semibold uppercase cursor-pointer text-2xl lg:text-3xl">Design</a>
                    </Link>

                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-x-6">
                        <Link href={"/"}>
                            <a><ImFacebook title="Facebook" className="text-[#888888] w-6 h-6 cursor-pointer" /></a>
                        </Link>
                        <Link href={"/"}>
                            <a><ImTwitter title="Twitter" className="text-[#888888] w-6 h-6 cursor-pointer" /></a>
                        </Link>
                        <Link href={"/"}>
                            <a><ImYoutube title="Youtube" className="text-[#888888] w-6 h-6 cursor-pointer" /></a>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}
