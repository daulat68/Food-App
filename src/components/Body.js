import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useEffect, useContext} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7750872&lng=75.8513938"
        );

        const json = await data.json();
        
        // OPTIONAL CHAINING
        const restaurants = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // Ensure restaurants is an array before setting state
        setListOfRestaurant(Array.isArray(restaurants) ? restaurants : []);
        setFilteredRestaurant(Array.isArray(restaurants) ? restaurants : []);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
    <h1>You are offline</h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

    // Conditional rendering 
    if(listOfRestaurants.length === 0){
        return (
            <Shimmer />
        )
    }

    return(
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    
                    <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md 
                            hover:bg-green-700 transition duration-300 ease-in-out 
                            focus:outline-none focus:ring-2 focus:ring-green-400 m-4"
                    onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-opacity-20 transition-transform transform hover:scale-105 text-white" onClick= 
                {()=> {
                    const filteredList = listOfRestaurants.filter((res) => 
                        res.info.avgRating>4.3)
                    setFilteredRestaurant(filteredList)
                    }}
                    >
                    Top Rated Restaurants
                </button>
                </div>

                <div className="search m-4 p-4 flex items-center space-x-2">
                    <label className="font-semibold">UserName:</label>
                    <input className="border border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={loggedInUser} 
                    onChange={(e) => { if (e.target.value.length <= 20) {
                        setUserName(e.target.value);
                        }   
                    }}
                    maxLength={20} 
                    placeholder="Enter your username"/>
            </div>

            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {
                  filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> :
                    <RestaurantCard resData={restaurant}/>}</Link>))
                }
            </div>
        </div>
    );
};

export default Body;