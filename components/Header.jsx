import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="max-w-full">
      <nav className="max-w-full flex flex-row flex-wrap justify-between pt-8 pb-8">
        <div className="flex md:ml-8 ml-4 mr-2 md:mr-0 min-w-[60px]">
          <Image
            src={"/agency-logo.svg"}
            alt="Developer DAO agency logo"
            width={80}
            height={80}
          ></Image>
        </div>
        <div className="flex font-light tracking-widest md:text-sm lg:text-xl text-xs flex-row items-center align-middle gap-4">
          <div className="hover:text-pink">SERVICES</div>
          <div className="w-px bg-pink h-1/2"></div>
          <div className="hover:text-pink">OUR PROJECTS</div>
          <div className="w-px bg-pink h-1/2"></div>
          <div className="hover:text-pink">JOIN US</div>
        </div>
        <div className="flex">
          <ul className="flex flex-row items-center gap-2">
            <li className="">
              <a className="btn" href="#">
                HIRE US
              </a>
            </li>
            <ThemeSwitcher />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
