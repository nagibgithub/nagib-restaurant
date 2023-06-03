import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useMenu from "../../MenuApi/useMenu";
import ShopCategoryMenuCard from "./ShopCategoryMenuCard";

const ShopCategory = () => {

    const navTitle = useParams();
    const { menu } = useMenu();


    return (
        <>
            <Helmet><title>Shop | {navTitle.id}</title></Helmet>
            <hr />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 my-10">
                {
                    menu.filter(pd => pd.category === navTitle.id).map(pd => <ShopCategoryMenuCard key={pd._id} menu={pd}></ShopCategoryMenuCard>)
                }
            </div>
        </>
    );
};

export default ShopCategory;