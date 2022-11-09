import {useTheme} from "next-themes";

const AccordionLayout = ({title, children, index, activeIndex, setActiveIndex}) => {
    const { resolvedTheme } = useTheme();

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
                 className={`flex group justify-between pt-4 pl-4 pr-4 pb-4 mt-2 hover:bg-hero-pink ${activeIndex === index ? 'dark:bg-hero-pink' : 'dark:bg-[#202020]'} ${activeIndex === index ? 'bg-hero-pink text-white' : 'bg-[#efefef]'} dark:hover:bg-hero-pink dark:hover:text-white hover:text-white ${activeIndex === index ? 'dark:text-white' : 'dark:text-[#c2c2c2]'} w-full`}>
                <div className='flex'>
                    <div className={`text-lg`}>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        resolvedTheme === "dark" ?
                        (activeIndex === index)
                            ? <svg className="h-8 w-8" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_752_5554)">
                                    <path d="M16.0418 25.2084V29.7917H38.9585V25.2084H16.0418ZM27.5002 4.58337C14.8502 4.58337 4.5835 14.85 4.5835 27.5C4.5835 40.15 14.8502 50.4167 27.5002 50.4167C40.1502 50.4167 50.4168 40.15 50.4168 27.5C50.4168 14.85 40.1502 4.58337 27.5002 4.58337ZM27.5002 45.8334C17.3939 45.8334 9.16683 37.6063 9.16683 27.5C9.16683 17.3938 17.3939 9.16671 27.5002 9.16671C37.6064 9.16671 45.8335 17.3938 45.8335 27.5C45.8335 37.6063 37.6064 45.8334 27.5002 45.8334Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_752_5554">
                                        <rect width="55" height="55" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            : <svg className="h-8 w-8 fill-[#C2C2C2] group-hover:fill-white" fill="#C2C2C2" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_756_3416)">
                                    <path d="M29.7913 16.0416H25.208V25.2083H16.0413V29.7916H25.208V38.9583H29.7913V29.7916H38.958V25.2083H29.7913V16.0416ZM27.4997 4.58325C14.8497 4.58325 4.58301 14.8499 4.58301 27.4999C4.58301 40.1499 14.8497 50.4166 27.4997 50.4166C40.1497 50.4166 50.4163 40.1499 50.4163 27.4999C50.4163 14.8499 40.1497 4.58325 27.4997 4.58325ZM27.4997 45.8333C17.3934 45.8333 9.16634 37.6062 9.16634 27.4999C9.16634 17.3937 17.3934 9.16659 27.4997 9.16659C37.6059 9.16659 45.833 17.3937 45.833 27.4999C45.833 37.6062 37.6059 45.8333 27.4997 45.8333Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_756_3416">
                                        <rect width="55" height="55" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            :  (activeIndex === index)
                                ?
                                <svg className="h-8 w-8" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_752_5554)">
                                        <path
                                            d="M16.0418 25.2084V29.7917H38.9585V25.2084H16.0418ZM27.5002 4.58337C14.8502 4.58337 4.5835 14.85 4.5835 27.5C4.5835 40.15 14.8502 50.4167 27.5002 50.4167C40.1502 50.4167 50.4168 40.15 50.4168 27.5C50.4168 14.85 40.1502 4.58337 27.5002 4.58337ZM27.5002 45.8334C17.3939 45.8334 9.16683 37.6063 9.16683 27.5C9.16683 17.3938 17.3939 9.16671 27.5002 9.16671C37.6064 9.16671 45.8335 17.3938 45.8335 27.5C45.8335 37.6063 37.6064 45.8334 27.5002 45.8334Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_752_5554">
                                            <rect width="55" height="55" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                : <svg className="h-8 w-8 dark:fill-[#C2C2C2] group-hover:fill-white" fill="#000000" viewBox="0 0 55 55"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_756_3416)">
                                        <path
                                            d="M29.7913 16.0416H25.208V25.2083H16.0413V29.7916H25.208V38.9583H29.7913V29.7916H38.958V25.2083H29.7913V16.0416ZM27.4997 4.58325C14.8497 4.58325 4.58301 14.8499 4.58301 27.4999C4.58301 40.1499 14.8497 50.4166 27.4997 50.4166C40.1497 50.4166 50.4163 40.1499 50.4163 27.4999C50.4163 14.8499 40.1497 4.58325 27.4997 4.58325ZM27.4997 45.8333C17.3934 45.8333 9.16634 37.6062 9.16634 27.4999C9.16634 17.3937 17.3934 9.16659 27.4997 9.16659C37.6059 9.16659 45.833 17.3937 45.833 27.4999C45.833 37.6062 37.6059 45.8333 27.4997 45.8333Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_756_3416">
                                            <rect width="55" height="55" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
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