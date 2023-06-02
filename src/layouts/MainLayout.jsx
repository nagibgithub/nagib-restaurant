import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('server') || location.pathname.includes('register')

    console.log(location.pathname, noHeaderFooter);


    return (
        <div className="min-h-screen flex flex-col justify-between">
            {!noHeaderFooter && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!noHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default MainLayout;