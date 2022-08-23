import Image from "next/image";

const Footer = () => {
    return (
        <nav className="sticky bottom-0 left-0 w-full pb-4">
            <div className="flex flex-row items-center mb-4">
                <div className="flex ml-6 md:mr-20 md:mr-0 text-gray-500 text-md md:text-lg whitespace-nowrap">
                    © 2022 D_Agency
                </div>
                <div className="flex justify-end flex-grow items-center ml-16 mr-6 mt-2 gap-8">
                    <a
                        href="#"><Image src={"/discord-icon.svg"} alt="Discord logo" width={30} height={30}></Image>
                    </a>
                    <a
                        href="#">
                        <Image src={"/twitter-icon.svg"} alt="Twitter logo" width={30} height={30}></Image>
                    </a>
                    <a
                        href="#">
                        <Image src={"/instagram-icon.svg"} alt="Instagram logo" width={30} height={30}></Image>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Footer;
