import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoCheckmarkDone } from "react-icons/io5";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { toast } from "react-toastify";
import { persianNumber } from "../common/persianNumber";

const SingleProductPage = () => {
   const { id } = useParams();
   const { state } = useLocation();
   const [selectedImage, setSelectedImage] = useState("");

   const { cart } = useCart();
   const cartDispatcher = useCartActions();

   const addToCartHandler = (product) => {
      cartDispatcher({ type: "ADD_TO_CART", payload: product });
      toast.success(`! به سبد خرید اضافه شد ${product.name}`, {
         className: "w-[16rem] sm:w-[28rem] mt-2 sm:mt-0",
      });
   };

   const checkInCart = (cart, product) => {
      const item = cart.find((p) => p.id === product.id);

      const btn = item ? (
         <Link to="/cart">
            <button className="w-full py-2 px-4 text-center text-white bg-violet-400 border border-violet-400 rounded-lg">
               مشاهده سبد خرید
            </button>
         </Link>
      ) : (
         <button
            onClick={() => addToCartHandler(state)}
            className="w-full py-2 px-4 text-center text-white bg-violet-400 border border-violet-400 rounded-lg">
            افزودن به سبد خرید
         </button>
      );

      return btn;
   };

   useEffect(() => {
      setSelectedImage("../" + state.image.default);
   }, [state]);

   const selectedImageClass = (image) => {
      console.log();
      return "../" + image === selectedImage
         ? " border border-gray-400"
         : " before:absolute before:inset-0 before:transition before:duration-500 before:hover:bg-gray-800 before:hover:bg-opacity-30 before:z-20";
   };

   const selectImage = (image) => {
      setSelectedImage("../" + image);
   };

   const imageElement = useRef();

   const applyScaleClass = (mouseEnter) => {
      imageElement.current.className = mouseEnter
         ? "w-full object-cover object-center scale-[1.12] transition duration-700"
         : "w-full object-cover object-center transition duration-700";
   };

   return (
      <section className="py-8">
         <section className="grid grid-cols-12 gap-y-4 lg:gap-y-0 lg:gap-x-4 bg-white p-4 rounded-lg">
            <section className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center gap-y-4">
               <div
                  onMouseEnter={() => applyScaleClass(true)}
                  onMouseLeave={() => applyScaleClass(false)}
                  className="w-full h-0 pb-[100%] lg:pb-[110%] relative">
                  <div className="flex absolute inset-0 rounded-lg overflow-hidden z-10">
                     <img
                        src={selectedImage}
                        alt={state.name}
                        className="w-full object-cover object-center"
                        ref={imageElement}
                     />
                  </div>
               </div>
               <div className="w-full grid grid-cols-6 gap-x-2 sm:gap-x-3 sm:px-2">
                  {state.image.collection.map((image, index) => (
                     <button
                        key={index}
                        onClick={() => selectImage(image)}
                        className="col-span-1">
                        <div className="w-full h-0 pb-[110%] relative">
                           <div
                              className={
                                 "flex absolute inset-0 rounded-lg overflow-hidden z-10" +
                                 selectedImageClass(image)
                              }>
                              <img
                                 src={"../" + image}
                                 alt={state.name + "-image" + (index + 1).toString()}
                                 className="w-full object-cover object-center"
                              />
                           </div>
                        </div>
                     </button>
                  ))}
               </div>
            </section>
            <section className="col-span-12 lg:col-span-8 flex flex-col justify-between items-start py-2 px-4">
               <section className="flex flex-col justify-start items-start">
                  <div className="text-xl text-gray-800 font-medium mb-3">
                     {"کفش " + state.faCategory + " مدل " + state.name}
                  </div>
                  <div className="text-base text-gray-600 text-justify mb-3">
                     {state.body}
                  </div>
                  <div className="mb-3">
                     <ul className="text-gray-600 text-sm">
                        {state.description.map((d, index) => (
                           <li
                              key={index}
                              className="flex justify-start items-center py-0.5">
                              <span className="mt-1 ml-1.5">
                                 <IoCheckmarkDone className="text-base" />
                              </span>
                              <span>{d.support}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="text-xl text-violet-500 font-medium"><span>{persianNumber(state.offPrice.toString(), true)}</span>
                  <span className="">&nbsp;تومان</span></div>
               </section>
               <section className="w-full mt-6 lg:mt-0">
                  {checkInCart(cart, state)}
               </section>
            </section>
         </section>
      </section>
   );
};

export default SingleProductPage;
