import { toast } from "react-toastify";
import { useCart, useCartActions } from "../../Providers/CartProvider";
import { useProducts } from "../../Providers/ProductsProvider";
import Product from "../Product/Product";

const Products = () => {
   const { data } = useProducts();
   const { cart } = useCart();
   const cartDispatcher = useCartActions();

   const addToCartHandler = (product) => {
      cartDispatcher({ type: "ADD_TO_CART", payload: product });
      toast.success(`! به سبد خرید اضافه شد ${product.name}`, {
         className: "w-[16rem] sm:w-[28rem] mt-2 sm:mt-0",
      });
   };

   return (
      <section className="grid grid-cols-6 gap-4">
         {data.length > 0 ? (
            data.map((product) => (
               <Product
                  key={product.id}
                  product={product}
                  cart={cart}
                  onAddToCart={addToCartHandler}
               />
            ))
         ) : (
            <div className="col-span-6 flex justify-center items-center p-4 text-base font-medium text-gray-600 bg-gray-200 border border-gray-600 rounded-lg">کالای مورد نظر شما موجود نمیباشد !</div>
         )}
      </section>
   );
};

export default Products;
