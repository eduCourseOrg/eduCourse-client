import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
const CreateCourse = () => {
    return (
        <section className="w-full h-screen flex flex-col">
            <nav className="w-full h-[10vh] bg-primary flex items-center justify-between text-secondary text-md gap-3 px-3">
                <Link to={"/dashboard"} className="w-[13%] h-full border-r border-gray-100/30 flex items-center justify-center cursor-pointer">
                    <IoIosArrowRoundBack className="text-3xl"/>
                    <span className="text-sm">Back to Dashboard</span>
                </Link>
                <div className="flex items-center h-full px-3">
                    <h1 className="text-md font-bold">How to Design Components Right</h1>
                </div>
                <div className="grow h-full flex items-center justify-center gap-3">
                    <NavLink to='/create-course' end className={({isActive}) => `${isActive && 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>Curriculum</NavLink>
                    
                    <NavLink to='/create-course/drip' className={({isActive}) => `${isActive && 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>Drip</NavLink>
                    
                    <NavLink to='/create-course/setting' className={({isActive}) => `${isActive && 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>Settings</NavLink>
                    
                    <NavLink to='/create-course/pricing' className={({isActive}) => `${isActive && 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>Pricing</NavLink>
                    
                    <NavLink to='/create-course/FAQ' className={({isActive}) => `${isActive && 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>FAQ</NavLink>
                    
                    <NavLink to='/create-course/notice' className={({isActive})=> `${isActive&& 'border-b-2 border-[var(--color-secondary)] bg-blue-100/10'} h-full flex items-center px-3`}>Notice</NavLink>
                </div>
                <div className="w-[17%] h-full flex items-center justify-center gap-3">
                    <button className="border py-1 px-2 rounded cursor-pointer">Publish</button>
                    <button className="border py-1 px-2 rounded cursor-pointer">Draft</button>
                    <Link to={'#'}><button className="border py-1 px-2 rounded cursor-pointer">View</button></Link>
                </div>
            </nav>
            <section className="w-full h-[90vh] bg-secondary">
                <Outlet></Outlet>
            </section>
        </section>
    );
};

export default CreateCourse;