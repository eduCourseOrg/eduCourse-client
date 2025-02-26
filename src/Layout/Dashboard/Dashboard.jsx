import { Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdNotifications, MdDashboard, MdMessage } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import logo from "/images/Navbar/Logo.png";
import useEduCourseContexts from '../../Hooks/useEduCourseContexts';

const Dashboard = () => {
    const { role } = useEduCourseContexts();

    const instructorItem = <ul className='w-full'>
        <li className='w-full px-4 py-2 hover:bg-[var(--color-primary)] text-primary hover:text-[var(--color-secondary)]'><MdDashboard className='mr-4 inline'></MdDashboard>Dashboard</li>

        <li className='w-full px-4 py-2 hover:bg-[var(--color-primary)] text-primary hover:text-[var(--color-secondary)]'><MdMessage className='mr-4 inline'></MdMessage>Message</li>

        <li className='w-full px-4 py-2 hover:bg-[var(--color-primary)] text-primary hover:text-[var(--color-secondary)]'><MdNotifications className='mr-4 inline'></MdNotifications>Notifications</li>

        <li className='w-full px-4 py-2 hover:bg-[var(--color-primary)] text-primary hover:text-[var(--color-secondary)]'><GrCertificate className='mr-4 inline'></GrCertificate>My Certificates</li>

        <li className='w-full px-4 py-2 hover:bg-[var(--color-primary)] text-primary hover:text-[var(--color-secondary)]'><FaStar className='mr-4 inline'></FaStar>Reviews</li>
    </ul>
    return (
        <div className='bg-secondary w-full h-[100vh]'>
            <nav className='bg-white shadow w-full h-[8vh] flex gap-4'>
                <div className='text-3xl bg-primary text-secondary w-fit h-full grid items-center px-3'>
                    <RxHamburgerMenu></RxHamburgerMenu>
                </div>
                <div className='w-full h-full flex items-center justify-between'>
                    <img src={logo} alt="Logo image" className='w-[10%] h-full' />
                    <div className='flex gap-5 pr-4 text-xl text-primary'>
                        <span className='relative p-[1px]'><FaShoppingCart></FaShoppingCart> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <span className='relative p-[1px]'><IoIosMail></IoIosMail> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <span className='relative p-[1px]'><MdNotifications></MdNotifications> <span className='w-[10px] h-[10px] absolute top-0 right-0 bg-red-500 rounded-full text-secondary text-[10px] flex items-center justify-center'>2</span></span>

                        <RxAvatar className='text-2xl'></RxAvatar>
                    </div>
                </div>
            </nav>
            <div className='w-full flex gap-4'>
                {/* leftSidebar */}
                <div className='w-[15%] h-screen bg-white shadow'>
                    {instructorItem}
                </div>
                {/* RightSide Content */}
                <div className='grow'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;