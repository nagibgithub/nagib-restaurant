import useMenu from "../../MenuApi/useMenu";
import MenuCard from "../Home/PopulerMenu/MenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const ManuCategory = ({ menuItem }) => {

    const {menu} = useMenu();
    const categoryMenu = menu.filter(pd => pd.category === menuItem.category);

    return (
        <div>
            <div className={`h-screen bg-no-repeat bg-cover bg-fixed flex justify-center items-center`} style={{ backgroundImage: `url(${menuItem.image})` }}>
                <div className="w-2/3 h-2/3 flex justify-center items-center bg-black bg-opacity-60">
                    <SectionTitle heading={menuItem.category} subHeading={'Try it hurry'} color={'white'}></SectionTitle>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                {
                    categoryMenu.map(pd => <MenuCard key={pd._id} menu={pd}></MenuCard>)
                }
            </div>
            <div className="w-full flex justify-center my-5">
                <button className="mx-auto btn btn-primary">Order Our {menuItem.category} Item</button>
            </div>
            <hr />
        </div>
    );
};

export default ManuCategory;