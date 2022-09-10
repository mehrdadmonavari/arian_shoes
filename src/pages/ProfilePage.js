import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
   const auth = useAuth();

   const renderProfilePage = () => {
      if (auth) {
         return (
            <section className="my-8">
               <p>this is profile pages</p>
            </section>
         );
      } else {
         return <Navigate to="/" replace={true} />;
      }
   };

   return renderProfilePage();
};

export default ProfilePage;
