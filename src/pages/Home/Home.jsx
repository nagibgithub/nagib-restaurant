import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Features from "./Features/Features";
import PopulerMenu from "./PopulerMenu/PopulerMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Features></Features>
        </div>
    );
};

export default Home;