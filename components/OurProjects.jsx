import Link from "next/link";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import agencyLogo from "../public/agency-logo.svg"
import woop from "../public/woop.svg"
import web3kit from "../public/web3kit.svg"

const projects = [
  {
    name: "Agency Website",
    logo: agencyLogo,
    description: "Community effor to consolidate into a website the works underneath the organization.",
    people: {
      leaders: [
        {
          name: "@Erik",
        type: "lead",
        link:"https://twitter.com/erik_knobl"
      },
      ],
      contributors:[
    {
      name: "@Julo",
      link: "https://twitter.com/0xJulo",
    type: "contributor"
  },
    {
      name: "@Gordo",
      link: "https://twitter.com/gordo_design",
    type: "contributor"
  },
    {
      name: "@Jacob",
      link: "https://twitter.com/jahabeebs",
    type: "contributor"
  },
    {
      name: "@Keseiko",
      link: "https://twitter.com/lucasemanuelss",
    type: "contributor"
  },
  ]},
  },
  {
    name: "Web3 Event Kit",
    logo: web3kit,
    description: "Community effort to build up an web3 open source version of Vercel's Event Kit",
    link: "https://github.com/D-D-Agency/web3-event-kit",
    people: {
      leaders:[
      {
        name: "@Kempt",
        link: "https://twitter.com/kempsterrrr",
      type: "lead"
    },
  ],
  contributors: [
    {
      name: "@Gordo",
      link: "https://twitter.com/gordo_design",
    type: "contributor"
  },
    {
      name: "@Smakosh",
      link: "https://twitter.com/smakosh",
    type: "contributor"
  },
  {
    name: "@Alerex",
    link: "https://twitter.com/alerex_eth",
  type: "contributor"
},
  ]
},
  },
  {
    name: "Woop Pay",
    logo: woop,
    link: "https://www.wooppay.xyz/",
    description: "Web application to simplify cryptocurrency payment requests.",
    people: {leaders:[
      {
        name: "@Alerex",
        link: "https://twitter.com/alerex_eth",
      type: "lead"
    },
      {
        name: "@Gordo",
        link: "https://twitter.com/gordo_design",
        type: "lead"
    },
  ], contributors: [
    {
      name: "@Uma",
      link: "https://twitter.com/uma__l",
    type: "contributor"
  },
    {
      name: "@Wolowim",
      link: "https://twitter.com/wolovim",
    type: "contributor"
  },
  ]},
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
          {projects.map((project) => <div className="border-2 border-pink p-4 mr-8 max-w-sm transition-all w-full flex flex-col " key={project.name}>
                <div className="flex mb-3 w-auto h-16 justify-start">
                <Image className="w-full text-left" src={project.logo} alt={project.name} />
                </div>
            <Link className="" href={project.link ? project.link : ""} target="_blank">
              <p className="cursor-pointer ">{project.name} 
              <span className="text-pink ml-3 hover:text-white hover:ml-4 transition-all">{"  →"}
              </span></p>
                </Link>

              <p className="opacity-90 text-sm mt-3">{project.description}</p>

              <div className="opacity-10 bg-white rounded-full h-[1px] w-full my-3"/>
              
              <p className="text-pink opacity-80 text-xs mb-3">Leading:</p>
              <div className="flex flex-wrap text-sm text-white-200">
              {project.people && project.people.leaders.map((person) => {
                return (<Link href={person.link ? person.link : ""} target={"_blank"} key={person.name}>
                  <p style={
                    {
                      backgroundColor: person.type == "lead" ? "rgb(190 45 97 / var(--tw-bg-opacity))" : "black",
                      border: "1px solid " + person.type == "lead" && "black",
                    }
                    } className="mr-2 px-3 py-1 mb-2 rounded tracking-wider text-xs  border-pink border cursor-pointer">{person.name}</p>                
                </Link>)
              })}
              </div>

              <div className="opacity-10 bg-white rounded-full h-[1px] w-full my-3"/>
              <p className="text-pink opacity-80 text-xs mb-3">Contributors:</p>
              <div className="flex flex-wrap text-sm text-white-200">
              {project.people && project.people.contributors.map((person) => {
                return (<Link href={person.link ? person.link : ""} target={"_blank"} key={person.name}>
                  <p style={
                    {
                      backgroundColor: person.type == "lead" ? "rgb(190 45 97 / var(--tw-bg-opacity))" : "black",
                      border: "1px solid " + person.type == "lead" && "black",
                    }
                    } className="mr-2 px-3 py-1 mb-2 rounded tracking-wider text-xs  border-pink border cursor-pointer">{person.name}</p>                
                </Link>)
              })}
              </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
