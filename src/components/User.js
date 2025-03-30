import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 text-center">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <h3 className="text-lg text-gray-600">📍 Location: Jaipur</h3>
        <h4 className="text-md text-gray-500">📧 Contact: daulatsingh7878@gmail.com</h4>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => setCount(count + 1)}
        >
          👍 Like {count}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
          onClick={() => setCount(count - 1)}
        >
          👎 Dislike
        </button>
      </div>
    </div>
  );
};

export default User;
