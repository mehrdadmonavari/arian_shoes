import { initialState } from "./ProductsProvider";

const SET_FILTER = "setFilter";
const SET_SORT = "setSort";
const SORT_BY_LOWEST_PRICE = "sortLowestPrice";
const SORT_BY_HIGHEST_PRICE = "sortHighestPrice";
const SORT_BY_BIGGEST_DISCOUNT = "sortBiggestDiscount";
const SORT_BY_MOST_POPULAR = "sortMostPopular";
const SORT_BY_DEFAULT = "sortDefault";
const RESETE_PRODUCTS = "resetFilter";

const productsReducer = (state, action) => {
   switch (action.type) {
      case SET_FILTER: {
         const { category, price } = action.payload;

         if (category !== "" || price.from !== "0" || price.to !== "2000000") {
            if (category !== "") {
               if (price.from !== "0" || price.to !== "2000000") {
                  const filtredProducts = initialState.data.filter(
                     (product) =>
                        product.category === category &&
                        product.offPrice > parseInt(price.from) &&
                        product.offPrice < parseInt(price.to)
                  );
                  return { ...state, data: filtredProducts };
               } else {
                  const filtredProducts = initialState.data.filter(
                     (product) => product.category === category
                  );
                  return { ...state, data: filtredProducts };
               }
            } else if (price.from !== "0" || price.to !== "2000000") {
               const filtredProducts = initialState.data.filter(
                  (product) =>
                     product.offPrice > parseInt(price.from) &&
                     product.offPrice < parseInt(price.to)
               );
               return { ...state, data: filtredProducts };
            } else {
               return initialState;
            }
         } else {
            return initialState;
         }
      }
      case SET_SORT: {
         return {...state, sort: action.payload}
      }
      case SORT_BY_LOWEST_PRICE: {
         let sortedProducts = [...state.data];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.offPrice < b.offPrice) {
               return -1;
            }
            if (a.offPrice > b.offPrice) {
               return 1;
            }
            return 0;
         });
         return { ...state, sort: action.type, data: sortedProducts };
      }
      case SORT_BY_HIGHEST_PRICE: {
         let sortedProducts = [...state.data];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.offPrice > b.offPrice) {
               return -1;
            }
            if (a.offPrice < b.offPrice) {
               return 1;
            }
            return 0;
         });
         return { ...state, sort: action.type, data: sortedProducts };
      }
      case SORT_BY_BIGGEST_DISCOUNT: {
         let sortedProducts = [...state.data];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.price - a.offPrice > b.price - b.offPrice) {
               return -1;
            }
            if (a.price - a.offPrice < b.price - b.offPrice) {
               return 1;
            }
            return 0;
         });
         return { ...state, sort: action.type, data: sortedProducts };
      }
      case SORT_BY_MOST_POPULAR: {
         return state;
      }
      case SORT_BY_DEFAULT: {
         let sortedProducts = [...state.data];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.id < b.id) {
               return -1;
            }
            if (a.id > b.id) {
               return 1;
            }
            return 0;
         });
         return { ...state, sort: "", data: sortedProducts };
      }
      case RESETE_PRODUCTS: {
         return { ...state, data: initialState.data };
      }
      default:
         return state;
   }
};

export default productsReducer;
