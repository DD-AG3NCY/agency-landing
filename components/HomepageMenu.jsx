const HomepageMenu = () => {
  return (
    <div className="flex justify-center md:justify-start md:ml-40 h-screen">
      <ul className="flex flex-col text-4xl md:text-6xl gap-y-16 my-auto">
        <li className="hover:underline">ABOUT</li>
        <li className="hover:underline">PROJECTS</li>
        <li className="hover:underline">CONTACT</li>
        <li className="hover:underline">WORK WITH US</li>
      </ul>
    </div>
  );
};

export default HomepageMenu;
