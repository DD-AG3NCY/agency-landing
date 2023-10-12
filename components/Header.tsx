import {
  GradientText,
  TopBarGrid,
} from '@gordo-d/d-d-ui-components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import ThemeSwitcher from "./ThemeSwitcher";
// import {Home} from '../pages/index';

const Header = () => {
  // const { resolvedTheme } = useTheme();

  return (
    <TopBarGrid bgColor="agency-pink/30">
      <nav className="flex w-full justify-center">
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
              href="https://twitter.com/d_d_agency_web3"
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
