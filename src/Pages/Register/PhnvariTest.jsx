import { useState } from 'react';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../../Components/Buttons/Button';

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const PhoneVarification = () => {
    const auth = getAuth();
    // const {signInPhone}=useContext(EduCourseContexts)
    const {
        register,
        formState: { errors },
      } = useForm()
      const [phone, setPhone] = useState("");
      const handleOnChange = value => {
        setPhone("+" + value);
      };
      const handleOnChangephone = e => {
        setPhone(e.target.value);
      };
      const handleSendOtp=async()=>{
       
       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
                  size: "invisible", // or 'normal' if you want to display it
                 callback: (response) => {
                   console.log("reCAPTCHA verified", response);
      },
            });
             const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
         .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.error(error);
    });
        
      }
    //   const handleSendOtp=()=>{
    //     signInPhone(phone)
    //     .then((confResult)=>{
    //         console.log(confResult);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    //   }
    return (
        <div>
             <div className=" flex flex-row  items-center">
                    <div>
            <label htmlFor="name" className="mt-3 block text-sm/6 font-medium text-gray-900">
                Phone number
                            <PhoneInput className="w-full!"
                    name="number"
                    autoCorrect="off"
                    placeholder="Enter a Valid Phone Number"
                    country={"bd"}
                    value={phone}
                    onChange={handleOnChange}
                />
              </label>
               
     
              <div className="mt-4">
                <input
                  
                  name="number"
                  type="number"
                  autoComplete="given-name"
                  className="hidden w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
                  {...register("number", { 
                    required: true,
                     minLength: 11
                  
                    })} 
                     value={phone}
                     onChange={handleOnChangephone}
                />


                {errors.number?.type==='required' && <span className="text-red-700">Please give your Phone number</span>}
                {errors.number?.type==='minLength' && <span className="text-red-700">Please give a valid Phone number</span>}
                
              </div>
              
                 </div>
                 <button onClick={handleSendOtp} className="border-2 bg-amber-200">send OTP</button>
                 <Button onClick={handleSendOtp} BtnText='Send OTP'></Button>
                </div>
                <p id="recaptcha"></p>
                <div className="flex flex-row">
                    <input type="number" className="border-2 p-2"/>
                    <Button BtnText='Verify'></Button>
                </div>
        </div>
    );
};

export default PhoneVarification;