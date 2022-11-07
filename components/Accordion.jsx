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
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Requirements Gathering"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Wireframing"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Journey Mapping"
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Prototyping"
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Usability Testing"
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="User Interface Design"
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Information Architecture"
                index={8}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Style Guide"
                index={9}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <div className="w-full text-xl tracking-wider mt-16 mb-4">DEVELOPMENT</div>
            <AccordionLayout
                title="App Development"
                index={10}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Front-end"
                index={11}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Back-end"
                index={12}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Dev Ops"
                index={13}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Security Analysis"
                index={14}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Audits"
                index={15}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <div className="w-full text-xl tracking-wider mt-16 mb-4">WEB3 CONSULTANCY</div>
            <AccordionLayout
                title="Business Development"
                index={16}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Research & Structure Web3 Company Goals"
                index={17}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Integration Analysis"
                index={18}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>
            <AccordionLayout
                title="Product Management"
                index={19}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    <div className="border-t mt-8 pt-6">Lorem ipsum dolor sit amet</div>
                    <div
                        className="inline-block mt-6 bg-white px-10 py-3 md:text-sm lg:text-lg border-white border-solid border whitespace-nowrap text-xs text-black">Lorem
                        ipsum
                    </div>
                </div>
            </AccordionLayout>

        </div>
    );
};

export default Accordion;