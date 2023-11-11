import { NavLink, Outlet } from "react-router-dom"
import { Navbar } from 'flowbite-react';

const Navigation = () => {
    return (
        <>
            <Navbar fluid rounded className="absolute w-full">
                <Navbar.Brand href="https://flowbite-react.com">
                    <NavLink to="https://github.com/alwisahrul9?tab=repositories" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Alwi Sahrul Al Falah
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink to="/" className={({ isActive, isPending }) => 
                        isPending ? "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : ""
                    }>
                         Home
                    </NavLink>
                    <NavLink to="/list-contact" className={({ isActive, isPending }) => 
                        isPending ? "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : ""
                    }>
                        List Contact
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Navigation