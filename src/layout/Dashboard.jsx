import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/Header/Header";
import Sidebar from "../pages/dashboard/Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <>
            <div className="max-w-[1920px]">
                {/* <img className='w-24 lg:hidden  ' src={logo} alt="" /> */}
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}

                        <Header />

                        <div className="pl-5">
                            <Outlet />
                        </div>




                    </div>

                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>

                        <Sidebar />

                    </div>
                </div>

            </div>


        </>
    );
};

export default Dashboard;