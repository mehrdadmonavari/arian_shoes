import { IoCheckmarkDone } from "react-icons/io5";
import { persianNumber } from "../../common/persianNumber";

const CartItem = ({ item, onInc, onDec }) => {
   const { id, name, image, offPrice, description, quantity } = item;

   return (
      <section key={id} className="w-full flex flex-col sm:flex-row justify-start items-start gap-x-4 py-3">
         <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px]">
            <div className="w-full h-0 pb-[70%] relative rounded-lg overflow-hidden">
               <div className="flex absolute inset-0">
                  <img
                     src={image.default}
                     alt={name}
                     className="w-full object-cover object-center"
                  />
               </div>
            </div>
         </div>

         <div className="grow self-stretch flex flex-col sm:flex-row md:flex-col justify-between items-start sm:items-end md:items-start gap-y-4 md:gap-y-2 lg:gap-y-0 py-4 sm:py-2">
            <div className="flex flex-col justify-center items-start gap-y-2">
               <div>
                  <p className="text-xl text-gray-800 font-medium">{name}</p>
               </div>
               <div>
                  <ul className="text-gray-600 text-sm">
                     {description.map((d, index) => (
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
               <div className="text-base text-gray-800">
                  <span className="ml-2">قیمت کالا:</span>
                  <span>
                     <span>{persianNumber(offPrice.toString(), true)}</span>
                     <span className="">&nbsp;تومان</span>
                  </span>
               </div>
            </div>
            <div className="flex flex-row-reverse justify-center items-center border border-gray-400 divide-x divide-gray-400 rounded-lg overflow-hidden">
               <button
                  onClick={() => onDec(item)}
                  className="w-8 h-8 flex justify-center items-center font-medium cursor-pointer transition duration-200 hover:bg-gray-300 hover:text-white">
                  <span>-</span>
               </button>
               <div className="w-8 h-8 flex justify-center items-center">
                  <span>{persianNumber(quantity.toString())}</span>
               </div>
               <button
                  onClick={() => onInc(item)}
                  className="w-8 h-8 flex justify-center items-center font-medium cursor-pointer transition duration-200 hover:bg-gray-300 hover:text-white">
                  <span>+</span>
               </button>
            </div>
         </div>
      </section>
   );
};

export default CartItem;
