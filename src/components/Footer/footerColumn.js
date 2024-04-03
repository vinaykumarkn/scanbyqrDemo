
import footerData from "../../mockData/footerData.json";
import { NavLink, Link } from 'react-router-dom'

const FooterColumn = () => {
    return (
        <div className="grid xl:col-span-6 md:col-span-6 xl:grid-cols-4 md:grid-cols-4 gap-10 lg:gap-16">

            {footerData.navbar.map((item, index) => {
                return (
                    <div>
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">{item.text}</h5>
                            {item.menu && item.menu.map((itemsub) => {
                                return (
                                    <li >
                                        <NavLink to={itemsub.url} className="text-base text-default-700 hover:text-default-950 transition-all" >{itemsub.text}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
            <div>
                {footerData.navbarSocialmedia.map((item, index) => {
                    return (
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">{item.text}</h5>
                            {item.menu && item.menu.map((itemsub) => {
                               return (<li className="flex items-center gap-5 group">                           
                                    <NavLink   to={itemsub.url} className="h-10 w-10 inline-flex items-center justify-center border border-gray-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary" >
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"> </path> </svg>
                                    </NavLink>
                                    <h5 className="text-base font-medium text-default-800">{itemsub.text}</h5>
                                </li>)
                            })}
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}
export default FooterColumn;