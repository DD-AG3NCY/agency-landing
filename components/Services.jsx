import Accordion from "./Accordion";

const Services = () => {
    return (<div id="services" className="flex flex-col pb-16 pl-16 pr-16">
        <div className="pb-2 font-light dark:text-white text-2xl ml-8 mt-16 text-5xl">
            SERVICES
            <div className="w-56 border-hero-pink pb-2 border-b-2">

            </div>
        </div>
        <div className="text-xl dark:text-white pr-16 md:mr-28 ml-8 font-light mt-4">
            We integrate with projects and create a seamless frictionless collaboration with teams. At all company or
            project stages. We can see us as a partner or a as service provider.
        </div>
        <div>
            <Accordion/>
        </div>
    </div>)
}

export default Services;