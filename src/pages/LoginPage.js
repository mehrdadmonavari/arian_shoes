import { useFormik } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuth, useAuthActions } from "../Providers/AuthProvider";
import { loginUser } from "../services/loginService";

const initialValues = {
   email: "",
   password: "",
};

const validationSchema = yup.object({
   email: yup.string().required("ایمیل الزامی است").email("فرمت ایمیل نامعتبر"),
   password: yup.string().required("رمزعبور الزامی است"),
});

const LoginPage = () => {
   const [error, setError] = useState(null);
   const navigate = useNavigate();
   const auth = useAuth();
   const setAuth = useAuthActions();

   const onSubmit = async (values) => {
      try {
         const { data } = await loginUser(values);
         setAuth(data);
         setError(null);
         formik.handleReset();
         navigate("/", { replace: true });
      } catch (error) {
         console.log(error);
         if (error.response && error.response.data.message) {
            setError(error.response.data.message);
         }
      }
   };

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   const showErrorClass = () => {
      let errorClass =
         "w-full flex justify-center items-center text-sm text-red-500 bg-red-100 border border-red-500 rounded-lg transition-all duration-200 overflow-hidden";
      errorClass += error ? " h-[44px]" : " h-0 border-none";
      return errorClass;
   };

   const renderLoginPage = () => {
      if (auth) {
         return <Navigate to="/" replace={true} />;
      } else {
         return (
            <section className="flex justify-center items-center py-8">
               <section className="w-full sm:w-2/3 md:w-1/2 bg-white border p-6 rounded-lg shadow-lg">
                  <h2 className="text-center text-xl font-medium text-gray-800">ورود</h2>
                  <form
                     onSubmit={formik.handleSubmit}
                     className="flex flex-col gap-y-6 mt-8">
                     <div className="flex flex-col justify-start items-start gap-y-1 h-[70px]">
                        <label className="text-base text-gray-800">ایمیل</label>
                        <input
                           {...formik.getFieldProps("email")}
                           type="text"
                           name="email"
                           className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg transition duration-200 focus:outline-none focus:border-violet-400 focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-violet-400"
                        />
                        {formik.errors.email && formik.touched.email && (
                           <span className="w-full text-xs text-red-500 text-right">
                              {formik.errors.email}
                           </span>
                        )}
                     </div>
                     <div className="flex flex-col justify-start items-start gap-y-1 h-[70px]">
                        <label className="text-base text-gray-800">رمزعبور</label>
                        <input
                           {...formik.getFieldProps("password")}
                           type="password"
                           name="password"
                           className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg transition duration-200 focus:outline-none focus:border-violet-400 focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-violet-400"
                        />
                        {formik.errors.password && formik.touched.password && (
                           <span className="w-full text-xs text-red-500 text-right">
                              {formik.errors.password}
                           </span>
                        )}
                     </div>
                     <div className={showErrorClass()}>
                        <p className="font-medium">{error}</p>
                     </div>
                     <button
                        type="submit"
                        className="px-4 py-2 bg-violet-400 font-medium text-white border border-violet-400 rounded-lg transition duration-200 hover:text-violet-400 hover:bg-white disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-gray-500 disabled:hover:text-gray-500 disabled:border-gray-500"
                        disabled={!formik.isValid}>
                        تایید
                     </button>
                  </form>
               </section>
            </section>
         );
      }
   };

   return renderLoginPage();
};

export default LoginPage;
