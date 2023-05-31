import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";

const PopulerMenu = () => {

    const [menus, setMenu] = useState([]);
    const [slice, setSlice] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://bistro-boss-server-seven.vercel.app/menu').then(res => res.json()).then(data => {
            {
                !slice ?
                    setMenu(data.slice(0, 6))
                    :
                    setMenu(data)
            }
            setLoading(false)
        });
    }, [slice]);

    const handleSlice = () => {
        setSlice(!slice);
        setLoading(true)

    }


    return (
        <div>
            <SectionTitle heading={'Check it out'} subHeading={'From out menu'}></SectionTitle>
            <div>

                {
                    loading ?
                        <>
                            <p className="font-black text-5xl text-center">Loading Data <FontAwesomeIcon className="text-5xl" icon={faCircleNotch} spin /></p>
                        </>
                        :
                        <div className="grid md:grid-cols-2 gap-4">
                            {
                                menus.map(pd => <MenuCard key={pd._id} menu={pd}></MenuCard>)
                            }
                        </div>
                }
            </div>
            <div className="flex justify-center my-5">
                <button className="btn" onClick={handleSlice}>{!slice ? "View All " : "Less View "}Menu</button>
            </div>
        </div>
    );
};

export default PopulerMenu;