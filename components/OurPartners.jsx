const partners = [
  {
    name: "Partner 1",
    logo: "https://via.placeholder.com/250",
    link: "https://google.com",
  },
  {
    name: "Partner 2",
    logo: "https://via.placeholder.com/250",
    link: "https://google.com",
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/250",
    link: "https://google.com",
  },
  {
    name: "Partner 4",
    logo: "https://via.placeholder.com/250",
    link: "https://google.com",
  },
];

const OurPartners = () => {
  return (
    <section>
      <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
        Our Partners
      </h2>
      <div className="my-6 flex flex-wrap items-center gap-4">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.logo}
              alt={partner.name}
              className="aspect-video"
            />
          </a>
        ))}
      </div>
      <button className="btn m-0 mt-4 bg-pink">Become a partner</button>
    </section>
  );
};

export default OurPartners;
