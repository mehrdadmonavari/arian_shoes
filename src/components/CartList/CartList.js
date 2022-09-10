import { useCartActions } from "../../Providers/CartProvider";
import CartItem from "../CartItem/CartItem";

const CartList = ({ cart }) => {
   const cartDispatcher = useCartActions();

   const incHandler = (cartItem) => {
      cartDispatcher({ type: "ADD_TO_CART", payload: cartItem });
   };

   const decHandler = (cartItem) => {
      cartDispatcher({ type: "REMOVE_FROM_CART", payload: cartItem });
   };

   return (
      <section className="grow flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg divide-y divide-gray-300 px-3">
         {cart.map((item) => (
            <CartItem key={item.id} item={item} onInc={incHandler} onDec={decHandler} />  
         ))}
      </section>
   );
};

export default CartList;
