import { useEffect, useState } from "react";
import { HiSortDescending } from "react-icons/hi";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
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
   const [searchParams, setSearchParams] = useSearchParams();

   const sortHandler = (sort) => {
      if (sort !== "") {
         if (
            sort.match(
               /sortLowestPrice|sortHighestPrice|sortBiggestDiscount|sortMostPopular/g
            )
         ) {
            setSearchParams({ sort: sort });
            setSort(sort);
            productsDispatcher({ type: sort });
         } else {
            console.log("invalid sort value!");
            searchParams.delete("sort");
            setSearchParams(searchParams);
         }
      } else {
         searchParams.delete("sort");
         setSearchParams(searchParams);
         setSort(sort);
         productsDispatcher({ type: "sortDefault" });
      }
   };

   useEffect(() => {
      const sortParams = searchParams.get("sort");
      if (sortParams) {
         if (
            sortParams.match(
               /sortLowestPrice|sortHighestPrice|sortBiggestDiscount|sortMostPopular/g
            )
         ) {
            setSort(sortParams);
            productsDispatcher({ type: sortParams });
         } else {
            searchParams.delete("sort");
         }
      }
   }, [searchParams, productsDispatcher]);

   const renderSortBtn = ({ name, label }) => {
      if (sort === name) {
         return (
            <button
               key={name}
               className="text-sm text-gray-800 font-medium relative px-2 md:px-0 lg:px-3">
               <span>{label}</span>
               <span className="w-1 h-1 bg-violet-500 rounded-full absolute"></span>
            </button>
         );
      } else {
         return (
            <button
               key={name}
               onClick={() => sortHandler(name)}
               className="text-sm text-gray-500 relative px-2 md:px-0 lg:px-3 transition duration-200 hover:text-violet-500">
               <span>{label}</span>
            </button>
         );
      }
   };

   return (
      <section className="bg-white shadow-lg flex justify-between items-center py-3 px-4 rounded-lg mb-4">
         <section className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center gap-y-4 lg:gap-y-0">
            <div className="flex items-center text-violet-500 ml-2">
               <span>
                  <HiSortDescending className="text-3xl pt-0.5 ml-1 h-[28px]" />
               </span>
               <span className="text-lg">مرتب سازی</span>
            </div>
            <ul className="w-full lg:w-auto flex flex-wrap md:flex-nowrap justify-around md:justify-between lg:justify-center items-center gap-y-2 md:gap-y-0 lg:gap-x-1">
               {sortNames.map((item) => renderSortBtn(item))}
            </ul>
         </section>
      </section>
   );
};

export default SortAndSearch;
