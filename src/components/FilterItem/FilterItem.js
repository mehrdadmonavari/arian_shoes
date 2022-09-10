import { IoIosArrowBack } from "react-icons/io";
import React, { useState, useRef } from "react";

const FilterItem = ({ title, icon, children }) => {
   const [show, setShow] = useState(false);
   const valuesListRef = useRef();

   const toggleValuesList = () => {
      if (!show) {
         valuesListRef.current.className =
            "w-full flex flex-col justify-center items-start gap-y-1 px-1 py-2";
      } else {
         valuesListRef.current.className =
            "w-full hidden flex-col justify-center items-start gap-y-1 px-1 py-2";
      }
      setShow((show) => !show);
   };

   return (
      <div className="w-full">
         <div
            onClick={() => toggleValuesList()}
            className="w-full flex justify-between items-center px-1 py-2 rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100">
            <span className="text-gray-700 flex justify-center items-center">
               <span className="ml-2">{icon}</span>
               <span className="">{title}</span>
            </span>
            <span>
               <IoIosArrowBack
                  className={
                     "text-lg text-gray-700 transition duration-300" +
                     (show ? " -rotate-90" : "")
                  }
               />
            </span>
         </div>
         <div
            className="w-full hidden flex-col justify-center items-start gap-y-1 px-1 py-2"
            ref={valuesListRef}>
            {children}
         </div>
      </div>
   );
};

export default FilterItem;
