const Footer = () => {
  return (
    <nav className="p-2 w-full max-w-full bg-pink text-white">
      <div className="flex ml-4 md:ml-24 mt-8 mb-4">
        <div className="flex flex-col text-sm">
          <a
            href="mailto: agency@developerdao.com"
            className="flex md:text-lg hover:underline"
          >
            agency@developerdao.com
          </a>
          <div className="flex mt-8 md:mt-16 md:mr-0 md:text-lg">© 2022 D_D Agency</div>
        </div>
        <div className="flex mr-4 md:mr-24 flex-grow justify-end text-sm md:text-lg ml-4 md:ml-16 gap-x-2 md:gap-x-8">
          <a
              href="http://discord.gg/devdao"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
          >Discord</a>
          <div>-</div>
          <a
              href="https://twitter.com/d_d_agency_web3"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
          >Twitter</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
