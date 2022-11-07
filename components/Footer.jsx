const Footer = () => {
  return (
    <nav className="p-2 w-full max-w-full bg-pink text-white">
      <div className="flex ml-4 md:ml-8 mt-8 mb-4">
        <div className="flex flex-col text-sm">
          <a
            href="mailto: hello@d_agency.com"
            className="flex md:text-lg hover:underline"
          >
            hello@d_agency.com
          </a>
          <div className="flex mt-16 md:mr-0 md:text-lg">© 2022 D_D Agency</div>
        </div>
        <div className="flex mr-4 md:mr-8 flex-grow justify-end text-sm md:text-lg ml-4 md:ml-16 gap-x-2 md:gap-x-8">
          <div className="hover:underline">Discord</div>
          <div>-</div>
          <div className="hover:underline">Twitter</div>
          <div>-</div>
          <div className="hover:underline">Instagram</div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
