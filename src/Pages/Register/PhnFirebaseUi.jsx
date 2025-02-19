import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useContext, useEffect } from 'react';
import { EduCourseContexts } from '../../Contexts/AuthProvider';


const PhnFirebaseUi = () => {
        const {eduAuth} = useContext(EduCourseContexts);
    useEffect (() => {

        const ui= firebaseui.auth.AuthUI.getInstance()|| new firebaseui.auth.AuthUI(eduAuth);
         eduAuth.settings.appVerificationDisabledForTesting = false; // Ensure reCAPTCHA is not disabled for testing

        console.log(eduAuth); 
        ui.start('#firebaseui-auth-container', {
           
  signInOptions: [
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    {   
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: 'GB',
     recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'normal', // 'invisible' or 'compact'
        badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      }
    }
     
  ],
   signInSuccessUrl: 'https://www.google.com'
  // Other config options...
});
    })
    return (
        <div className="phone-auth-firebaseui" id="firebaseui-auth-container">
            
        </div>
    );
};

export default PhnFirebaseUi;