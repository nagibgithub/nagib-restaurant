import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://bistro-boss-server-seven.vercel.app/reviews').then(res => res.json()).then(data => {
            setTestimonials(data);
            setLoading(false);
        });
    }, []);
    // console.log(testimonials.length);

    return (
        <div>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'Testimonials'}></SectionTitle>
            {
                loading ?
                    <>
                        <p className="font-black text-5xl text-center">Loading Data <FontAwesomeIcon className="text-5xl" icon={faCircleNotch} spin /></p>
                    </>
                    :
                    <>
                        <h1 className="text-5xl">{testimonials.length}</h1>
                    </>
            }
        </div>
    );
};

export default Testimonials;