/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const LoginForm = ({setIsLogin}) => {
    return (
        <div>
            <p className="my-6 flex justify-center items-center">Dont have an account? <Link onClick={()=>setIsLogin(false)} className="text-teal-900 font-bold px-3 text-[18px]">Sign Up</Link></p>
        </div>
    );
};

export default LoginForm;