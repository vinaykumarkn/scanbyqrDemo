import React from "react";
const totalcount = ({items}) => {
    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-6 gap-6">

            {items.map((item) => (
                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                    <div className="p-5 flex items-center justify-between">
                        <span className="me-3">
                            <span className="text-slate-400 block">{item.text}</span>
                            <span className="flex items-center justify-between mt-1">
                                <span className="text-2xl font-medium">$ <span className="counter-value"
                                    data-target="45890">{item.count}</span></span>
                            </span>
                        </span>
                        <span
                            className="flex justify-center items-center rounded-md h-12 w-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                            <i className="mdi mdi-currency-usd text-[28px]"></i>
                        </span>
                    </div>

                </div>
            ))}

            {/* <!--end--> */}
        </div>
    );
};
export default totalcount
