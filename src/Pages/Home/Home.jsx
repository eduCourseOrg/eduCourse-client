import Categories from "../../Components/Home/Categories";
import Counter from "../../Components/Home/Counter";
import Hero from "../../Components/Home/Hero";
import PopularCourse from "../../Components/Home/PopularCourse";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Counter></Counter>
            <Categories></Categories>
            <PopularCourse></PopularCourse>
        </>
    );
};

export default Home;