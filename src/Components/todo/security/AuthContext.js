// create a context and keep some state to the context 
// and share it across other components
import { createContext, useContext, useState } from "react";
export const AuthContext=createContext()
export const useAuth = () => useContext(AuthContext)

 const AuthProvider=({children})=>{
    const[authenticated, setAuthenticated]=useState(false)
    const login=(username,password)=>{
        if (username === "sunny" && password === "sunju") {
            setAuthenticated(true)
            return true;
          } else {
            setAuthenticated(false)
            return false;
          }
    }
    const logout=()=>{
        setAuthenticated(false);
    }
    return(
        <AuthContext.Provider value={{authenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;