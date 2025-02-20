/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const CreateUserWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
        console.log("loggedout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   onAuthstatechange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => console.log(res.data))
          .catch((err) => console.error("JWT request error:", err));
      } else {
        setUser(null);
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => console.log(res.data));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userinfo = {
    user,
    CreateUserWithEmailPass,
    loginUser,
    handleLogOut,
    loading,
  };
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
