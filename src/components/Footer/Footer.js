import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { SiAparat } from "react-icons/si";

const Footer = () => {
   const footerLinkClass =
      "transition duration-300 hover:-translate-x-2 hover:text-gray-400";

   const footerTitleClass =
      "w-auto md:w-full text-lg text-white font-semibold border-b-2 border-violet-600 pb-1 pr-2 pl-20 md:pl-14";

   return (
      <footer className="w-full bg-gray-800">
         <section className="container lg:max-w-screen-xl mx-auto">
            <section className="flex flex-wrap justify-between items-start gap-y-10 gap-x-4 px-8 pt-16 pb-10">
               <section className="w-full lg:w-[30%] flex flex-col justify-center text-justify gap-y-2">
                  <div className="w-[220px]">
                     <img src="/assets/images/logo/RNG-2-2C.png" alt="bottom-logo" />
                  </div>
                  <div className="text-gray-50 text-sm leading-6 font-light w-full">
                     مرکز خرید آنلاین آرین شوز فعالیت خود را در زمینه پوشاک به ‌صورت تخصصی
                     از سال ۱۳۹۳ آغاز نمود و طی این سال‌ها توانسته ضمن همکاری با بیش از
                     ۴۰۰ برند ایرانی و بین‌المللی، در مسیر بهبود تجربه خرید آنلاین پوشاک
                     در ایران گام بردارد. مهم‌ترین رسالت آرین شوز بهبود کیفیت سبک زندگی
                     است که رضایت اکثریت مشتریان گرامی از این فروشگاه اینترنتی گواهی بر
                     این ادعاست؛ رضایتی که پشتوانه‌ای استوار برای تحقق دیگر اهداف بلند مدت
                     آرین شوز است.
                  </div>
               </section>
               <section className="flex flex-col justify-center items-center md:items-start gap-y-6 mx-auto">
                  <h3 className={footerTitleClass}>دسته بندی ها</h3>
                  <div className="w-full md:w-auto">
                     <ul className="flex flex-col justify-center items-start gap-y-2 text-gray-50 text-sm pr-2">
                        <Link to="/">
                           <li className="transition text-center duration-300 hover:-translate-x-2 hover:text-gray-400">
                              پیاده روی
                           </li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>دویدن</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>بسکتبال</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>فوتبال</li>
                        </Link>
                     </ul>
                  </div>
               </section>
               <section className="flex flex-col justify-center items-center md:items-start gap-y-6 mx-auto">
                  <h3 className={footerTitleClass}>دسترسی سریع</h3>
                  <div className="w-full md:w-auto">
                     <ul className="flex flex-col justify-center items-start gap-y-2 text-gray-50 text-sm pr-2">
                        <Link to="/">
                           <li className={footerLinkClass}>خانه</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>محصولات</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>سبد خرید</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>ورود</li>
                        </Link>
                        <Link to="/">
                           <li className={footerLinkClass}>ثبت نام</li>
                        </Link>
                     </ul>
                  </div>
               </section>
               <section className="flex flex-col justify-center items-center md:items-start gap-y-6 mx-auto">
                  <h3 className={footerTitleClass}>مارا دنبال کنید</h3>
                  <div className="w-full md:w-auto">
                     <ul className="flex justify-center items-start gap-x-2 text-gray-50 text-sm px-3">
                        <li className="p-2 border border-gray-50 rounded-full cursor-pointer transition duration-300 hover:border-gray-400 hover:text-gray-400">
                           <IoLogoInstagram className="text-xl" />
                        </li>
                        <li className="p-2 border border-gray-50 rounded-full cursor-pointer transition duration-300 hover:border-gray-400 hover:text-gray-400">
                           <IoLogoTwitter className="text-xl" />
                        </li>
                        <li className="p-2 border border-gray-50 rounded-full cursor-pointer transition duration-300 hover:border-gray-400 hover:text-gray-400">
                           <IoLogoLinkedin className="text-xl" />
                        </li>
                        <li className="p-2 border border-gray-50 rounded-full cursor-pointer transition duration-300 hover:border-gray-400 hover:text-gray-400">
                           <SiAparat className="text-xl" />
                        </li>
                     </ul>
                  </div>
               </section>
            </section>
         </section>
      </footer>
   );
};

export default Footer;
