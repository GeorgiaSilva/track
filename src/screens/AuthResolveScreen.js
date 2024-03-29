import react, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const AuthResolveScreen = () => {
    const { tryLocalSignin} = useContext(AuthContext)
    useEffect(()=>{
        tryLocalSignin()
    },[])
    return null
}

export default AuthResolveScreen