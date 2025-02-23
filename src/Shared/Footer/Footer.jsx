import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { IoMdArrowDropright, IoMdCall, IoMdMail  } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import logo from '/images/Navbar/Logo.png';
import footerlogo from '/images/Footer/footer.png';

const Footer = () => {
    return (
        <footer className="bg-white rounded-md shadow-md py-4 px-6">
            <div className='flex items-center justify-between border-b-2 border-[var(--color-primary)] pb-5 mb-5'>
                <img src={logo} alt="logo" className='w-[50%] md:w-[13%]' />
                <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-primary"><FaFacebook></FaFacebook></a>
                    <a href="#" className="text-primary"><FaTwitter></FaTwitter></a>
                    <a href="#" className="text-primary"><FaInstagram></FaInstagram></a>
                </div>
            </div>
            </div>

            <div className='md:flex space-y-3 gap-3 items-center justify-between border-b-2 border-[var(--color-primary)] pb-5 mb-5'>

            <div className='flex flex-col gap-4'>
                <h5 className='text-primary font-bold text-xl'>Admission</h5>
                <ul className='list-none flex flex-col gap-2'>
                    <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Admission</li>
                    <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Academic</li>
                    <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Alumni</li>
                    <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Research</li>
                    <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Students</li>
                    
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
            <h5 className='text-primary font-bold text-xl'>Admission</h5>
            <ul className='list-none flex flex-col gap-2'>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Admission</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Academic</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Alumni</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Research</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Students</li>
                
            </ul>
            </div>

            <div className='flex flex-col gap-4'>
            <h5 className='text-primary font-bold text-xl'>Admission</h5>
            <ul className='list-none flex flex-col gap-2'>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Admission</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Academic</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Alumni</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Research</li>
                <li className='flex items-center gap-2 '><IoMdArrowDropright className='text-xl text-primary'></IoMdArrowDropright>Students</li>
                
            </ul>
            </div>

            <div className='flex flex-col gap-4'>
            <h5 className='text-primary font-bold text-xl'>Get In Touch</h5>
            <ul className='list-none flex flex-col gap-2'>
                <li className='flex items-center gap-2 '><FaLocationDot className='text-xl text-primary'></FaLocationDot>Dhaka, Bangladesh</li>
                <li className='flex items-center gap-2 '><IoMdCall className='text-xl text-primary'></IoMdCall>01564456654</li>
                <li className='flex items-center gap-2 '><IoMdMail className='text-xl text-primary'></IoMdMail>webquads.dev@gmail.com</li>
                <li className='flex items-center gap-2 '><IoMdMail className='text-xl text-primary'></IoMdMail>webquads.dev@gmail.com</li>
                
            </ul>
            </div>

                <div className='flex items-center justify-center'>
                    <img src={footerlogo} alt="Footer Logo" className='w-[60%]' />
                </div>
            </div>

            <div className='md:flex space-y-3 justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary flex gap-5 items-center'><FaMailBulk className='text-2xl text-primary'></FaMailBulk> Our NewsLetter</h2>
                <div className='flex items-center md:w-[50%]'>
                    <input type="email" name="email" id="" placeholder='Your Email address' className='p-2 w-[70%] bg-secondary text-primary '/>
                    <button className='bg-primary text-secondary p-2 '>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;