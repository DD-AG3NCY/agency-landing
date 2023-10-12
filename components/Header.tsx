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
    <TopBarGrid bgColor="agency-pink/30">
      <nav className="flex w-full justify-center">
        <div className="flex items-center gap-10">
          <GradientText>
            <Link
              href="https://www.developerdao.com/"
              target="_blank"
              className="hover:text-primary-white w-[120px] font-semibold tracking-[0.15em] transition-colors"
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
              className="flex w-[120px] justify-center font-semibold"
              target={'_blank'}>
              <button className="hover:text-primary-white w-[120px] font-semibold tracking-[0.15em] transition-colors">
                Follow
              </button>
            </Link>
          </GradientText>
        </div>
      </nav>
    </TopBarGrid>
  );
};

Header.theme = 'dark';
export default Header;
