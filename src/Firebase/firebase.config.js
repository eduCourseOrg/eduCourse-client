

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_EDU_apiKey,
  authDomain: import.meta.env.VITE_EDU_authDomain,
  projectId: import.meta.env.VITE_EDU_projectId,
  storageBucket: import.meta.env.VITE_EDU_storageBucket,
  messagingSenderId: import.meta.env.VITE_EDU_messagingSenderId,
  appId: import.meta.env.VITE_EDU_appId
 
};

 const app = initializeApp(firebaseConfig);
export default app;