import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdPersonAddAlt } from "react-icons/md";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
   const { cart } = useCart();
   const auth = useAuth();
   const setAuth = useAuthActions();
   const [isShowMenu, setIsShowMenu] = useState(false);
   const [isShowSearch, setIsShowSearch] = useState(false);

   const searchInput = useRef();

   const navLinkClass =
      "py-2 px-2 sm:px-4 text-sm sm:text-base font-medium before:absolute before:bottom-0 before:bg-violet-700 before:h-0.5 before:right-1/2 before:w-0 before:transition-all before:duration-200 after:absolute after:bottom-0 after:bg-violet-700 after:h-0.5 after:left-1/2 after:w-0 after:transition-all after:duration-200";

   const logoutHandler = () => {
      setAuth(false);
   };

   const toggleMenu = () => {
      setIsShowSearch(false);
      setIsShowMenu((isShowMenu) => !isShowMenu);
   };

   const toggleSearch = () => {
      setIsShowMenu(false);
      setIsShowSearch((isShowSearch) => !isShowSearch);
   };

   useEffect(() => {
      if (isShowSearch) {
         searchInput.current.focus();
      }
   }, [isShowSearch]);

   const renderNav = () => {
      return auth ? (
         <>
            <li className="flex relative">
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? `${navLinkClass} text-violet-700 before:w-1/2 after:w-1/2 relative`
                        : `${navLinkClass} text-gray-700 hover:text-violet-700 hover:before:w-1/2 hover:after:w-1/2 relative`
                  }
                  to="/profile">
                  <span className="flex gap-x-2">
                     <BsPersonCircle className="text-xl sm:text-2xl" />
                     {auth.name}
                  </span>
               </NavLink>
            </li>
            <li className="flex relative">
               <button
                  onClick={() => logoutHandler()}
                  className="py-2 px-4 text-base text-gray-700 font-medium transition duration-200 hover:text-red-500">
                  <RiShutDownLine className="text-xl" />
               </button>
            </li>
         </>
      ) : (
         <>
            <li className="flex relative">
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? `${navLinkClass} text-violet-700 before:w-1/2 after:w-1/2 relative`
                        : `${navLinkClass} text-gray-700 hover:text-violet-700 hover:before:w-1/2 hover:after:w-1/2 relative`
                  }
                  to="/login">
                  <span className="flex gap-x-2">
                     <TbLogin className="text-xl sm:text-2xl" />
                     ورود
                  </span>
               </NavLink>
            </li>
            <li className="flex relative">
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? `${navLinkClass} text-violet-700 before:w-1/2 after:w-1/2 relative`
                        : `${navLinkClass} text-gray-700 hover:text-violet-700 hover:before:w-1/2 hover:after:w-1/2 relative`
                  }
                  to="/sign-up">
                  <span className="flex gap-x-2">
                     <MdPersonAddAlt className="text-xl sm:text-2xl " />
                     ثبت نام
                  </span>
               </NavLink>
            </li>
         </>
      );
   };

   return (
      <header className="">
         <section className="w-full bg-violet-100 shadow-md fixed top-0 z-30">
            <nav className="container lg:max-w-screen-xl mx-auto flex justify-between items-center py-3 px-4">
               <ul className="w-full sm:hidden flex justify-between items-center">
                  <li
                     onClick={() => toggleMenu()}
                     className="flex justify-center items-center">
                     {isShowMenu ? (
                        <AiOutlineClose className="text-gray-800 text-2xl" />
                     ) : (
                        <AiOutlineMenu className="text-gray-800 text-2xl" />
                     )}
                  </li>
                  <li className="w-[145px]">
                     <Link to="/">
                        <img
                           src="/assets/images/logo/RNG-2-2C.png"
                           alt="logo"
                           className=""
                        />
                     </Link>
                  </li>
                  <li
                     onClick={() => toggleSearch()}
                     className="flex justify-center items-center">
                     {isShowSearch ? (
                        <AiOutlineClose className="text-gray-800 text-2xl" />
                     ) : (
                        <FiSearch className="text-gray-800 text-2xl" />
                     )}
                  </li>
               </ul>
               <div
                  className={
                     (isShowMenu || isShowSearch ? "" : "hidden ") +
                     "sm:hidden absolute inset-x-0 top-[60px] bg-gray-600 bg-opacity-60 px-5 pt-3 pb-[90vh] z-20"
                  }>
                  <div
                     className={
                        (isShowMenu ? "flex" : "hidden") +
                        " justify-start items-center bg-white rounded-lg px-2 py-1"
                     }>
                     <ul>
                        <li
                           onClick={() => setIsShowMenu(false)}
                           className="flex relative">
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? `py-2 px-2 text-sm font-medium text-violet-700`
                                    : `py-2 px-2 text-sm font-medium text-gray-700 hover:text-violet-700`
                              }
                              to="/">
                              خانه
                           </NavLink>
                        </li>
                        <li
                           onClick={() => setIsShowMenu(false)}
                           className="flex relative">
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? `py-2 px-2 text-sm font-medium text-violet-700`
                                    : `py-2 px-2 text-sm font-medium text-gray-700 hover:text-violet-700`
                              }
                              to="/about-us">
                              درباره ما
                           </NavLink>
                        </li>
                        <li
                           onClick={() => setIsShowMenu(false)}
                           className="flex relative">
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? `py-2 px-2 text-sm font-medium text-violet-700`
                                    : `py-2 px-2 text-sm font-medium text-gray-700 hover:text-violet-700`
                              }
                              to="/login">
                              ورود
                           </NavLink>
                        </li>
                        <li
                           onClick={() => setIsShowMenu(false)}
                           className="flex relative">
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? `py-2 px-2 text-sm font-medium text-violet-700`
                                    : `py-2 px-2 text-sm font-medium text-gray-700 hover:text-violet-700`
                              }
                              to="/sign-up">
                              ثبت نام
                           </NavLink>
                        </li>
                        <li
                           onClick={() => setIsShowMenu(false)}
                           className="flex relative">
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? `py-2 px-2 text-sm font-medium text-violet-700`
                                    : `py-2 px-2 text-sm font-medium text-gray-700 hover:text-violet-700`
                              }
                              to="/cart">
                              سبد خرید
                           </NavLink>
                        </li>
                     </ul>
                  </div>
                  <div
                     className={
                        (isShowSearch ? "flex" : "hidden") +
                        " justify-end items-center rounded-lg px-2 py-1 relative"
                     }>
                     <input
                        ref={searchInput}
                        className="w-full px-4 py-2 bg-white rounded-full focus:outline-none"
                     />
                     <button className="absolute left-4">
                        <FiSearch className="text-gray-800 text-xl" />
                     </button>
                  </div>
               </div>
               <ul className="flex-auto hidden sm:flex justify-start items-center gap-x-1 sm:gap-x-4">
                  <li className="w-[145px] ml-2">
                     <Link to="/">
                        <img
                           src="/assets/images/logo/RNG-2-2C.png"
                           alt="logo"
                           className=""
                        />
                     </Link>
                  </li>
                  <li className="flex relative">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${navLinkClass} text-violet-700 before:w-1/2 after:w-1/2`
                              : `${navLinkClass} text-gray-700 hover:text-violet-700 hover:before:w-1/2 hover:after:w-1/2`
                        }
                        to="/">
                        خانه
                     </NavLink>
                  </li>
               </ul>
               <ul className="flex-auto hidden sm:flex justify-end items-stretch gap-x-1 sm:gap-x-4">
                  <li className="flex relative">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${navLinkClass} text-violet-700 before:w-1/2 after:w-1/2 relative`
                              : `${navLinkClass} text-gray-700 hover:text-violet-700 hover:before:w-1/2 hover:after:w-1/2 relative`
                        }
                        to="/cart">
                        <span>
                           <MdOutlineShoppingCart className="text-xl sm:text-2xl" />
                        </span>
                        {cart.length > 0 && (
                           <span className="bg-red-500 text-white text-xs text-center rounded-full px-1.5 pt-0.5 absolute top-0 left-1">
                              {cart.length}
                           </span>
                        )}
                     </NavLink>
                  </li>
                  {renderNav()}
               </ul>
            </nav>
         </section>
      </header>
   );
};

export default Navigation;
