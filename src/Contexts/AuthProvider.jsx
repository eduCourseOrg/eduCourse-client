/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";

export const EduCourseContexts = createContext()

const AuthProvider = ({children}) => {
    const providerInfo = {name: 'Raihan'}
    return (
        <EduCourseContexts.Provider value={providerInfo}>
        {children}
        </EduCourseContexts.Provider>
    );
};

export default AuthProvider;