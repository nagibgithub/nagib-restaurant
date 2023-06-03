import { Outlet } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";

const ShopCategoryLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Shop></Shop>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default ShopCategoryLayout;