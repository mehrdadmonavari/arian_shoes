import { initialState } from "./ProductsProvider";

const SET_FILTER = "setFilter";
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
      case RESETE_PRODUCTS: {
         return initialState;
      }
      default:
         return state;
   }
};

export default productsReducer;
