import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto p-4 flex flex-col gap-4 bg-[var(--color-secondary)]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;