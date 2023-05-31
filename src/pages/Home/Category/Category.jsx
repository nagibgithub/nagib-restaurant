import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import imgSlide1 from '../../../assets/home/slide1.jpg';
import imgSlide2 from '../../../assets/home/slide2.jpg';
import imgSlide3 from '../../../assets/home/slide3.jpg';
import imgSlide4 from '../../../assets/home/slide4.jpg';
import imgSlide5 from '../../../assets/home/slide5.jpg';

const Category = () => {

    // const imgSlide1 = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-home-page/main/src/assets/home/slide1.jpg';
    // const imgSlide2 = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-home-page/main/src/assets/home/slide2.jpg';
    // const imgSlide3 = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-home-page/main/src/assets/home/slide3.jpg';
    // const imgSlide4 = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-home-page/main/src/assets/home/slide4.jpg';
    // const imgSlide5 = 'https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-home-page/main/src/assets/home/slide5.jpg';

    const imgSlides = [
        { img: imgSlide1, name: "Salad" },
        { img: imgSlide2, name: "Soups" },
        { img: imgSlide3, name: "Pizzas" },
        { img: imgSlide4, name: "Desert" },
        { img: imgSlide5, name: "Salad" },
    ];
    return (
        <div>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'order online'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={3}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    imgSlides.map(pd => <SwiperSlide className="cursor-grab active:cursor-grabbing" key={pd.index}>
                        <img src={pd.img} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">{pd.name}</h3>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Category;