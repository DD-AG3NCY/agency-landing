import Image from 'next/image';
// import ThemeSwitcher from "./ThemeSwitcher";
import {useTheme} from 'next-themes';
// import {Home} from '../pages/index';

const Header = () => {
  // const { resolvedTheme } = useTheme();

  return (
    <header className="flex max-w-full justify-center">
      <div className="w-full max-w-6xl px-4">
        <nav className="flex max-w-full flex-row justify-between py-4">
          <div className="mr-2 flex min-w-[40px] md:ml-4 md:mr-0">
            <Image
              src={'/agency-logo.svg'}
              alt="Developer DAO agency logo"
              width={50}
              height={50}></Image>
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
            <div className="mr-1 md:mr-8 flex flex-row items-center gap-2 align-middle text-xs font-light sm:text-xs md:gap-[1.25em] md:text-sm">
              {/*           <button goto="services" onClick={onBtnClick} className="hover:text-pink tracking-[0.25em]">SERVICES</button>
          <div className="w-px bg-pink h-1/2"></div> */}
              <a
                href="https://twitter.com/d_d_agency_web3"
                rel="noreferrer"
                className='md:block hidden'
                target={'_blank'}>
                <button
                  goto="services"
                  className="tracking-[0.25em] hover:text-pink transition-all">
                  FOLLOW
                </button>
              </a>

              <div className="h-1/2 w-px bg-pink md:block hidden"></div>
              <a
                href="https://medium.com/@d_d_agency"
                rel="noreferrer"
                className='md:block hidden'
                target={'_blank'}>
                <button
                  goto="services"
                  className="tracking-[0.25em] hover:text-pink">
                  BLOG
                </button>
              </a>

              <div className="h-1/2 w-px bg-pink md:block hidden"></div>
              <a
                href="https://www.developerdao.com/"
                rel="noreferrer"
                className='md:mr-0 mr-4'
                target={'_blank'}>
                <button
                  goto="join-us"
                  className="tracking-[0.25em] hover:text-pink transition-all">
                  JOIN US
                </button>
              </a>
            </div>

            <ul className="flex flex-row items-center md:gap-x-2">
              <li className="w-full md:w-fit">
                <a
                  href="https://airtable.com/shrbSQGGElKBhfqlS"
                  target="_blank"
                  className="btn-primary border border-pink bg-black py-2 px-5 text-xs md:text-sm tracking-[0.25em] transition-all hover:bg-pink hover:text-white"
                  rel="noreferrer">
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

Header.theme = 'dark';
export default Header;
