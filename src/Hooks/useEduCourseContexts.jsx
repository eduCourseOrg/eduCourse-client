import { useContext } from "react";
import { EduCourseContexts } from "../Contexts/AuthProvider";

const useEduCourseContexts = () => {
    const eduCourseContexts = useContext(EduCourseContexts)
    return eduCourseContexts
};

export default useEduCourseContexts;