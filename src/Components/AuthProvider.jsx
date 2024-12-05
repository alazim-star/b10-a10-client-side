
import {createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile} from "firebase/auth";
import app from './../../FireBase/fireBase.init';



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
          document.documentElement.classList.add(savedTheme);
        }
      }, []);
    
      // থিম পরিবর্তনের জন্য হ্যান্ডলার
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
      };
























    // for loading 
    const [loading,setLoading]=useState(true)
   
// create user 
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// signin 
const signInUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// sign out 
const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)

}




// for loading 
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
    //    console.log("curent user",currentUser);
        setUser(currentUser);
        setLoading(false)

    });
    return () => {
        unsubscribe(); 
    };
}, []);

// for update profile 
const updateUserProfile=(updatedData)=>{
    return updateProfile(auth.currentUser,  updatedData)


}
// google sign in 
const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
}



const authInfo = {
    user,
   loading,
   createUser,
   signInUser,
   signOutUser,
   updateUserProfile,
   signInWithGoogle,

   
 
};
  



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
