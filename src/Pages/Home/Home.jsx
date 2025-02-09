import useEduCourseContexts from "../../Hooks/UseEduCourseContexts";


const Home = () => {
const {name} = useEduCourseContexts()
    return (
        <div className="border text-5xl text-red-500">
            <h1>Home Page</h1>
            <p>Name: {name}</p>
        </div>
    );
};

export default Home;