import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./Providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import ProductsProvider from "./Providers/ProductsProvider";
import SingleProductPage from "./pages/SingleProductPage";
import AboutusPage from "./components/AboutusPage/AboutusPage";

function App() {
   return (
      <div>
         <AuthProvider>
            <ProductsProvider>
               <CartProvider>
                  <ToastContainer />
                  <Routes>
                     <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/:id" element={<SingleProductPage />} />
                        <Route path="/about-us" element={<AboutusPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/sign-up" element={<SignupPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                     </Route>
                  </Routes>
               </CartProvider>
            </ProductsProvider>
         </AuthProvider>
      </div>
   );
}

export default App;
