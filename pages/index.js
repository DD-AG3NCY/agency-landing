import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import HireUs from "../components/HireUs";
import Services from "../components/Services";
import OurPartners from "../components/OurPartners";
// import OurProjects from "../components/OurProjects";

export default function Home() {
  return (
    <div className="font-lato">
      <Head>
        <title>D_D Agency</title>
        <meta name="description" content="Developer DAO's Agency" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <main className="flex bg-landing-background bg-cover animate-blob animation-delay-8000 backdrop-saturate-200">
        <div>
          <div className="flex p-16 text-sm md:p-28 md:text-lg">
            <Body
              headlineText="WHO WE ARE"
              bodyText={
                <div>
                  D_D Agency is a collective venture builder curated from the
                  best talent within{" "}
                  <a
                    target="_blank"
                    href="https://www.developerdao.com/"
                    className="underline"
                    rel="noreferrer"
                  >
                    DeveloperDAO
                  </a>
                  . By bringing together the best developers, designers and
                  project managers, we aim to collectively build products and
                  services for our clients and the web3 space.
                </div>
              }
            />
          </div>
        </div>
      </main>
      <Services />
      <HireUs />
      <div className="p-16">
        <OurPartners />
      </div>
      {/* <OurProjects /> */}
      <footer className="max-w-full">
        <Footer />
      </footer>
    </div>
  );
}
