import React from "react";
const topnews = ({items}) => {
    return (
        <div className="lg:col-span-4">
            <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
                <div className="flex items-start justify-between border-b border-stroke px-6 py-5 dark:border-strokedark">
                    <div>
                        <h2 className="text-title-md2 font-bold text-black dark:text-white">
                            Latest Business News
                        </h2>
                    </div>                    
                </div>

                <div className="p-6">
                    <div>
                    {items.map((item) => (
                        <div className="flex  justify-center gap-6 mt-4">
                            <div><svg stroke="currentColor" fill="none" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                className="h-10 w-10 text-default-950" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                            </svg></div>
                            <div>
                                <h2 className="text-xl font-medium text-default-950">High Standerd</h2>
                                <p className="text-base text-default-800 mt-4">Adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    ))}
                        <a className="inline-flex justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500 my-10"
                            href="/aeropage/landing/agency">View All Our News<svg stroke="currentColor"
                                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg></a>
                    </div>
                    <div className="flex flex-col gap-7">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default topnews
