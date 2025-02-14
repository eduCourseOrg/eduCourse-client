import Categories from "../../Components/Home/Categories";
import Counter from "../../Components/Home/Counter";
import Faq from "../../Components/Home/Faq";
import Hero from "../../Components/Home/Hero";
import OurProcess from "../../Components/Home/OurProcess";
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
            <OurProcess></OurProcess>
            <Faq></Faq>
        </>
    );
};

export default Home;