# Food App

## Description
This is a food ordering application built using **React** and **Parcel**. It fetches restaurant data from an API and displays restaurant menus, categories, and food items. Users can check online status, log in/out, and view their details.

## Features
- 📦 **Built with Parcel** for fast bundling.
- 🔥 **Shimmer UI** for loading placeholders.
- 🌐 **Online Status Indicator**.
- 👤 **User Context API, Redux and ReduxToolkit** for global state management.
- 📍 **Dynamic Routing** using React Router.
- 🍽️ **Fetch & Display Restaurant Menus** from an API.
- 📌 **Higher-Order Component (HOC)** for promotional tags.
- 🛒 **Add to Cart Button**.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Bundler:** Parcel
- **State Management:** React Context API and Redux
- **Routing:** React Router DOM

## Installation & Setup
### Clone the repository
```sh
git clone https://github.com/daulat68/Food-App.git
cd Food-App
```

### Install dependencies
```sh
npm install
```

### Start the development server
```sh
npm start
```
Parcel will start the dev server and hot-reload changes.

## Project Structure
```
Food-App/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── GroceryComponent.js
│   │   ├── Header.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantCategory.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── ShimmerMenu.js
│   │   ├── User.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── appStore.js
│   │   ├── cartSlice.js
│   │   ├── useOnlineStatus.js
│   │   ├── useRestaurantMenu.js
│   │   ├── UserContext.js
│   ├── App.js
├── index.css
├── index.html
├── package.json
├── README.md
```

## API Used
- The app fetches restaurant data from an API using `fetch()`.
- **API Endpoint:** `MENU_API + resId`

## Available Scripts
```sh
npm start   # Starts the development server
npm run build   # Creates a production build
```

## Visit Site
https://food-app-by-daulat.netlify.app/