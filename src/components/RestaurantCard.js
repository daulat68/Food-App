import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;

  return (
    
    <div className="relative m-6 p-6 w-[380px] h-[460px] rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      {/* Image Section */}
      <div className="w-full h-56 overflow-hidden rounded-2xl">
        <img 
          className="w-full h-full object-cover"
          alt="res-logo" 
          src={CDN_URL + cloudinaryImageId} 
        />
      </div>

      {/* Content Section (Flex Grow for Equal Height) */}
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="font-bold text-2xl text-gray-800">{name}</h3>

        {/* Cuisine List with Ellipsis */}
        <p className="text-md text-gray-600 mt-1 line-clamp-2">{cuisines.join(", ")}</p>

        {/* Ratings and Cost Section */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-white bg-green-600 px-3 py-1 text-md rounded-lg">{avgRating} ★</span>
          <span className="text-gray-700 text-md font-semibold">{costForTwo}</span>
        </div>

        {/* Delivery Time */}
        <p className="text-md text-gray-500 mt-2">⏳ {sla.slaString}</p>

      </div>
    </div>
  );
};

export const withPromotedLabel = (props) => {
  return () => (
    <div className="relative">
      <span className="absolute top-3 left-3 bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
        Promoted
      </span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
