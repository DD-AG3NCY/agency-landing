import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Image from "next/image";
import {createContext, useState} from "react";
import HomepageMenu from "../components/HomepageMenu";

export const MenuContext = createContext(null);

export default function Home() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="text-white">
            <Head>
                <title>D_Agency</title>
                <meta name="description" content="Developer DAO's Agency"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MenuContext.Provider value={{isOpen, setOpen}}>
                <Header/>
            </MenuContext.Provider>
            <main>
                {isOpen && <HomepageMenu/>}
                {!isOpen &&
                    <div>
                        <div className="flex m-16 lg:pr-128 md:m-28 text-sm md:text-lg">
                            <Body headlineText="WHO WE ARE"
                                  bodyText={<div>D_Agency is a collective venture builder curated from the best talent
                                      within <a
                                          className="underline">DeveloperDAO</a>. By bringing
                                      together the best developers, designers and project managers, we aim to
                                      collectively
                                      build
                                      products and
                                      services for our clients and the web3 space.</div>} bottomText={<a
                                href="#">Find out more about us</a>}/>
                        </div>
                        <div className="relative w-full h-40 md:h-96 lg:h-128 mb-20">
                            <Image src={"/person-writing.png"} alt="Person writing" layout="fill"/>
                        </div>
                        <div className="flex m-8 md:m-28 lg:m-32">
                            <div className="relative w-[60rem] md:w-[80rem] h-72 md:h-96 lg:h-128">
                                <Image src={"/computer-screen.png"} alt="Computer screen" layout="fill"/>
                            </div>
                            <div className="flex ml-4 md:m-14 lg:m-32 text-sm md:text-lg">
                                <Body headlineText="HOW CAN WE HELP YOU?"
                                      bodyText="Our teams are diverse, coming from a range of backgrounds and specialisations. These teams are hand picked from the best that Developer DAO has to offer to meet your project needs."
                                      bottomText={<a
                                          href="#">Find out more about our services</a>}/>
                            </div>
                        </div>
                    </div>
                }
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
