import React from "react";

const feedback = ({ items }) => {
    return (
        < div className="lg:col-span-4" >
            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                    <h6 className="text-lg font-semibold">Feedback </h6>
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-7">

                        {items.map((item) => (
                            <div className="relative z-1 flex gap-5.5">
                                <div className="me-3 h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark">
                                    <img src="../../assets/images/user-14.png" alt="User" />
                                </div>
                                <div>
                                    <p className="text-black dark:text-white">
                                        <span className="font-medium">Timothy Smith</span>
                                        Commented on Cloud
                                        <span className="font-medium">Killan James</span>
                                    </p>
                                    <span className="mt-1 block text-sm">1 hour ago</span>
                                    <p className="mt-2.5 text-black dark:text-white">
                                        It's an Affiliate commissions SaaS application that
                                        allows you to track your affiliate revenue.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >

    );
};
export default feedback
