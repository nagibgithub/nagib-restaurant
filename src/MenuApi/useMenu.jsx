import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [menuCategory, setMenuCategory] = useState([]);


    useEffect(() => {
        setLoading(true)
        fetch('https://bistro-boss-server-seven.vercel.app/menu').then(res => res.json()).then(data => {
            setMenu(data);


            setLoading(false)
        });
    }, []);
    useEffect(() => {
        const menuCategoryTempo = [];
        for (const menuCategory of menu) !menuCategoryTempo.includes(menuCategory.category) && menuCategoryTempo.push(menuCategory.category);
        setMenuCategory(menuCategoryTempo);
    }, [menu]);



    return {menu, loading, menuCategory};

};

export default useMenu;