import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import {useTheme} from "next-themes";

const Header = () => {
  const { resolvedTheme } = useTheme();

  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }


  return (
    <header className="max-w-full">
      <nav className="max-w-full flex flex-row justify-between pt-8 pb-8">
        <div className="flex md:ml-8 mr-2 md:mr-0 min-w-[40px]">
          {resolvedTheme === "light" ? <Image
              src={"/agency-logo-light.svg"}
              alt="Developer DAO agency logo"
              width={80}
              height={80}
          ></Image> : <Image
              src={"/agency-logo.svg"}
              alt="Developer DAO agency logo"
              width={80}
              height={80}
          ></Image>
          }
        </div>
        <div className="flex font-light md:text-sm lg:text-xl text-xs sm:text-xs flex-row items-center align-middle gap-2 md:gap-[1.25em]">
          <button goto="services" onClick={onBtnClick} className="hover:text-pink tracking-[0.25em]">SERVICES</button>
          <div className="w-px bg-pink h-1/2"></div>
          <button goto="services" onClick={onBtnClick} className="hover:text-pink tracking-[0.25em]">OUR PROJECTS</button>
          <div className="w-px bg-pink h-1/2"></div>
          <button goto="join-us" onClick={onBtnClick} className="hover:text-pink tracking-[0.25em]">JOIN US</button>
        </div>
        <div className="flex md:mr-8">
          <ul className="flex flex-row items-center md:gap-x-2">
            <li className="">
              <a
                  href="https://airtable.com/shrbSQGGElKBhfqlS"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
              >
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
