import Image from "next/image";

const AccordionLayout = ({title, children, index, activeIndex, setActiveIndex}) => {
    const handleSetIndex = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index)
        }
    }

    return (
        <>
            <div onClick={() => handleSetIndex(index)}
                 className={`flex justify-between pt-4 pl-4 pr-4 pb-4 mt-2 hover:bg-hero-pink ${activeIndex === index ? 'dark:bg-hero-pink' : 'dark:bg-[#202020]'} ${activeIndex === index ? 'bg-hero-pink text-white' : 'bg-[#efefef]'} dark:hover:bg-hero-pink dark:hover:text-white hover:text-white ${activeIndex === index ? 'dark:text-white' : 'dark:text-[#c2c2c2]'} w-full`}>
                <div className='flex'>
                    <div className={`text-lg`}>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index)
                            ? <Image alt="" height="34px" width="34px" src="/minus-symbol.svg"/>
                            : <Image alt="" height="34px" width="34px" src="/add-circle.svg"/>
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className="bg-hero-pink p-4 w-full text-white">
                    {children}
                </div>
            )}
        </>
    );
};


export default AccordionLayout;