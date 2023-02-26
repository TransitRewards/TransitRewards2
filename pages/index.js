import Head from "next/head";
import Image from "next/image";
import React from "react";

import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useContext } from  "react";
import { AppContext } from "../contexts/AuthContext";
import { Router, useRouter } from "next/router";

export default function Home() {
  const { isAuth, setIsAuth } = useContext(AppContext);
  const router = useRouter();
  const signInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      router.push("/");
      // router.push("/location");
    });
  };
  return (
    <>
      <div>
        <Head>
          <title>Login</title>
        </Head>
      
          {/* <div className="Header">
            <p>TransitRewards</p>
          </div> */}
          <div className = "Aligner">
            <p className = "SignInDesc">Sign in to TransitRewards</p>
            <button onClick={signInGoogle} className = "login-button">
              <Image src = "/GoogleIcon.png" alt="Google Icon" className = "button-icon" width={20} height={20} />
              <span className= "button__text">Continue with Google</span>
            </button>
          </div>
      </div>
    </>
  );
}
