// create a context and keep some state to the context 
// and share it across other components
import { createContext, useContext, useState } from "react";
import { executeBasicAuthService, executeJWTAuthService } from "../api/ExcecuteBasicAuthService";
import { apiClient } from "../api/ApiClient";
export const AuthContext=createContext()
export const useAuth = () => useContext(AuthContext)

 const AuthProvider=({children})=>{
    const[authenticated, setAuthenticated]=useState(false)
    const[token,setToken]=useState(null)
    // const login=(username,password)=>{
    //     if (username === "sunny" && password === "sunju") {
    //         setAuthenticated(true)
    //         return true;
    //       } else {
    //         setAuthenticated(false)
    //         return false;
    //       }
    // }
    //  const login= async(username,password)=>{
    //     const baToken='Basic ' + window.btoa( username + ":" + password )
    //     try{
    //         const response=await executeBasicAuthService(baToken)
            
    //         if(response.status==200){
    //             setAuthenticated(true)
    //             setToken(baToken)
    //             apiClient.interceptors.request.use(
    //                 (config)=>{
    //                     console.log('interceptors')
    //                     config.headers.Authorization=baToken 
    //                     return config
    //             }
    //         )
    //         return true
    //     }   else{
    //             logout()
    //             return false
    //             }
    //     }
    //     catch(error){
    //         logout()
    //             return false
    //     }
    //     }
        const login= async(username,password)=>{
            try{
                const response=await executeJWTAuthService(username,password)
                const jwtToken ='Bearer '+response.data.token
                if(response.status==200){
                    setAuthenticated(true)
                    setToken(jwtToken)
                    apiClient.interceptors.request.use(
                        (config)=>{
                            console.log('interceptors')
                            config.headers.Authorization=jwtToken 
                            return config
                    }
                )
                return true
            }   else{
                    logout()
                    return false
                    }
            }
            catch(error){
                logout()
                    return false
            }
            }

    const logout=()=>{
        setAuthenticated(false);
        setToken(null)
    }
    return(
        <AuthContext.Provider value={{authenticated,login,logout,token}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;