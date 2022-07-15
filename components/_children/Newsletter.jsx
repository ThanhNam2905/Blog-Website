

export default function Newseletter() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto md:px-20 py-16 text-center">
                <h2 className="heading__2">Subscribes Newseletter</h2>
                <div className="my-4">
                    <input type="text" className="w-8/12 shadow-md border-2 border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Enter your email..." />  
                </div>
                <button className="bg-orange-400 px-16 py-4 rounded-lg text-gray-50 text-[22px] mt-4 font-semibold cursor-pointer hover:shadow-lg hover:shadow-orange-500 hover:bg-orange-600 hover:text-gray-200">Subscribe</button>
            </div>
        </section>
    )
}
