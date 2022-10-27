import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

  const createUserByEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerify = () => {
    setLoading(true)
    sendEmailVerification(auth.currentUser).then(() => {
       
    });
  };

  const accountSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (profile) => {
    return updateProfile(auth.currentUser, profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const providerGoogleLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const providerGitHubLogIn = (provider) => {
    setLoading(true)
    return signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserByEmail,
    providerGoogleLogIn,
    providerGitHubLogIn,
    accountSignIn,
    logOut,
    updateName,
    emailVerify
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
