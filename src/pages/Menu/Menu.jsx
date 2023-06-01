import Cover from "../shared/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import { Helmet } from "react-helmet-async";
// import soupImg from '../../assets/menu/soup-bg.jpg'
// import saladImg from '../../assets/menu/salad-bg.jpg'
// import pizzaImg from '../../assets/menu/pizza-bg.jpg'
// import dessertImg from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {

    return (
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover title={'fuad'} img={menuImg}></Cover>
        </>
    );
};

export default Menu;