//login
//import { GoogleAuthProvider } from "firebase/auth";

//const provider = new GoogleAuthProvider();
//<script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAhPNS80AvN3DxrypFVbWw2VrfFVucKFug",
          authDomain: "curriculum-6551e.firebaseapp.com",
          projectId: "curriculum-6551e",
          storageBucket: "curriculum-6551e.appspot.com",
          messagingSenderId: "168925773484",
          appId: "1:168925773484:web:67e9f70bf0c2794bdfa909",
          measurementId: "G-H0WEHD39K3"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      //</script>
import firebase from "firebase/app";
import "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result.user);

        });
});