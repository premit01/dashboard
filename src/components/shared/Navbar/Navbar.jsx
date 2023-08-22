import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
    const { user } = useAuth()

    return (
        <nav className="border-b py-3 md:px-20">
            <div className="flex justify-between">
                <div>
                    <Link to='/'>
                        <span className="font-semibold text-2xl text-orange-500">PremIt</span>
                    </Link>
                </div>
                <div>
                    <ul className="md:flex  gap-x-3 items-center">
                        {/* home Link  */}
                        <li className="hover:text-primary"><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        {/* About Link  */}
                        <li className="hover:text-primary"><NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            About
                        </NavLink></li>
                        {/* Dashboard Link  */}
                        <li className="hover:text-primary"><NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            Dashboard
                        </NavLink></li>
                        {
                            user ? <li> <button className=" bg-primary px-3  rounded py-1.5 text-white hover:bg-[#17ab03] ">Log out</button></li> : ""
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;