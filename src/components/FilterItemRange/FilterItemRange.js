import { useEffect, useRef, useState } from "react";
import { persianNumber } from "../../common/persianNumber";

const FilterItemRange = ({ onChange, reset }) => {
   const [minVal, setMinVal] = useState(0);
   const [maxVal, setMaxVal] = useState(2000000);
   const [priceGap, setPriceGap] = useState(90000);

   const minRangeInput = useRef();
   const maxRangeInput = useRef();
   const progressElement = useRef();

   const changeRangeHandler = (range) => {
      if (range.type === "min") {
         setMinVal(range.value);
      } else {
         setMaxVal(range.value);
      }
      progressElement.current.style.right =
         (minVal / minRangeInput.current.max) * 100 + "%";
      progressElement.current.style.left =
         100 - (maxVal / maxRangeInput.current.max) * 100 + "%";
      onChange({
         name: "price",
         value: { from: minVal.toString(), to: maxVal.toString() },
      });
   };

   useEffect(() => {
      if (maxVal - minVal <= priceGap) {
         minRangeInput.current.value = maxVal - (priceGap + 10000);
         setMinVal(maxVal - (priceGap + 10000));
      }
   }, [minVal]);

   useEffect(() => {
      if (maxVal - minVal <= priceGap) {
         maxRangeInput.current.value = minVal + (priceGap + 10000);
         setMaxVal(minVal + (priceGap + 10000));
      }
   }, [maxVal]);

   useEffect(() => {
      if (reset) {
         setMinVal(0);
         setMaxVal(2000000);
         progressElement.current.style.right = 0;
         progressElement.current.style.left = 0;
      }
   }, [reset]);

   return (
      <div className="w-full">
         <div className="w-full flex justify-center items-center mb-4">
            <p className="text-sm text-gray-500">
               <span className="px-1">از</span>
               <span className="w-14 inline-flex px-1 ml-4 sm:ml-0 lg:ml-4">
                  {persianNumber(minVal.toString(), true)}
               </span>
               <span className="px-1">تا</span>
               <span className="w-14 inline-flex px-1">
                  {persianNumber(maxVal.toString(), true)}
               </span>
            </p>
         </div>
         <div className="h-1 rounded-full bg-gray-300 relative">
            <div
               className="h-1 rounded-full bg-violet-500 absolute left-0 right-0"
               ref={progressElement}></div>
         </div>
         <div className="relative">
            <input
               onChange={(e) =>
                  changeRangeHandler({
                     type: "min",
                     value: parseInt(e.target.value),
                  })
               }
               ref={minRangeInput}
               type="range"
               className="w-full absolute -top-1 h-1 bg-transparent pointer-events-none"
               min="0"
               max="2000000"
               step="10000"
               value={minVal}
            />
            <input
               onChange={(e) =>
                  changeRangeHandler({
                     type: "max",
                     value: parseInt(e.target.value),
                  })
               }
               ref={maxRangeInput}
               type="range"
               className="w-full absolute -top-1 h-1 bg-transparent pointer-events-none"
               min="0"
               max="2000000"
               step="10000"
               value={maxVal}
            />
         </div>
      </div>
   );
};
export default FilterItemRange;
