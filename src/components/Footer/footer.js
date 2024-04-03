import "./footer.css";
import Marquee_Json from "../../mockData/marquee.json";
import Marquee from './marquee';

// import Marquee from './marquee';
import FooterColumn from './footerColumn';
import Footerbar from './footerbar';
import FooterSubscribes from './footersubscribes';

const Footer = () => {
    return (
        // <!-- Footer Start -->        
        <footer className="shadow dark:shadow-gray-700  dark:bg-slate-900 ">
            {/* <Marquee /> */}
            <Marquee  items={Marquee_Json}/> 
            <div className="border-y border-default-200">
                <div className="container py-10">
                    <div className="grid xl:grid-cols-9 md:grid-cols-4 gap-10 lg:gap-16">
                        <FooterSubscribes />
                        <FooterColumn />
                    </div>
                </div>
            </div>
            <Footerbar />
        </footer>
        //  {/* <!-- End --> */}
    );
};
export default Footer;