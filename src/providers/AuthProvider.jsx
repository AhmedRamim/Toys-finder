import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider  = new GoogleAuthProvider()


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfiles = (name, photo) => {
        console.log(name,photo);
        setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
        .then(() => {
          setLoading(false);
          console.log("User profile updated successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error updating user profile:", error);
        });
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        } )
        return () => {
            unsubscribe()
        }

    },[])
   
      
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfiles,
        googleUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;