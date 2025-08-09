export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All";

// export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7750872&lng=75.8513938&restaurantId="

export const locationPromise = new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        (pos) => {
        resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        });
        },
        (err) => reject(err)
    );
});

export const MENU_API = async (restaurantId) => {
    const { lat, lng } = await locationPromise;
    return `https://food-bpwv.onrender.com/api/restaurantData?lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
};