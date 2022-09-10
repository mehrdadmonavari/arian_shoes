import { useCart, useCartActions } from "../Providers/CartProvider";
import CartList from "../components/CartList/CartList";
import CartSummary from "../components/CartSummary/CartSummary";

const CartPage = () => {
   const { cart, total } = useCart();

   const renderCart = () => {
      if (cart.length) {
         return (
            <section className="py-8 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-4">
               <CartList cart={cart} />
               <CartSummary cart={cart} total={total} />
            </section>
         );
      } else {
         return (
            <div className="w-full flex justify-center items-stretch py-8">
               <p className="w-full px-4 py-3 bg-red-100 text-base text-red-500 font-medium border border-red-500 rounded-lg">
                  هیچ محصولی در سبد خرید وجود ندارد !
               </p>
            </div>
         );
      }
   };

   return renderCart();
};

export default CartPage;
