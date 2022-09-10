import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { persianNumber } from "../../common/persianNumber";

const Product = ({ product, cart, onAddToCart }) => {
   const { id, name, image, faCategory } = product;

   const imageElement = useRef();
   const cartBtnElement = useRef();

   const applyScaleClass = (mouseEnter) => {
      imageElement.current.className = mouseEnter
         ? "w-full object-cover object-center scale-[1.12] transition duration-700"
         : "w-full object-cover object-center transition duration-700";
   };

   const applyCartBtnClass = (mouseEnter) => {
      cartBtnElement.current.className = mouseEnter
         ? "absolute inset-0 flex justify-center items-center bg-violet-400 z-20 transition duration-300 translate-y-10"
         : "absolute inset-0 flex justify-center items-center bg-violet-400 z-20 transition duration-300";
   };

   const showPrice = (item) => {
      if (item.price === item.offPrice) {
         return (
            <>
               <span className="text-gray-600 text-lg font-medium">
                  <span>{persianNumber(item.offPrice.toString(), true)}</span>
                  <span className="">&nbsp;تومان</span>
               </span>
            </>
         );
      } else {
         return (
            <span className="relative">
               <span className="text-red-400 text-xs font-medium line-through absolute -top-3 -left-0">
                  <span>{persianNumber(item.price.toString(), true)}</span>
                  <span className="">&nbsp;تومان</span>
               </span>

               <span className="text-gray-600 text-lg font-medium">
                  <span>{persianNumber(item.offPrice.toString(), true)}</span>
                  <span className="">&nbsp;تومان</span>
               </span>
            </span>
         );
      }
   };

   const checkInCart = (cart, product) => {
      const item = cart.find((p) => p.id === product.id);

      const btn = item ? (
         <Link to="/cart">
            <button className="relative w-14 h-10 bg-black text-white rounded-br-2xl rounded-tl-2xl overflow-hidden">
               <span className="absolute inset-0 flex justify-center items-center bg-transparent z-10">
                  <MdOutlineAddShoppingCart className="text-lg" />
               </span>
            </button>
         </Link>
      ) : (
         <button
            onClick={() => onAddToCart(product)}
            onMouseEnter={() => applyCartBtnClass(true)}
            onMouseLeave={() => applyCartBtnClass(false)}
            className="relative w-14 h-10 bg-black text-white rounded-br-2xl rounded-tl-2xl overflow-hidden">
            <span className="absolute inset-0 flex justify-center items-center bg-transparent z-10">
               <MdOutlineAddShoppingCart className="text-lg" />
            </span>
            <span
               ref={cartBtnElement}
               className="absolute inset-0 flex justify-center items-center bg-violet-400 z-20 transition duration-300">
               <HiOutlinePlus className="text-2xl" />
            </span>
         </button>
      );

      return btn;
   };

   return (
      <section
         onMouseEnter={() => applyScaleClass(true)}
         onMouseLeave={() => applyScaleClass(false)}
         className="bg-white col-span-6 sm:col-span-3 lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
         <div className="w-full h-0 pb-[65%] relative">
            <button className="absolute z-20 top-2 right-2">
               <span className="flex justify-center items-center bg-white p-2 rounded-full">
                  <FaHeart className="text-gray-200" />
               </span>
            </button>
            <div className="flex absolute inset-0 overflow-hidden z-10">
               <img
                  src={image.default}
                  alt={name}
                  className="w-full object-cover object-center"
                  ref={imageElement}
               />
            </div>
         </div>
         <div className="py-2 px-4">
            <div className="flex flex-col justify-center items-center">
               <p className="w-full text-right text-sm text-gray-500">{faCategory}</p>
               <p className="w-full text-right text-lg text-gray-800 tracking-tight mt-2">
                  {name}
               </p>
               <Link
                  className="w-full flex justify-start items-center mt-4"
                  to={"/products/" + id}
                  state={product}>
                  <span className="text-orange-400">مشاهده محصول</span>
                  <span className="text-orange-400 mr-1">
                     <BsArrowLeft className="text-xl" />
                  </span>
               </Link>
               <div className="w-full flex justify-between items-center mt-6">
                  {checkInCart(cart, product)}
                  <p className="flex flex-row justify-end items-center">
                     {showPrice(product)}
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Product;
