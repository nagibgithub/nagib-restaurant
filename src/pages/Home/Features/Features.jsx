import SectionTitle from "../../SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Features.css";

const Features = () => {
    return (
        <div className="background-image bg-fixed">
            <div className="background-layer text-white py-5">
                <SectionTitle heading={'from our menu'} subHeading={'Check it out'}></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline border-0 border-b-4 border-black mt-4 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;