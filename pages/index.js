import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="text-white">
            <Head>
                <title>D_Agency</title>
                <meta name="description" content="Developer DAO's Agency"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                body component goes here
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
