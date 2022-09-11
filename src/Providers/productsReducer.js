import { initialState } from "./ProductsProvider";

const SET_FILTER = "setFilter";
const SORT_BY_LOWEST_PRICE = "sortLowestPrice";
const SORT_BY_HIGHEST_PRICE = "sortHighestPrice";
const SORT_BY_BIGGEST_DISCOUNT = "sortBiggestDiscount";
const SORT_BY_MOST_POPULAR = "sortMostPopular";
const RESETE_PRODUCTS = "resetFilter";

const productsReducer = (state, action) => {
   switch (action.type) {
      case SET_FILTER: {
         const { category, price } = action.payload;

         if (category !== "" || price.from !== "0" || price.to !== "2000000") {
            if (category !== "") {
               if (price.from !== "0" || price.to !== "2000000") {
                  const filtredProducts = initialState.filter(
                     (product) =>
                        product.category === category &&
                        product.offPrice > parseInt(price.from) &&
                        product.offPrice < parseInt(price.to)
                  );
                  return filtredProducts;
               } else {
                  const filtredProducts = initialState.filter(
                     (product) => product.category === category
                  );
                  return filtredProducts;
               }
            } else if (price.from !== "0" || price.to !== "2000000") {
               const filtredProducts = initialState.filter(
                  (product) =>
                     product.offPrice > parseInt(price.from) &&
                     product.offPrice < parseInt(price.to)
               );
               return filtredProducts;
            } else {
               return initialState;
            }
         } else {
            return initialState;
         }
      }
      case SORT_BY_LOWEST_PRICE: {
         let sortedProducts = [...state];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.offPrice < b.offPrice) {
               return -1;
            }
            if (a.offPrice > b.offPrice) {
               return 1;
            }
            return 0;
         });
         return sortedProducts;
      }
      case SORT_BY_HIGHEST_PRICE: {
         let sortedProducts = [...state];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.offPrice > b.offPrice) {
               return -1;
            }
            if (a.offPrice < b.offPrice) {
               return 1;
            }
            return 0;
         });
         return sortedProducts;
      }
      case SORT_BY_BIGGEST_DISCOUNT: {
         let sortedProducts = [...state];
         sortedProducts = sortedProducts.sort((a, b) => {
            if (a.price - a.offPrice > b.price - b.offPrice) {
               return -1;
            }
            if (a.price - a.offPrice < b.price - b.offPrice) {
               return 1;
            }
            return 0;
         });
         return sortedProducts;
      }
      case SORT_BY_MOST_POPULAR: {
         return state;
      }
      case RESETE_PRODUCTS: {
         return initialState;
      }
      default:
         return state;
   }
};

export default productsReducer;
