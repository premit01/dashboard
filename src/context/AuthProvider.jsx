import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../utils/firebase/firebase.config";


const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // email password register 
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email password login 

    const LoginWthEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const logInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // apple login 

    const loginWithApple = () => {
        const appleProvider = new OAuthProvider('apple.com');
        return signInWithPopup(auth, appleProvider)
    }

    // logout 
    const logOut = () => {
        return signOut(auth)
    }


    const userInfo = {
        user,
        loading,
        registerWithEmailAndPassword,
        LoginWthEmailAndPassword,
        logInWithGoogle,
        loginWithApple,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return () => unsubscribe()
    })


    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;