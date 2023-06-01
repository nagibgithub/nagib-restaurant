import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {

    const images = [img1, img2, img3, img4, img5, img6];
    // images.map(pd => console.log(images.indexOf(pd)))

    return (
        <>
            <Carousel className="" autoPlay={true} infiniteLoop={true} interval={2000} useKeyboardArrows={true} showThumbs={true}>
                {
                    images.map((pd, index) => <img key={index} src={pd} alt="" />)
                }
            </Carousel>
        </>
    );
};

export default Banner;