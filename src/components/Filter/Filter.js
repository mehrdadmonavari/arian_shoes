import { useEffect, useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImTree } from "react-icons/im";
import { IoPricetags } from "react-icons/io5";
import FilterItem from "../FilterItem/FilterItem";
import { useProducts, useProductsActions } from "../../Providers/ProductsProvider";
import FilterItemCheckbox from "../FilterItemCheckbox/FilterItemCheckbox";
import FilterItemRange from "../FilterItemRange/FilterItemRange";

const Filter = () => {
   const [filterItems, setFilterItems] = useState({
      category: "",
      price: { from: "0", to: "2000000" },
   });
   const [isFilterActive, setIsFilterActive] = useState(false);
   const [resetRange, setResetRange] = useState(false);
   const { sort } = useProducts();
   const productDispatcher = useProductsActions();

   const changeFilterHandler = ({ name, value }) => {
      setFilterItems((filterItems) => {
         return { ...filterItems, [name]: value };
      });
      setResetRange(false);
   };

   useEffect(() => {
      if (
         filterItems.category !== "" ||
         filterItems.price.from !== "0" ||
         filterItems.price.to !== "2000000"
      ) {
         setIsFilterActive(true);
      } else {
         setIsFilterActive(false);
      }
   }, [filterItems]);

   const setFilterHandler = () => {
      if (
         filterItems.category !== "" ||
         filterItems.price.from !== "0" ||
         filterItems.price.to !== "2000000"
      ) {
         productDispatcher({ type: "setFilter", payload: filterItems });
         if (sort !== "") {
            productDispatcher({ type: sort });
         }
      }
   };

   const resetFilterHandlet = () => {
      productDispatcher({ type: "resetFilter" });
      setFilterItems({
         category: "",
         price: { from: "0", to: "2000000" },
      });
      setResetRange(true);
   };

   return (
      <section className="bg-white flex flex-col justify-center items-center py-3 px-4 rounded-lg shadow-lg md:sticky md:top-[96px] md:z-30">
         <div className="w-full flex justify-start items-center mb-2">
            <span className="ml-2">
               <TbAdjustmentsHorizontal className="text-2xl text-violet-500" />
            </span>
            <span className="text-xl text-violet-500">فیلتر ها</span>
         </div>
         <FilterItem title="دسته بندی" icon={<ImTree />}>
            <FilterItemCheckbox
               label="پیاده روی"
               value="wallking"
               name="category"
               filterItems={filterItems}
               onChange={changeFilterHandler}
            />
            <FilterItemCheckbox
               label="دویدن"
               value="running"
               name="category"
               filterItems={filterItems}
               onChange={changeFilterHandler}
            />
            <FilterItemCheckbox
               label="بسکتبال"
               value="basketball"
               name="category"
               filterItems={filterItems}
               onChange={changeFilterHandler}
            />
            <FilterItemCheckbox
               label="فوتبال"
               value="soccer"
               name="category"
               filterItems={filterItems}
               onChange={changeFilterHandler}
            />
         </FilterItem>
         <FilterItem title="قیمت" icon={<IoPricetags />}>
            <FilterItemRange onChange={changeFilterHandler} reset={resetRange} />
         </FilterItem>
         <div className="w-full flex flex-col justify-center items-stretch gap-y-2 mt-2">
            <button
               onClick={() => setFilterHandler()}
               disabled={!isFilterActive}
               className="w-full px-4 py-2 bg-violet-400 text-sm text-white border border-violet-400 rounded-lg transition duration-200 hover:bg-white hover:text-violet-400 disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-gray-500 disabled:hover:text-gray-500 disabled:border-gray-500">
               اعمال فیلتر
            </button>
            <button
               onClick={() => resetFilterHandlet()}
               disabled={!isFilterActive}
               className="w-full px-4 py-2 bg-red-400 text-sm text-white border border-red-400 rounded-lg transition duration-200 hover:bg-white hover:text-red-400 disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-gray-500 disabled:hover:text-gray-500 disabled:border-gray-500">
               حذف فیلتر
            </button>
         </div>
      </section>
   );
};

export default Filter;
