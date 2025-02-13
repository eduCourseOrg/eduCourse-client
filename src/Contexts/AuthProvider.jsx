/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext,useState  } from "react";
import app from "../Firebase/firebase.config";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";

export const EduCourseContexts = createContext()
const eduAuth = getAuth(app);
const AuthProvider = ({children}) => {
    

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAccount= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(eduAuth,email,password)
    }

    
    const providerInfo = {createAccount,name: 'Raihan'}
   
    return (
        <EduCourseContexts.Provider value={providerInfo}>
        {children}
        </EduCourseContexts.Provider>
    );
};

export default AuthProvider;