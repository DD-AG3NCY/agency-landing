import Link from 'next/link';
import Image from 'next/image';
import agencyLogo from '../public/agency-logo.svg';
import woop from '../public/woop.svg';
import web3kit from '../public/web3kit.svg';

const projects = [
  {
    name: 'Agency Website',
    logo: agencyLogo,
    description:
      'Community effort to consolidate into a website the works underneath the organization.',
    people: {
      leaders: [
        {
          name: '@Erik',
          type: 'lead',
          link: 'https://twitter.com/erik_knobl',
        },
      ],
      contributors: [
        {
          name: '@Julo',
          link: 'https://twitter.com/0xJulo',
          type: 'contributor',
        },
        {
          name: '@Gordo',
          link: 'https://twitter.com/gordo_design',
          type: 'contributor',
        },
        {
          name: '@Jacob',
          link: 'https://twitter.com/jahabeebs',
          type: 'contributor',
        },
        {
          name: '@Kseikyo',
          link: 'https://twitter.com/lucasemanuelss',
          type: 'contributor',
        },
      ],
    },
  },
  {
    name: 'Web3 Event Kit',
    logo: web3kit,
    description:
      "Community effort to build up an web3 open source version of Vercel's Event Kit",
    link: 'https://github.com/D-D-Agency/web3-event-kit',
    people: {
      leaders: [
        {
          name: '@Kempt',
          link: 'https://twitter.com/kempsterrrr',
          type: 'lead',
        },
      ],
      contributors: [
        {
          name: '@Gordo',
          link: 'https://twitter.com/gordo_design',
          type: 'contributor',
        },
        {
          name: '@Smakosh',
          link: 'https://twitter.com/smakosh',
          type: 'contributor',
        },
        {
          name: '@Alerex',
          link: 'https://twitter.com/alerex_eth',
          type: 'contributor',
        },
      ],
    },
  },
  {
    name: 'Woop Pay',
    logo: woop,
    link: 'https://www.wooppay.xyz/',
    description:
      'Web application to simplify cryptocurrency payment requests.',
    people: {
      leaders: [
        {
          name: '@Alerex',
          link: 'https://twitter.com/alerex_eth',
          type: 'lead',
        },
        {
          name: '@Gordo',
          link: 'https://twitter.com/gordo_design',
          type: 'lead',
        },
      ],
      contributors: [
        {
          name: '@Uma',
          link: 'https://twitter.com/uma__l',
          type: 'contributor',
        },
        {
          name: '@Wolowim',
          link: 'https://twitter.com/wolovim',
          type: 'contributor',
        },
      ],
    },
  },
];

const OurProjects = () => {
  return (
    <section className="flex w-full justify-center bg-light-gray pb-20 dark:bg-black">
      <div className="w-full max-w-6xl">
        <div className="p-8 md:p-10">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-2xl uppercase">
            Projects
          </h2>
        </div>
        <div className="flex w-full flex-wrap gap-8 py-5 px-5 md:flex-nowrap md:gap-0 md:px-0">
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
          {projects.map((project) => (
            <div
              className="flex w-full max-w-sm flex-col border-2 border-pink p-4 transition-all md:mr-8 "
              key={project.name}>
              <div className="mb-5 inline-block">
                <Image
                  className="w-full text-left"
                  src={project.logo}
                  alt={project.name}
                  height={60}
                  width={60}
                />
              </div>
              <Link
                className=""
                href={
                  project.link
                    ? project.link
                    : ''
                }
                target="_blank">
                <p className="cursor-pointer ">
                  {project.name}
                  <span className="ml-3 text-pink transition-all hover:ml-4 hover:text-white">
                    {'  →'}
                  </span>
                </p>
              </Link>

              <p className="mt-3 text-sm">
                {project.description}
              </p>

              <div className="my-3 h-[1px] w-full rounded-full bg-white opacity-10" />

              <p className="mb-3 text-xs text-pink">
                Leading:
              </p>
              <div className="text-white-200 flex flex-wrap text-sm">
                {project.people &&
                  project.people.leaders.map(
                    (person) => {
                      return (
                        <Link
                          href={
                            person.link
                          }
                          target={
                            '_blank'
                          }
                          key={
                            person.name
                          }>
                          <p className="mr-2 mb-2 cursor-pointer rounded bg-pink px-3 py-1 text-xs tracking-wider">
                            {
                              person.name
                            }
                          </p>
                        </Link>
                      );
                    }
                  )}
              </div>

              <div className="my-3 h-[1px] w-full rounded-full bg-white opacity-10" />
              <p className="mb-3 text-xs text-pink">
                Contributors:
              </p>
              <div className="text-white-200 flex flex-wrap text-sm">
                {project.people &&
                  project.people.contributors.map(
                    (person) => {
                      return (
                        <Link
                          href={
                            person.link
                          }
                          target="_blank"
                          key={
                            person.name
                          }>
                          <p className="mr-2 mb-2 cursor-pointer rounded border border-pink px-3 py-1 text-xs tracking-wider">
                            {
                              person.name
                            }
                          </p>
                        </Link>
                      );
                    }
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
