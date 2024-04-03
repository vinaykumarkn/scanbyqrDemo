import { NavLink, Link } from 'react-router-dom'

import "./navbar.css";
import headerData from "../../mockData/headerData.json";
const Navbar = () => {
    return (
        <div id="header" className="top-header main-nav navbar-scrolled">
            <div className="header-bar flex justify-between">
                <div className="flex items-center space-x-1">
                    {/* <!-- Logo --> */}
                    <Link to="/" className="block me-2" >
                        <img src="../images/logo-icon-32.png" className="md:hidden block" alt="" />
                        <span className="md:block hidden">
                            <img id="main-logo" src="../../assets/images/header-logo.png" className="inline-block dark:hidden"
                                alt="" />
                            <img id="main-logo" src="../../assets/images/header-logo.png" className="hidden dark:inline-block"
                                alt="" />
                        </span>
                    </Link>
                    {/* <!-- Logo --> */}
                </div>
                <div className="flex items-center gap-6">
                    <div id="header-menu"
                        className="col lg:flex items-center gap-6 transition-width duration-500 ease-in-out">
                        <div id="mob-menu-header"
                            className="hidden flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
                            <a href="/aeropage/"><img src="../../public/assets/images/header-logo.png" alt="logo"
                                className="flex h-10 dark:hidden" /><img src="../../public/assets/images/header-logo.png" alt="logo"
                                    className="hidden h-10 dark:flex" /></a>
                            <div id="close-header-menu"><svg stroke="currentColor" fill="none" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24"
                                width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg></div>
                        </div>
                        <nav className="main-menu">
                            <ul>
                                {headerData.navbar.map((item, index) => {
                                    return (
                                        <li className="relative">
                                            <NavLink to={item.url} className="text-sm" >{item.text}</NavLink>
                                            {item.submenu &&
                                                <ul className="sub-menu">
                                                    {item.submenu.map((itemsub) => {
                                                        return (
                                                            <li className="relative">
                                                                <NavLink to={itemsub.url}  >{itemsub.submenuText}</NavLink>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            }
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <div>
                            <ul className="pt-0 lg:flex  list-none lg:ml-auto items-center gap-3 pt-0">
                                {headerData.navbarStatic.map((item, index) => {
                                    return (
                                        <li className="nav-item">
                                            <NavLink to={item.url} className="px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500 border border-solid border-gray-300 rounded-lg" ><i
                                                className="fab fa-sketch leading-lg text-blueGray-400 text-sm"></i><span
                                                    className="ml-2">{item.text}}</span><span
                                                        className="bg-red-500 text-white ml-2 px-2 rounded-full pt-0.5"></span></NavLink>
                                        </li>
                                    );
                                })}                               
                            </ul>
                        </div>
                    </div>

                    {/* <!-- show or close sidebar --> */}
                    <a id="close-sidebar"
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md"
                        href="javascript:void(0)" >
                        {/* @click.stop="sidebarToggle = !sidebarToggle" */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="feather feather-menu h-4 w-4">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </a>
                    {/* <!-- show or close sidebar --> */}
                </div>
            </div>
        </div>

    );
};
export default Navbar;