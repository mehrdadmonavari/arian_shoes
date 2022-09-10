const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART": {
         const updatedCart = [...state.cart];
         const updatedItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id
         );

         if (updatedItemIndex < 0) {
            updatedCart.push({ ...action.payload, quantity: 1 });
         } else {
            const updatedItem = { ...updatedCart[updatedItemIndex] };
            updatedItem.quantity++;
            updatedCart[updatedItemIndex] = updatedItem;
         }
         
         return {
            ...state,
            cart: updatedCart,
            total: state.total + action.payload.offPrice,
         };
      }

      case "REMOVE_FROM_CART": {
         const updatedCart = [...state.cart];
         const updatedItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id
         );
         const updatedItem = { ...updatedCart[updatedItemIndex] };

         if (updatedItem.quantity > 1) {
            updatedItem.quantity--;
            updatedCart[updatedItemIndex] = updatedItem;
            return {
               ...state,
               cart: updatedCart,
               total: state.total - action.payload.offPrice,
            };
         } else {
            const filtredCart = updatedCart.filter(
               (item) => item.id !== action.payload.id
            );
            return {
               ...state,
               cart: filtredCart,
               total: state.total - action.payload.offPrice,
            };
         }
      }

      default:
         return state;
   }
};

export default cartReducer;
