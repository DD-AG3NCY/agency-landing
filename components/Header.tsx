import {
  GradientText,
} from '@gordo-d/d-d-ui-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
// import ThemeSwitcher from "./ThemeSwitcher";
// import {Home} from '../pages/index';

const TopBarGrid = ({ children }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed left-0 top-0 z-50 w-screen transition-all duration-300 
                  ${
                    isScrolled
                      ? "shadow-b-s, border-b border-neutral-900 bg-neutral-800/70 backdrop-blur-md"
                      : "bg-transparent"
                  }`}>
      <div className="flex w-full justify-center">
        <div className="lg:grid-cols-lg lg:gap-lg xl:grid-cols-xl mx-5 mt-1 flex w-full grid-flow-row auto-rows-auto grid-cols-1 gap-y-16 p-5 md:grid md:w-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
const Header = () => {
  // const { resolvedTheme } = useTheme();

  return (
    <TopBarGrid bgColor="agency-pink/30" className='z-50'>
      <nav className="flex w-full col-start-1 col-end-13 items-center justify-center z-50">
        <div className="flex items-center justify-center gap-10">
          <GradientText>
            <Link
              href="https://www.developerdao.com/"
              target="_blank"
              className="hover:text-primary-white md:text-md w-[80px] text-center text-sm font-semibold tracking-[0.15em] transition-colors md:w-[120px]"
              rel="noreferrer">
              Members
            </Link>
          </GradientText>
          <Image
            src={'/agency-logo.svg'}
            alt="Agency logo"
            width={50}
            height={50}></Image>
          <GradientText>
            <Link
              href="https://twitter.com/ddweb3experts"
              rel="noreferrer"
              className="hover:text-primary-white md:text-md w-[80px] text-center text-sm font-semibold tracking-[0.15em] transition-colors md:w-[120px]"
              target={'_blank'}>
              Follow
            </Link>
          </GradientText>
        </div>
      </nav>
    </TopBarGrid>
  );
};

Header.theme = 'dark';
export default Header;

