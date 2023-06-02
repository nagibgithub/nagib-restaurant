import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <Cover img={'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-menu-and-order/main/src/assets/menu/menu-bg.jpg'} title={'Our Shop'} ></Cover>
        </div>
    );
};

export default Shop;