import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-6">🛒 Shopping Cart</h1>
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                {cartItems.length === 0 ? (
                    <h2 className="text-lg text-gray-500 text-center">
                        Your cart is empty. Add some items!
                    </h2>
                    ) : 
                    (
                    <>
                        <button 
                            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
                            onClick={handleClearCart}>
                                🗑️ Clear Cart
                        </button>
                        <ItemList items={cartItems} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
