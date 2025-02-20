import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneVerification = () => {
    const auth = getAuth();
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setupRecaptcha(); // Initialize reCAPTCHA on load
    }, []);

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
                size: "invisible",
                callback: (response) => {
                    console.log("reCAPTCHA verified", response);
                },
                "expired-callback": () => {
                    console.log("reCAPTCHA expired. Please try again.");
                },
            });
        }
    };

    const handleSendOtp = async () => {
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("OTP Sent:", confirmationResult);
            })
            .catch((error) => {
                console.error("Error sending OTP:", error);
            });
    };

    return (
        <div>
            <div className="flex flex-row items-center">
                <div>
                    <label htmlFor="name" className="mt-3 block text-sm font-medium text-gray-900">
                        Phone number
                        <PhoneInput
                            name="number"
                            placeholder="Enter a Valid Phone Number"
                            country={"bd"}
                            value={phone}
                            onChange={(value) => setPhone("+" + value)}
                        />
                    </label>
                </div>
                <button onClick={handleSendOtp} className="border-2 bg-amber-200 mt-8 ml-4">Send OTP</button>
                
            </div>
            <div id="recaptcha"></div>
        </div>
    );
};

export default PhoneVerification;
