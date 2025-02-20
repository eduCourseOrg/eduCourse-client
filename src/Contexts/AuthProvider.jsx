/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const EduCourseContexts = createContext()
const eduAuth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAccount= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(eduAuth,email,password)
    }
     const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(eduAuth, email, password);
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(eduAuth, GoogleProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(eduAuth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(eduAuth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    
    const providerInfo = {createAccount,logIn,user,loading,googleLogin,logOut}
   
    return (
        <EduCourseContexts.Provider value={providerInfo}>
        {children}
        </EduCourseContexts.Provider>
    );
};

export default AuthProvider;