import { useDispatch, useSelector } from "react-redux";
import RestroitemList from "./RestroitemsList";
import { clearCart } from "../utils/cartSlice";
const CartPage = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartfn = (e) => {
   
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <div className="text-center font-bold text-2xl m-4 p-4">Cart</div>
      <div className="flex items-center justify-center">
        <button
          className="bg-black text-white p-1 hover:bg-blue-600 mx-24 "
          onClick={() => clearCartfn()}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <RestroitemList items={cart} />
      </div>
      {cart.length === 0 && <div className="text-center font-bold text-2xl my-12">Cart is Empty!Please Enter Some Items!!</div>}
    </div>
  );
};

export default CartPage;
