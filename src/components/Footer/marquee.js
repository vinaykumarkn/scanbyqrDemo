import React from "react";
const Marquee = ({ items }) => {
    return (
        <section className="lg:pb-01">
            <div className="relative gap-28 m-auto flex overflow-hidden border border-default-200 py-6">
                <div className="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full">
                    {items.map((item) => (
                        <div className="py-2">
                            <h2 className="text-4xl font-medium text-default-950">UI-UX Experience</h2>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full">
                    {items.map((item) => (
                        <div className="py-2">
                            <h2 className="text-4xl font-medium text-default-950">UI-UX Experience</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Marquee;