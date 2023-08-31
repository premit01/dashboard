import { ImImages } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/Logo/infotecsourz.logo.png'
import useAuth from "../../../hooks/useAuth";
import profileImage from '../../../assets/images/Logo/profile_image.jpg'

const Sidebar = () => {
    const { user } = useAuth()

    return (
        <div className="border-r bg-white h-full">
            <img className='w-36  pl-5 py-5  ' src={logo} alt="" />
            <div className="border-t pt-3 pl-5">
                <img className="w-16 h-16 rounded-full" src={user?.photoURL || profileImage} alt="" />
                <p className="font-bold">{user?.displayName}</p>
                <Link className="text-sm hover:underline">Account Settings</Link>
            </div>
            <ul className=" pt-4 w-48 h-full">
                {/* Sidebar content here */}
                <li className="mb-1  text-lg py-2 w-full   ">
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}>
                        <span><IoHomeOutline /></span>
                        <span>Dashboard</span>
                    </NavLink>
                </li>



                <li className="mb-3  text-lg  w-full   ">
                    <NavLink
                        to='/dashboard/new_order'
                        className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}>
                        <span><ImImages /></span>
                        <span>New Order</span>
                    </NavLink>
                </li>
                <li className="mb-3  text-lg  w-full   ">
                    {/* <NavLink
                        to='/dashboard/new_order'
                        className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}>
                        <span><ImImages /></span>
                        <span>New Order</span>
                    </NavLink> */}
                </li>

            </ul>
        </div>

    );
};

export default Sidebar;