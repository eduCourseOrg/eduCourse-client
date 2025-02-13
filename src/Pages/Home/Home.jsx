import Categories from "../../Components/Home/Categories";
import Counter from "../../Components/Home/Counter";
import Hero from "../../Components/Home/Hero";
import PopularCourse from "../../Components/Home/PopularCourse";
import Review from "../../Components/Home/Review";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Counter></Counter>
            <Categories></Categories>
            <PopularCourse></PopularCourse>
            <Review></Review>
        </>
    );
};

export default Home;