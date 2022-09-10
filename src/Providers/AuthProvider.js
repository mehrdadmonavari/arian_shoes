import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AUTH_LOCAL_STORAGE_KEY = "authState";

const AuthProvider = ({ children }) => {
   const [state, setState] = useState(false);

   useEffect(() => {
      const userData = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)) || false;
      setState(userData);
   }, []);

   useEffect(() => {
      if (state) {
         localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(state));
      } else {
         localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
      }
   }, [state]);

   return (
      <AuthContext.Provider value={state}>
         <AuthContextDispatcher.Provider value={setState}>
            {children}
         </AuthContextDispatcher.Provider>
      </AuthContext.Provider>
   );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
