import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { RiMenuUnfoldFill,RiMenuFoldFill  } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { EduCourseContexts } from "../../Contexts/AuthProvider";
import logo from "/images/Navbar/Logo.png";

const Header = () => {
  const { user, logOut } = useContext(EduCourseContexts);
  const [isOpen, setIsOpen] = useState(false)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      toast.success('Successfully created!');
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  return (
    <header className='w-full'>
      <div className="w-full px-2 md:px-3 py-1 sm:py-2 bg-[var(--color-primary)] sm:bg-linear-[45deg,var(--color-primary)_50%,var(--color-secondary)_50%]">

        <div className="flex justify-between items-center w-full">
          <div className="sm:flex items-center space-x-4 text-secondary">
            <div className="flex items-center space-x-2">
              <FaEnvelope></FaEnvelope>
              <span>xyz@gmail.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <FaClock></FaClock>
              <span>Mon- Fri: 9.00am - 6.00pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-secondary sm:text-[var(--color-primary)]">
            <a href="#" className="">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" className="">
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>


      <nav className="px-2 md:px-3 py-1 sm:py-2 bg-[var(--color-primary)] relative">
        <div className="hidden mx-auto lg:flex justify-between items-center">
          <img src={logo} alt="Logo" className='w-[13%]' />
            <div className="flex space-x-8 text-secondary">
                <NavLink to='/' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>About</NavLink>
                <NavLink to='/courses' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Courses</NavLink>
                <NavLink to='/instructors' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Instructors</NavLink>
                <NavLink to='/blog' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Blog</NavLink>
                <NavLink to='/contact' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Contact</NavLink>

                {
                user? 
                <>
                <NavLink onClick={handleLogOut} className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Log Out</NavLink>
                <p>{user?.email}</p>
                </>
                :
                <>
                <NavLink to='/register' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Register</NavLink>
                </>
              }
            </div>
            <Link to='/instructorReg' className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-4 py-2 rounded">Become an Instructor</Link>
          
          
        </div>

        {/* Responsive  */}
        <div className='text-xl flex items-center justify-between lg:hidden text-[var(--color-secondary)]'>
          {
            isOpen ? <RiMenuFoldFill onClick={()=>setIsOpen(!isOpen)}></RiMenuFoldFill>: <RiMenuUnfoldFill onClick={()=>setIsOpen(!isOpen)}></RiMenuUnfoldFill>
          }
          <div className={`absolute left-0 bottom-0 translate-y-full bg-white w-full h-auto text-[var(--color-primary)] p-3 ${isOpen? 'animate-menuToRight':'animate-menuToLeft'} z-50 `}>
            <div className="flex flex-col space-y-2" onClick={()=>setIsOpen(false)}>
                <NavLink to='/' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>About</NavLink>
                <NavLink to='/courses' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Courses</NavLink>
                <NavLink to='/instructors' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Instructors</NavLink>
                <NavLink to='/blog' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Blog</NavLink>
                <NavLink to='/contact' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Contact</NavLink>

                {
                user? 
                <>
                <NavLink onClick={handleLogOut} className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Log Out</NavLink>
                <p>{user?.email}</p>
                </>
                :
                <>
                <NavLink to='/register' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Register</NavLink>
                </>
              }
            </div>
          </div>
          <Link to='/instructorReg' className="bg-[var(--color-secondary)] text-[var(--color-primary)] p-1 rounded">Become an Instructor</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
