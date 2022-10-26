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
  //  const   [photo, setPhoto] = useState('')

  const createUserByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  const accountSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = () => {
    return updateProfile(auth.currentUser, {
      displayName: user,
      // photoURL: "photo",
    })
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
    return signOut(auth);
  };

  const providerGoogleLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const providerGitHubLogIn = (provider) => {
    return signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('dgjsxhndzaushnxdjs', currentUser)
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
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
