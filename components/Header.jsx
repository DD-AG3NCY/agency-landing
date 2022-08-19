import Image from "next/image";

const Header = () => {
    return (
        <header>
            <nav className="flex justify-between w-full top-0 pt-8 pb-8">
                <div className="flex md:ml-8 ml-4 mr-20 md:mr-0">
                    <Image src={"/agency-logo.svg"} alt="Developer DAO agency logo" width={182} height={30}></Image>
                </div>
                <div className="flex justify-end flex-grow lg:items-center mr-3">
                    <ul className="flex justify-end items-center">
                        <li className="md:mr-3">
                            <a className="inline-block border-white border-solid border p-1.5 md:p-3 mr-4 whitespace-nowrap text-xxs md:text-sm md:text-lg text-white px-4"
                               href="#">WORK WITH US</a>
                        </li>
                        <li className="mr-4">
                            <a className="inline-block"
                               href="#">
                                <div className="space-y-1">
                                    <div className="w-5 md:w-8 h-0.5 bg-white"></div>
                                    <div className="w-5 md:w-8 h-0.5 bg-white"></div>
                                    <div className="w-5 md:w-8 h-0.5 bg-white"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
