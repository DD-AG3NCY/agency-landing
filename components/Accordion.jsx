import AccordionLayout from "./AccordionLayout";
import {useState} from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='flex flex-col ml-8 mr-8 justify-center items-center dark:text-white'>
            <div className="w-full text-xl tracking-wider mt-16 mb-4">DESIGN</div>
            <AccordionLayout
                title="Competitor Analysis"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Web 3 requires new paradigms in user experience. We study, test, iterate and innovate to create delightful interfaces for decentralized use cases.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Requirement Gathering"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">This is the first step in the UI/UX process—it is considered the base of the project. A crucial opening step in the product development process, Requirement Gathering brings all involved parties together, both from the UI/UX team and the customer team, to discuss all the project’s goals and details.
                </div>
                <div className="border-t mt-8 pt-6"></div>
            </AccordionLayout>
            <AccordionLayout
                title="Wireframing"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">We prepare wireframes to provide a clear overview of the page structure, layout, information architecture, user flow, functionality, and intended behaviors.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Journey Map"
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">The journey map is a synthetic representation that describes step by step how a user interacts with your service.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Prototyping"
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Prototypes are simulations or samples of your final products that are used as testing tools. Prototyping is intended to test products (and product ideas) before investing a great deal of time and resources into creating a profitable product.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Usability Testing"
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Through usability testing, we can find design flaws that most might otherwise overlook. When you watch how test users behave while they try to execute tasks, you’ll get vital insights into how well your design/product works. Then, we leverage these insights to make improvements.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="User Interface"
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">User interface (UI) design is the process our designers use to build interfaces in software, focusing on looks or style.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Information Architecture"
                index={8}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Information architecture (IA) focuses on organizing, structuring, and labeling content in an effective and sustainable way.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Style Guide"
                index={9}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">A document that details your project’s set of standards for writing, editing, formatting, and designing documents. Also known as a writing style guide, this manual establishes the standard requirements for grammar, punctuation, tense, tone, wording, and writing best practices.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <div className="w-full text-xl tracking-wider mt-16 mb-4">DEVELOPMENT</div>
            <AccordionLayout
                title="App Development"
                index={10}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">We offer tailor-made blockchain development services on platforms like Hyperledger, Stellar, and EOS. Hire experienced blockchain developers from D_D Agency to design secure applications for your users.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Front End"
                index={11}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">We create the website&apos;s interface and front-end logic while building high-quality components and promoting a positive user experience.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Back End"
                index={12}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Back-end development means working on server-side software. Our back-end developers focus on databases design, back-end logic, application programming interfaces (APIs), and application architecture.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="DevOps"
                index={13}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full"> In simple terms, DevOps is about removing the barriers between traditionally siloed teams, development, and operations. Under a DevOps model, development and operations teams work together across the entire software application lifecycle, from development and testing to deployment.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Security Analysis"
                index={14}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">By aligning your security strategy to your Web 3 business, you will begin integrating solutions designed to protect your digital users, assets, and data while deploying new applications.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Audits"
                index={15}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">A smart contract security audit is a comprehensive inspection and analysis of the underlying code of a smart contract. Our audits aim to highlight any flaws or vulnerabilities in the code so we can fix them and make improvements. This is a requirement for secure decentralized finance (DeFi) applications.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <div className="w-full text-xl tracking-wider mt-16 mb-4">WEB3 CONSULTANCY</div>
            <AccordionLayout
                title="Business Development"
                index={16}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Gain a competitive edge in the market with dynamic, enterprise-quality blockchain solutions that fuel decentralized platforms across a variety of industry sectors.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Research & Structure Web3 Company Goals"
                index={17}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Propel business growth with our strategic blockchain consultation services. We evaluate your unique situation, then provide tailored solutions that drive you towards your business&apos;s goals.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Integration Analysis"
                index={18}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Leverage our deep technical expertise to enable high-quality integrations for your product.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Product Management"
                index={19}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Our agency members, many of whom are experienced product managers, are blockchain natives who can guide you through build a product that will be successful in the market.
                    <div className="border-t mt-8 pt-6"></div>
                </div>
            </AccordionLayout>

        </div>
    );
};

export default Accordion;