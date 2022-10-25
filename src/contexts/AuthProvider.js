import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const { user, setUser } = useState(null);
  const signInWithEmail =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const providerLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const providerGitHubLogIn =(provider)=>{
   return signInWithRedirect(auth, provider);
  }
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  const authInfo = { user,signInWithEmail, providerLogIn,providerGitHubLogIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
