import Image from "next/image";
import {useContext} from "react";
import {MenuContext} from "../pages";

const Header = () => {
    const {isOpen, setOpen} = useContext(MenuContext);

    return (
        <header>
            <nav className="flex flex-row justify-between w-full top-0 pt-8 pb-8">
                <div className="flex md:ml-8 ml-4 mr-20 md:mr-0">
                    <Image src={"/agency-logo.svg"} alt="Developer DAO agency logo" width={80} height={80}></Image>
                </div>
                <div className="flex font-light tracking-widest hidden md:flex md:text-sm lg:text-lg text-lg flex-row items-center align-middle gap-6">
                    <div>SERVICES</div>
                    <div className="w-px bg-white h-1/2"></div>
                    <div>OUR PROJECTS</div>
                    <div className="w-px bg-white h-1/2"></div>
                    <div>JOIN US</div>
                </div>
                <div className="flex mr-3">
                    <ul className="flex flex-row items-center">
                        <li className="md:mr-3">
                            {
                                !isOpen &&
                                <a className="inline-block bg-white md:text-sm md:px-4 px-8 py-3 lg:px-8 lg:py-3 lg:text-lg border-white border-solid border mr-4 whitespace-nowrap text-sm text-black"
                                   href="#">HIRE US</a>
                            }
                        </li>
                        <li className="mr-4 md:hidden">
                            <button onClick={() => setOpen(!isOpen)} className="space-y-1">
                                {!isOpen && <div className="w-5 md:w-8 h-0.5 bg-white"></div>}
                                {!isOpen && <div className="w-5 md:w-8 h-0.5 bg-white"></div>}
                                {!isOpen && <div className="w-5 md:w-8 h-0.5 bg-white"></div>}
                                {isOpen &&
                                    <Image src={"/x-icon.svg"} alt="Developer DAO agency logo" width={30}
                                           height={30}></Image>
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
