import { useState } from 'react';
import { FaBook, FaRegCreditCard, FaShoppingCart, FaStar } from "react-icons/fa";
import { IoIosMail, IoIosWallet  } from "react-icons/io";
import { MdDashboard, MdMessage, MdNotifications } from "react-icons/md";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoSettingsOutline, IoAnalyticsSharp } from "react-icons/io5";
import { LuCirclePlus } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import useEduCourseContexts from '../../Hooks/useEduCourseContexts';
import logo from "/images/Navbar/Logo.png";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { role } = useEduCourseContexts();
    const [open, setIsOpen] = useState(true);

    const studentMenu = <>
        <NavLink to='/dashboard' end className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdDashboard></MdDashboard></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Dashboard</h1></NavLink>
        
        <NavLink to='/dashboard/courses' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><FaBook></FaBook></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Purchased Courses</h1></NavLink>
        
        <NavLink to='/dashboard/messages' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdMessage></MdMessage></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Messages</h1></NavLink>
        
        <NavLink to='/dashboard/notifications' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdNotifications></MdNotifications></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Notifications</h1></NavLink>
        
        <NavLink to='/dashboard/certificates' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><LiaCertificateSolid></LiaCertificateSolid></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>My Certificates</h1></NavLink>
        
        <NavLink to='/dashboard/reviews' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><FaStar></FaStar></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Reviews</h1></NavLink>
        
        <NavLink to='/dashboard/credits' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><FaRegCreditCard></FaRegCreditCard></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Credits</h1></NavLink>
        
        <hr className='border-none h-[1px] my-[2px] bg-secondary w-[90%] mx-auto'/>
        
        <NavLink to='/dashboard/setting' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><IoSettingsOutline></IoSettingsOutline></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Setting</h1></NavLink>
    </>

    const instructorMenu = <>
        <NavLink to='/dashboard' end className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdDashboard></MdDashboard></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Dashboard</h1></NavLink>
        
        <NavLink to='/dashboard/courses' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><FaBook></FaBook></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Courses</h1></NavLink>
        
        <NavLink to='/dashboard/analytics' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><IoAnalyticsSharp></IoAnalyticsSharp></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Analytics</h1></NavLink>

        <NavLink to='/dashboard/messages' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdMessage></MdMessage></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Messages</h1></NavLink>
        
        <NavLink to='/dashboard/notifications' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><MdNotifications></MdNotifications></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Notifications</h1></NavLink>
        
        <NavLink to='/dashboard/certificates' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><LiaCertificateSolid></LiaCertificateSolid></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>My Certificates</h1></NavLink>
        
        <NavLink to='/dashboard/reviews' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><FaStar></FaStar></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Reviews</h1></NavLink>
        
        <NavLink to='/dashboard/earnings' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><AiOutlineDollar></AiOutlineDollar></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Earnings</h1></NavLink>
        
        <NavLink to='/dashboard/payout' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><IoIosWallet></IoIosWallet></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Payout</h1></NavLink>
        
        <NavLink to='/dashboard/statements' className={({isActive})=>`${isActive ? 'bg-primary text-secondary': 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><HiOutlineClipboardDocumentList></HiOutlineClipboardDocumentList></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Statements</h1></NavLink>

        <hr className='border-none h-[1px] my-[2px] bg-secondary w-[90%] mx-auto'/>
        
        <NavLink to='/dashboard/setting' className={({ isActive }) => `${isActive ? 'bg-primary text-secondary' : 'text-primary hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)]'} transform transition-all duration-700 flex items-center p-4 leading-none`}><h1><IoSettingsOutline></IoSettingsOutline></h1> <h1 className={`${open ? 'opacity-100' : 'opacity-0'} pl-4`}>Setting</h1></NavLink>
    </>

    return (
        <div className='w-full h-screen flex flex-col'>
            <nav className='bg-white shadow w-full h-[9vh] flex gap-4'>
                <div onClick={()=> setIsOpen(!open)} className='text-lg bg-primary text-secondary w-[4%] h-full flex items-center justify-center'>
                    <RxHamburgerMenu></RxHamburgerMenu>
                </div>
                <div className='w-[96%] h-full flex items-center justify-between'>
                    <NavLink className='w-[10%] h-full' to={'/dashboard'}><img src={logo} alt="Logo image" className='w-full h-full' /></NavLink>
                    <div className='flex gap-5 pr-4 text-xl text-primary items-center'>

                        <NavLink to='/create-course' end className={`h-full bg-primary py-1 px-2 text-secondary text-lg rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]`}><button className='flex items-center gap-2 cursor-pointer'><LuCirclePlus></LuCirclePlus> <span>Create Course</span></button></NavLink>
                        <span className='relative p-[1px]'><FaShoppingCart></FaShoppingCart> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <span className='relative p-[1px]'><IoIosMail></IoIosMail> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <span className='relative p-[1px]'><MdNotifications></MdNotifications> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <RxAvatar className='text-2xl'></RxAvatar>
                    </div>
                </div>
            </nav>
            <div className='w-full h-[91vh] flex relative'>
                {/* leftSidebar */}
                <div className={`sidebar z-0 transition-all duration-300 ease-linear h-full bg-white text-lg w-[17%] overflow-y-scroll`}>
                    {
                        role === 'student' ? studentMenu : instructorMenu
                    }
                </div>
                {/* RightSide Content */}
                <div className={`transition-all duration-300 ease-linear bg-secondary h-full absolute z-50 ${open? 'w-[83%] left-[17%]': 'w-[96%] left-[4%]'}`}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;