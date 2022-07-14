
import Head from 'next/head';
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function DefaultLayout({title, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="https://res.cloudinary.com/nam290596/image/upload/v1657717812/blog-website/cropped-blog-by-number-favicon_apg1v3.png" />
            </Head>

            {/* Component Header  */}
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}
