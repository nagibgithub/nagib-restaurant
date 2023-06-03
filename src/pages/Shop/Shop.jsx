import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import useMenu from "../../MenuApi/useMenu";
import { NavLink } from "react-router-dom";
import './Shop.css'

const Shop = () => {

    const { menuCategory } = useMenu();

    return (
        <div>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <Cover img={'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-menu-and-order/main/src/assets/shop/order.jpg'} title={'Our Shop'} ></Cover>
            <div className="w-full flex justify-center my-5">
                {
                    menuCategory.map((pd, index) => <NavLink
                        to={`/shop/${pd}`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "activeMenu"
                                : isPending
                                    ? "pendingMenu"
                                    : "tabMenu"
                        }
                        key={index}
                    >{pd}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Shop;