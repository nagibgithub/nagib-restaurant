
const ShopCategoryMenuCard = ({ menu }) => {

    const {
        image,
        name,
        price,
        recipe,
        _id
    } = menu;

    const handleAddToCart = id =>{
        console.log(id);
    }

    return (
        <div className="border rounded-xl shadow-lg p-5 flex flex-col justify-between bg-yellow-100">
            <div>
                <div className="relative">
                    <img className="" src={image} alt="" />
                    <h3 className="absolute top-3 right-3 z-20 rounded-md py-1 px-4 bg-gray-800 font-semibold text-white max-w-max">${price}</h3>
                </div>
                <div className="text-center my-5">
                    <h1 className="font-bold mb-2 text-lg">{name}</h1>
                    <p>{recipe}</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <button onClick={()=>handleAddToCart(_id)} className="btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopCategoryMenuCard;