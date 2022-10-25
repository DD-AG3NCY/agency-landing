import Image from "next/image";

const Header = () => {
    return (
        <header>
            <nav className="flex text-white flex-row justify-between top-0 pt-8 pb-8">
                <div className="flex md:ml-8 ml-4 mr-2 md:mr-0 min-w-[60px]">
                    <Image src={"/agency-logo.svg"} alt="Developer DAO agency logo" width={80} height={80}></Image>
                </div>
                <div className="flex font-light tracking-widest md:text-sm lg:text-xl text-xs flex-row items-center align-middle gap-4">
                    <div className="hover:text-hero-pink">SERVICES</div>
                    <div className="w-px bg-hero-pink h-1/2"></div>
                    <div className="hover:text-hero-pink">OUR PROJECTS</div>
                    <div className="w-px bg-hero-pink h-1/2"></div>
                    <div className="hover:text-hero-pink">JOIN US</div>
                </div>
                <div className="flex mr-3">
                    <ul className="flex flex-row items-center">
                        <li className="md:mr-3">
                                <a className="inline-block bg-white px-4 py-3 ml-4 md:text-sm md:px-4 md:py-4 lg:px-8 lg:py-3 lg:text-lg border-white border-solid border mr-4 whitespace-nowrap text-xs text-black"
                                   href="#">HIRE US</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
