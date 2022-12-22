const Footer = () => {
  return (
    <nav className="p-5 w-full max-w-full justify-center items-center flex bg-pink text-white border-t-2 border-black">
      <div className="w-full max-w-6xl flex items-center">
        <div className="flex items-center text-sm flex-wrap">
          <p className="flex mr-3">© 2022 Agency</p>
          <a
            href="mailto: agency@developerdao.com"
            className="hover:underline"
          >
            📪 - agency@developerdao.com
          </a>
        </div>
        <div className="flex flex-grow justify-end text-sm">
          <a
              href="https://github.com/D-D-Agency"
              target="_blank"
              className="hover:underline mr-4"
              rel="noreferrer"
          >Github</a>
          <a
              href="http://discord.gg/devdao"
              target="_blank"
              className="hover:underline mr-4"
              rel="noreferrer"
          >Discord</a>
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
