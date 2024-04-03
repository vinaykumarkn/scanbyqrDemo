
const FooterSubscribes = () => {
    return (
        <div className="xl:col-span-3 md:col-span-6">
            <div><a href="/aeropage/landing/agency">
                <img src="../../assets/images/logo-dark.png"
                    className="inline-block dark:hidden" alt="" />
                <img src="/aeropage/assets/logo-light-BmM6A7zf.png" alt="logo"
                    className="h-10 hidden dark:flex" /></a>
                <p className="text-base text-default-800 mt-6">Contact Us
                    malesuada eros blandit eget. Proin lacinia mortoc id odio vestibulum.</p>
                    
                <form className="space-y-2 mt-6">
                    <div className="relative w-full">
                        <div className="relative w-full"><input type="email"
                            placeholder="Enter Your Email" name="email" id="email"
                            className="px-3 border-default-200 focus:ring-0 focus:border-default-200 py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100"
                            value="" /><button type="submit"
                                className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white"><svg
                                    stroke="currentColor" fill="none" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8L22 12L18 16"></path>
                                    <path d="M2 12H22"></path>
                                </svg></button></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FooterSubscribes;