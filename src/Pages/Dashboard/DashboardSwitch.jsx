import useEduCourseContexts from "../../Hooks/useEduCourseContexts";
import InstructorDashboard from "./InstructorDashboard/InstructorDashboard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

const DashboardSwitch = () => {
    const {role} = useEduCourseContexts()
    return (
        role === 'student' ?
            <StudentDashboard></StudentDashboard>
            :
            <InstructorDashboard></InstructorDashboard>
    );
};

export default DashboardSwitch;