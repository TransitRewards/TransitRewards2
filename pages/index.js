import Head from "next/head";
import Image from "next/image";
import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../contexts/AuthContext";
import { Router, useRouter } from "next/router";

export default function Home() {
  const { isAuth, setIsAuth } = useContext(AppContext);
  const router = useRouter();
  const signInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      router.push("/location");
    });
  };
  return (
    <>
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <h1>Login</h1>
        <p>Sign in with Google</p>
        <button onClick={signInGoogle}>Sign in with Google</button>
      </div>
    </>
  );
}
