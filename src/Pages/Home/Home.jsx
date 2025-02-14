import Categories from "../../Components/Home/Categories";
import Counter from "../../Components/Home/Counter";
import Hero from "../../Components/Home/Hero";
import OurProcess from "../../Components/Home/OurProcess";
import PopularCourse from "../../Components/Home/PopularCourse";
import Review from "../../Components/Home/Review";
import TestSlide from "../../Components/Home/testSlide";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Counter></Counter>
            <Categories></Categories>
            <PopularCourse></PopularCourse>
            <Review></Review>
            <TestSlide></TestSlide>
            <OurProcess></OurProcess>
        </>
    );
};

export default Home;