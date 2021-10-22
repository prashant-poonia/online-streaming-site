// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnLB1Vk0Mxz_DBfAmXzTsEQsTV0Kk3Elw",
    authDomain: "streaming-website-88c6a.firebaseapp.com",
    databaseURL: "https://streaming-website-88c6a-default-rtdb.firebaseio.com",
    projectId: "streaming-website-88c6a",
    storageBucket: "streaming-website-88c6a.appspot.com",
    messagingSenderId: "780845342720",
    appId: "1:780845342720:web:feb56f4c203a54168378e5",
    measurementId: "G-GWXPDW65TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup = document.getElementById("signup");
if (signup)
    signup.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                window.location.href = "login.html";
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
                // ..
            });
    });

const login = document.getElementById("login");
if (login)
    login.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.location.href = "index.html";
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    });