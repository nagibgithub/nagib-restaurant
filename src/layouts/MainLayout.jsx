import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('menu' || 'server' || 'register');

    console.log(noHeaderFooter);


    return (
        <div className="">
            {!noHeaderFooter && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!noHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default MainLayout;