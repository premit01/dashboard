import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";


const Main = () => {
    return (
        <>
            {/* header  */}
            <header>
                <Navbar />
            </header>

            <Outlet></Outlet>
        </>
    );
};

export default Main;