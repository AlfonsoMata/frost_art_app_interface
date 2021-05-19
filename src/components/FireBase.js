 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/analytics";
 import 'firebase/storage';

 const firebaseConfig = {
     apiKey: "AIzaSyAnYLuWcsc-3FwJhsCFqaRoX6NPySTZ8x8",
     authDomain: "frostarttesta.firebaseapp.com",
     projectId: "frostarttesta",
     storageBucket: "frostarttesta.appspot.com",
     messagingSenderId: "447639416964",
     appId: "1:447639416964:web:0197875022e78819f652d1",
     measurementId: "G-V757JZ1X3V"
   };

   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
   
   export default firebase;
