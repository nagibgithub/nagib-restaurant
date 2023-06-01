import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Features from "./Features/Features";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;