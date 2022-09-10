import { Link } from "react-router-dom";
import { persianNumber } from "../../common/persianNumber";

const CartSummary = ({ cart, total }) => {
   const originalTotalPrice = (cart) => {
      return cart.length
         ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
         : 0;
   };

   return (
      <section className="w-full lg:w-72 relative">
         <section className="flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg p-3 sticky top-[96px]">
            <div className="w-full flex justify-between items-center py-1.5">
               <span className="text-base text-gray-600">قیمت کالاها</span>
               <span className="text-base text-gray-600">
                  <span>{persianNumber(originalTotalPrice(cart).toString(), true)}</span>
                  <span className="">&nbsp;تومان</span>
               </span>
            </div>
            <div className="w-full flex justify-between items-center pt-1.5 pb-3 border-b border-gray-300">
               <span className="text-base text-gray-600">تخفیف کالاها</span>
               <span className="text-base text-gray-600">
                  <span>
                     {persianNumber((originalTotalPrice(cart) - total).toString(), true)}
                  </span>
                  <span className="">&nbsp;تومان</span>
               </span>
            </div>
            <div className="w-full flex justify-between items-center py-1.5">
               <span className="text-base text-gray-800">جمع سبد خرید</span>
               <span className="text-base text-gray-800">
                  <span>{persianNumber(total.toString(), true)}</span>
                  <span className="">&nbsp;تومان</span>
               </span>
            </div>
            <div className="w-full py-2">
               <Link to="/checkout">
                  <button className="w-full py-2 px-4 text-lg text-white font-medium bg-violet-400 border-2 border-violet-400 rounded-lg transition duration-200 hover:text-violet-400 hover:bg-white">
                     ادامه سفارش
                  </button>
               </Link>
            </div>
         </section>
      </section>
   );
};

export default CartSummary;
