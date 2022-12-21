import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import {useTheme} from "next-themes";
import {Home} from '../pages/index';

const Header = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="max-w-full flex justify-center">
        <div className="max-w-6xl w-full px-4">
      <nav className="max-w-full flex flex-row justify-between py-4">
        <div className="flex md:ml-4 mr-2 md:mr-0 min-w-[40px]">
          <Image
              src={"/agency-logo.svg"}
              alt="Developer DAO agency logo"
              width={50}
              height={50}
          ></Image>
{/*           {resolvedTheme === "light" ? <Image
              src={"/agency-logo-light.svg"}
              alt="Developer DAO agency logo"
              width={50}
              height={50}
          ></Image> : <Image
              src={"/agency-logo.svg"}
              alt="Developer DAO agency logo"
              width={50}
              height={50}
          ></Image>
          } */}
        </div>

        <div className="flex md:mr-4">
        <div className="flex font-light md:text-sm text-xs sm:text-xs flex-row items-center align-middle gap-2 md:gap-[1.25em] mr-8">
{/*           <button goto="services" onClick={onBtnClick} className="hover:text-pink tracking-[0.25em]">SERVICES</button>
          <div className="w-px bg-pink h-1/2"></div> */}
          <a href="https://twitter.com/d_d_agency_web3" rel="noreferrer" target={"_blank"}>
          <button goto="services"  className="hover:text-pink tracking-[0.25em]">FOLLOW</button>
          </a>

          <div className="w-px bg-pink h-1/2 transition-all"></div>
          <a href="https://medium.com/@d_d_agency" rel="noreferrer" target={"_blank"}>
          <button goto="services"  className="hover:text-pink tracking-[0.25em]">BLOG</button>
          </a>

          <div className="w-px bg-pink h-1/2 transition-all"></div>
          <a href="https://www.developerdao.com/" rel="noreferrer" target={"_blank"}>
          <button goto="join-us"  className="hover:text-pink tracking-[0.25em]">JOIN US</button>
          </a>
          
        </div>
        
          <ul className="flex flex-row items-center md:gap-x-2">
            <li className="">
              <a
                  href="https://airtable.com/shrbSQGGElKBhfqlS"
                  target="_blank"
                  className="btn-primary transition-all bg-black tracking-[0.25em] border-pink border hover:bg-white hover:text-black py-2 px-5 text-sm"
                  rel="noreferrer"
              >
                HIRE US
              </a>
            </li>
            {/* <ThemeSwitcher /> */}
          </ul>
        </div>
      </nav>
        </div>
    </header>
  );
};

Header.theme = "dark";
export default Header;
