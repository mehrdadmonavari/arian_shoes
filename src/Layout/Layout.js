import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
   return (
      <div className="">
         <Navigation />
         <main className="container lg:max-w-screen-xl mx-auto min-h-[calc(100vh-358px)] px-4 mt-[64px]">
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
