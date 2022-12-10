import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currntUser, setCurrentUser] = useState();
  useEffect(() => {
    const auth = getAuth();
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubcribe;
  }, []);

  //Signup Function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //Profile Update
    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }
  //Login Function
  function Login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  //Logout Function
  function LogOut() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currntUser,
    signup,
    LogOut,
    Login,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
