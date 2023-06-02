import SectionTitle from "../SectionTitle/SectionTitle";
import Cover from "../shared/Cover";
import { Helmet } from "react-helmet-async";
import useMenu from "../../MenuApi/useMenu";
import { useEffect, useState } from "react";
import ManuCategory from "./ManuCategory";
import img123 from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
    // const menuImg = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-menu-and-order/main/src/assets/menu/menu-bg.jpg';
       const img1 = "https://img.freepik.com/free-photo/big-tasty-burger-with-fries_144627-24415.jpg";
       const img2 = "https://img.freepik.com/premium-photo/chicken-grilled-wooden-board-realistic-3d-product-showcase-food-photography_111797-2064.jpg";
       const img3 = "https://img.freepik.com/premium-photo/spaghetti-pasta-with-tomato-sauce-cheese-basil-served-bowl-horizontal_1220-5633.jpg";
       const img4 = "https://img.freepik.com/free-photo/plate-with-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-spinach-keto-lunch-top-view_2829-16946.jpg";
       const img5 = "https://img.freepik.com/free-photo/baked-fish-dorado-with-lemon-herbs-baking-pan_2829-11060.jpg";
       const img6 = "https://img.freepik.com/premium-photo/couscous-with-turkey-tomatoes-champignon-mushrooms-avocado-wooden-background-traditional-dish-middle-east-mediterranean-region-long-wide-banner_90258-3814.jpg";
       const img7 = "https://img.freepik.com/premium-photo/delicious-fresh-home-made-burger_79782-264.jpg";

    const [menuCategoryArray, setMenuCategoryArray] = useState([]);
    const [menuCategoryArrayImage, setMenuCategoryArrayWithImage] = useState([]);
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        const imageArray123 = [img1, img2, img3, img4, img5, img6, img7];
        setImageArray(imageArray123);
    }, []);

    const [menu] = useMenu();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const menuCategory = [];
        const menuMain = [];
        for (const menuItem of menu) {
            if (!menuCategory.includes(menuItem.category)) {
                menuCategory.push(menuItem.category);
                menuMain.push({ category: menuItem.category });
            }
        }
        setMenuCategoryArray(menuMain);
    }, [menu]);


    useEffect(() => {
        const menuWithOutImg = [...menuCategoryArray];
        if (!menuWithOutImg.length == 0) {
            for (let i = 0; i < imageArray.length; i++) {
                const element = imageArray[i];
                menuWithOutImg[i].image = element;
            }
        }
        setMenuCategoryArrayWithImage(menuWithOutImg);
    }, [menuCategoryArray, imageArray]);






    return (
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>

            <Cover title={'Our Menu'} img={img123}></Cover>

            <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"}></SectionTitle>
            <div>
                {
                    menuCategoryArrayImage.map((pd, index) => <ManuCategory key={index} menuItem={pd}></ManuCategory>)
                }
            </div>
        </>
    );
};

export default Menu;