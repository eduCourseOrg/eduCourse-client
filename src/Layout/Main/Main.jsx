import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Main = () => {
  return (
    <div className="mx-auto p-4 flex flex-col gap-4 bg-[var(--color-secondary)]">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
