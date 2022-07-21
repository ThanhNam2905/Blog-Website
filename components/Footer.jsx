import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link';
import Newseletter from "./_children/Newsletter";

export default function Footer() {

    const bg = {
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
    }

    return (
        <footer className="bg-gray-200" style={bg}>
            {/* Newseletter Components */}
            <Newseletter />

            <div className="container mx-auto flex justify-center py-16">
                <div className="py-5">
                    <div className="flex justify-center gap-6">
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
                    <p className="text-gray-800 my-5 text-center">Copyright @ 2022 All rights reserved | This template is made with by Daily Tuition</p>
                    <Link href={"/"}>
                        <a className="text-md block text-center font-bold text-indigo-600 hover:!underline hover:underline-offset-4">Terms and Condition</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
