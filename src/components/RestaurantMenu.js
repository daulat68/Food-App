import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu= () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <ShimmerMenu />;

  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  const itemCards = resInfo?.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuCategory = itemCards.find(
    (item) => item?.card?.card?.itemCards 
  );
  
  const menuItems = menuCategory?.card?.card?.itemCards || [];
    
    const regularCards = resInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
    const categories = regularCards.filter(
      (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

return (
  <div className="text-center mt-10">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
    {categories.map((category, index) => <RestaurantCategory key= {category?.card?.card?.title} 
    data= {category?.card?.card}
    showItems={index === showIndex ? true: false}
    setShowIndex={() => setShowIndex((prev) => (prev === index ? null : index))}
    />)}
  </div>
);

}
export default RestaurantMenu;


