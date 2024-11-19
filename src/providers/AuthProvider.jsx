import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";


export const AuthProviderContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [forgotEmail, setForgotEmail] = useState("")
    const googleProvider = new GoogleAuthProvider();
    

    // Create new user 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Log in Existing user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Login with google 
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // Sing out user 
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // update user profile
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    // Forgot Password 
    const resetUserEmailPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    // Get current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        createNewUser,
        loginUser,
        loginWithGoogle,
        signOutUser,
        user,
        setUser,
        setLoading,
        loading,
        updateUserProfile,
        forgotEmail, 
        setForgotEmail,
        resetUserEmailPassword
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;