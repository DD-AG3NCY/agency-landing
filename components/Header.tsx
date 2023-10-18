import {
  GradientText,
  TopBarGrid,
} from '@gordo-d/d-d-ui-components';
import Image from 'next/image';
import Link from 'next/link';
// import ThemeSwitcher from "./ThemeSwitcher";
// import {Home} from '../pages/index';

const Header = () => {
  // const { resolvedTheme } = useTheme();

  return (
    <TopBarGrid bgColor="agency-pink/30" className='z-50'>
      <nav className="flex w-full col-start-1 col-end-13 items-center justify-center z-50">
        <div className="flex items-center justify-center gap-10">
          <GradientText>
            <Link
              href="https://discord.gg/6TAmjUVsuA"
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

