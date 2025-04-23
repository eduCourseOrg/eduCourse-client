import { useOutletContext } from "react-router-dom";
const Step2 = () => {
    const [instructorInfo, setInstructorInfo] = useOutletContext();
    return (
        <div>
            Step-2
        </div>
    );
};

export default Step2;