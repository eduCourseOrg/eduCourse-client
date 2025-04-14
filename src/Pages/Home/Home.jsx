import CustomVideoPlayer from "../../Components/CustomVideoPlayer/CustomVideoPlayer";
import Categories from "../../Components/Home/Categories";
import Counter from "../../Components/Home/Counter";
import Faq from "../../Components/Home/Faq";
import Hero from "../../Components/Home/Hero";
import OurProcess from "../../Components/Home/OurProcess";
import PopularCourse from "../../Components/Home/PopularCourse";
import Review from "../../Components/Home/Review";
// import InputField from "../../Components/InputField";

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
      <CustomVideoPlayer src="/video/VID_20221014_053436.mp4" />
      {/* <InputField></InputField> */}
      {/* <CustomDropdown></CustomDropdown> */}
    </>
  );
};

export default Home;
