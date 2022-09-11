import { useEffect, useState } from "react";
import { HiSortDescending } from "react-icons/hi";
import { useProductsActions } from "../../Providers/ProductsProvider";

const sortNames = [
   { name: "", label: "پیش فرض" },
   { name: "sortLowestPrice", label: "کمترین قیمت" },
   { name: "sortHighestPrice", label: "بیشترین قیمت" },
   { name: "sortBiggestDiscount", label: "بیشترین تخفیف" },
   { name: "sortMostPopular", label: "محبوب ترین" },
];

const SortAndSearch = () => {
   const [sort, setSort] = useState("");
   const productsDispatcher = useProductsActions();

   const sortHandler = (sort) => {
      setSort(sort);
      // switch (sort) {
      //    case "lowestPrice": {
      //       productsDispatcher({ type: "SortLowestPrice" });
      //       break;
      //    }
      //    case "highestPrice": {
      //       break;
      //    }
      //    case "biggestDiscount": {
      //       break;
      //    }
      //    case "mostPopular": {
      //       break;
      //    }
      //    default:
      //       console.log("Invalid Sort value!");
      //       break;
      // }
   };

   useEffect(() => {
      if (sort !== "") {
         productsDispatcher({ type: sort });
      }
   }, [sort, productsDispatcher]);

   const renderSortBtn = ({ name, label }) => {
      if (sort === name) {
         return (
            <button
               key={name}
               className="text-sm text-gray-800 font-medium relative px-3">
               <span>{label}</span>
               <span className="w-1 h-1 bg-violet-500 rounded-full absolute"></span>
            </button>
         );
      } else {
         return (
            <button
               key={name}
               onClick={() => sortHandler(name)}
               className="text-sm text-gray-500 relative px-3 transition duration-200 hover:text-violet-500">
               <span>{label}</span>
            </button>
         );
      }
   };

   return (
      <section className="bg-white flex justify-between items-center py-3 px-4 rounded-lg mb-4">
         <section className="flex justify-start items-center">
            <div className="flex items-center text-violet-500 ml-2">
               <span>
                  <HiSortDescending className="text-3xl pt-0.5 ml-1 h-[28px]" />
               </span>
               <span className="text-lg">مرتب سازی</span>
            </div>
            <ul className="flex justify-center items-center gap-x-1">
               {sortNames.map((item) => renderSortBtn(item))}
               {/* <li>
                  <button
                     onClick={() => sortHandler("")}
                     className="text-sm text-gray-800 font-medium relative px-3">
                     <span>پیش فرض</span>
                     <span className="w-1 h-1 bg-violet-500 rounded-full absolute"></span>
                  </button>
               </li>
               <li>
                  <button
                     onClick={() => sortHandler("SortLowestPrice")}
                     className="text-sm text-gray-500 relative px-3 transition duration-200 hover:text-violet-500">
                     <span>کمترین قیمت</span>
                  </button>
               </li>
               <li>
                  <button
                     onClick={() => sortHandler("SortHighestPrice")}
                     className="text-sm text-gray-500 relative px-3 transition duration-200 hover:text-violet-500">
                     <span>بیشترین قیمت</span>
                  </button>
               </li>
               <li>
                  <button
                     onClick={() => sortHandler("SortBiggestDiscount")}
                     className="text-sm text-gray-500 relative px-3 transition duration-200 hover:text-violet-500">
                     <span>بیشترین تخفیف</span>
                  </button>
               </li>
               <li>
                  <button
                     onClick={() => sortHandler("SortMostPopular")}
                     className="text-sm text-gray-500 relative px-3 transition duration-200 hover:text-violet-500">
                     <span>محبوب ترین</span>
                  </button>
               </li> */}
            </ul>
         </section>
         <section></section>
      </section>
   );
};

export default SortAndSearch;
