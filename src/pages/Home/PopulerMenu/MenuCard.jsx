
const MenuCard = ({ menu }) => {

    const {
        // _id,
        name,
        recipe,
        image,
        // category,
        price
    } = menu;



    return (
        <div className="py-4 px-8 flex gap-4">
            <img className="w-[118px] rounded-b-full rounded-e-full" src={image} alt="" />
            <div>
                <h1>{name}---------</h1>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default MenuCard;