import useMenu from "../../MenuApi/useMenu";
import MenuCard from "../Home/PopulerMenu/MenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const ManuCategory = ({ menuItem }) => {

    console.log(menuItem.image);

    const menuImg = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-menu-and-order/main/src/assets/menu/menu-bg.jpg';

    const [menu] = useMenu();
    const categoryMenu = menu.filter(pd => pd.category === menuItem.category);

    // console.log(categoryName, menuArr);
    return (
        <div>
            {/* className={`my-5 bg-[url(${menuImg})]`} */}
            <div className={`h-screen bg-[url(${menuImg})] bg-no-repeat bg-fixed flex justify-center items-center`}>
                <div className="w-2/3 h-2/3 flex justify-center items-center bg-black bg-opacity-60">
                    <SectionTitle heading={menuItem.category} subHeading={'Try it hurry'} color={'white'}></SectionTitle>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                {
                    categoryMenu.map(pd => <MenuCard key={pd._id} menu={pd}></MenuCard>)
                }
            </div>
            <div className="w-full">
                <button className="mx-auto btn btn-primary">Order Our {menuItem.category} Item</button>
            </div>
        </div>
    );
};

export default ManuCategory;