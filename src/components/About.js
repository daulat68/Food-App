import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";

const AboutUs = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-10 pt-0">
      <div className="w-full text-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        
        {/* Logged-In User Section */}
        <div className="m-6">
          <h3 className="text-xl font-semibold text--700">Logged-In User</h3>
          <h2 className="text-2xl font-bold text-blue-600">{loggedInUser}</h2>
        </div>

        {/* Description Section */}
        <p className="text-lg text-gray-800">
          Welcome to our platform! We are dedicated to providing the best services and ensuring an amazing user experience. Our goal is to connect people with top-quality products and services effortlessly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10">Our Mission</h3>
        <p className="text-lg text-gray-800">
          Our mission is to simplify your daily life by offering seamless solutions, innovative products, and excellent customer service. We strive to make a difference in every interaction.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10">Why Choose Us?</h3>
        <ul className="text-lg text-gray-800 list-disc mt-2 text-left mx-auto max-w-md">
          <li>High-quality and reliable services</li>
          <li>Customer-focused approach</li>
          <li>Innovative solutions for everyday needs</li>
          <li>Seamless and user-friendly experience</li>
        </ul>

        {/* User Component */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-3">Meet Our Users</h3>
          <User name={"Daulat"} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

