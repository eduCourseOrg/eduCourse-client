import { Link, NavLink } from 'react-router-dom';
import logo from '/images/Navbar/Logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaClock } from "react-icons/fa";

const Header = () => {
  return (
    <header>
    <div className="py-2 bg-linear-[45deg,var(--color-primary)_50%,var(--color-secondary)_50%] text-secondary">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <FaEnvelope></FaEnvelope>
                    <span>xyz@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaClock></FaClock>
                    <span>Mon- Fri: 9.00am - 6.00pm</span>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-primary"><FaFacebook></FaFacebook></a>
                <a href="#" className="text-primary"><FaTwitter></FaTwitter></a>
                <a href="#" className="text-primary"><FaInstagram></FaInstagram></a>
            </div>
        </div>
      </div>
      <nav className="py-2 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          {/* <a href="#" className="bg-white text-black px-4 py-2 rounded">Company Logo</a> */}
          <img src={logo} alt="Logo" className='w-[13%]' />
            <div className="flex space-x-8 text-secondary">
                <NavLink to='/' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>About</NavLink>
                <NavLink to='/courses' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Courses</NavLink>
                <NavLink to='/blog' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Blog</NavLink>
                <NavLink to='/contact' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Contact</NavLink>
                <NavLink to='/register' className={({ isActive}) => `${isActive && 'border-b border-secondary'} hover:border-b border-secondary`}>Register</NavLink>
            </div>
            <Link to='/meeting' className="bg-white text-black px-4 py-2 rounded">Book A Meeting</Link>
        </div>
    </nav>
    </header>
  );
};

export default Header;
