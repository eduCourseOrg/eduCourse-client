import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-[1400px] mx-auto p-4 flex flex-col gap-12">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;