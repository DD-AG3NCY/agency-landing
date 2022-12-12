import Link from "next/link";
import Carousel from "nuka-carousel/lib/carousel";

const projects = [
  {
    name: "Agency Website",
    logo: "https://via.placeholder.com/1080",
    description: "Community effor to consolidate into a website the works underneath the organization.",
    people: [
      {
        name: "@Erik",
      type: "lead"
    },
    {
      name: "@Julo",
      link: "",
    type: "contributor"
  },
    {
      name: "@Gordo",
      link: "",
    type: "contributor"
  },
    {
      name: "@Jacob",
      link: "",
    type: "contributor"
  },
    {
      name: "@Keseiko",
      link: "",
    type: "contributor"
  },
  ],
  },
  {
    name: "Web3 Event Kit",
    logo: "https://via.placeholder.com/1080",
    description: "Community effort to build up an web3 open source version of Vercel's Event Kit",
    link: "https://github.com/D-D-Agency/web3-event-kit",
    people: [
      {
        name: "@Kempt",
        link: "",
      type: "lead"
    },
      {
        name: "@Gordo",
        link: "",
      type: "contributor"
    },
      {
        name: "@Smakosh",
        link: "",
      type: "contributor"
    },
    {
      name: "@Alerex",
      link: "",
    type: "contributor"
  },
  ],
  },
  {
    name: "Woop Pay",
    logo: "https://via.placeholder.com/1080",
    link: "",
    description: "Web application to simplify cryptocurrency payment requests.",
    people: [
      {
        name: "@Alerex",
        link: "",
      type: "lead"
    },
      {
        name: "@Gordo",
        link: "",
      type: "contributor"
    },
      {
        name: "@Uma",
        link: "",
      type: "contributor"
    },
  ],
  },

];

const OurProjects = () => {
  return (
    <section className="w-full flex justify-center bg-light-gray dark:bg-black pb-20">
      <div className="w-full max-w-6xl">
        <div className="p-10">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-2xl uppercase">
            Projects
          </h2>
        </div>
        <div className="w-full py-5 flex px-16 md:px-0">
{/*           <Carousel
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
          </Carousel> */}
          {projects.map((project) => <div className="border-2 border-pink p-4 hover:bg-pink mr-8 max-w-sm transition-all w-full" key={project.name}>
              <div>
              <img className="mb-3" width={30} height={30} src={project.logo} alt={project.name} />
            <Link className="cursor-pointer" href={project.link ? project.link : ""} target="_blank">
              <p>{project.name}</p>
                </Link>
              <p className="opacity-70 text-sm mt-3">{project.description}</p>
              <hr className="my-2 opacity-10"/>
              <div className="flex flex-wrap text-sm text-white-200">
              {project.people && project.people.map((person) => {
                return (<>
                  <p style={
                    {backgroundColor: person.type == "lead" ? "rgb(190 45 97 / var(--tw-bg-opacity))" : "transparent"}
                    } className="mr-2 px-3 py-1 m-1 rounded tracking-wider text-xs border-pink border">{person.name}</p>                
                </>)
              })}
              </div>
              </div>
            </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
