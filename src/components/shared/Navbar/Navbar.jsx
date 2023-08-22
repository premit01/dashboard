import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="border-b py-3 md:px-20">
            <div className="flex justify-between">
                <div>
                    <Link to='/'>
                        <span className="font-semibold text-2xl text-orange-500">PremIt</span>
                    </Link>
                </div>
                <div>
                    <ul className="md:flex  gap-x-3 hover:text-primary">
                        {/* home Link  */}
                        <li><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        {/* About Link  */}
                        <li><NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            About
                        </NavLink></li>
                        {/* Dashboard Link  */}
                        <li><NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : ""
                            }
                        >
                            Dashboard
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;