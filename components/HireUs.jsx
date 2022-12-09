const HireUs = () => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="flex flex-col gap-12 mb-8 py-8 px-16 md:flex-row md:px-28">
        <div id="join-us" className="flex w-full">
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-56">
            <div className="flex flex-col gap-y-4">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
            Hire us
          </h2>
          <p className="max-w-prose md:text-lg">
            Whether you need us to integrate with your team or partner with you to offer the best solution for your product
            needs, we can help. We&apos;re not just a team of experts, we&apos;re your team!
          </p>
          <a
              href="https://airtable.com/shrbSQGGElKBhfqlS"
              target="_blank"
              className="btn ml-0 w-fit"
              rel="noreferrer"
          >
            Hire Us
          </a>
            </div>
            <div className="flex flex-col gap-y-4">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
            Join us
          </h2>
          <p className="max-w-prose md:text-xl">
            Join Developer DAO and help us build the future of work. We&apos;re always looking for experienced developers, designers, and product experts.
          </p>
          <a
            href="http://discord.gg/devdao"
            target="_blank"
            className="btn ml-0 w-fit"
            rel="noreferrer"
          >
            Join Discord
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireUs;
