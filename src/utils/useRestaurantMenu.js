import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId])

    const fetchData = async () => {
    try {
            const menuUrl = await MENU_API(resId);
            const data = await fetch(menuUrl);
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return resInfo;
    
}

export default useRestaurantMenu;