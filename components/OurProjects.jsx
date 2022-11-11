import Carousel from "nuka-carousel/lib/carousel";

const projects = [
  {
    name: "Project 1",
    logo: "https://via.placeholder.com/1080",
    link: "https://google.com",
  },
  {
    name: "Project 2",
    logo: "https://via.placeholder.com/1080",
    link: "https://google.com",
  },
  {
    name: "Project 3",
    logo: "https://via.placeholder.com/1080",
    link: "https://google.com",
  },
  {
    name: "Project 4",
    logo: "https://via.placeholder.com/1080",
    link: "https://google.com",
  },
];

const OurProjects = () => {
  return (
    <section className="w-full bg-light-gray dark:bg-dark-gray">
      <div className="p-16">
        <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
          Our Projects
        </h2>
      </div>
      <div className="w-full px-16 md:px-0">
        <Carousel
          wrapAround
          enableKeyboardControls
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              onClick={previousSlide}
              disabled={previousDisabled}
              className="pl-8 text-4xl text-black dark:text-white md:text-6xl"
            >
              {"<"}
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              onClick={nextSlide}
              disabled={nextDisabled}
              className="pr-8 text-4xl text-black dark:text-white md:text-6xl"
            >
              {">"}
            </button>
          )}
          renderBottomCenterControls={() => null}
        >
          {projects.map((project) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={project.name} src={project.logo} alt={project.name} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurProjects;
