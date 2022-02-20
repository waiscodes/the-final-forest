import React, { useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../fire";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const register = () => {
    auth.signInWithPopup(googleAuthProvider)
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    auth.signOut();
  };

  auth.onAuthStateChanged((user) => {
    if (user && !user.isAnonymous) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
    setLoading(false);
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
