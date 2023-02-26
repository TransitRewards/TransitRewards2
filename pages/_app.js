import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";
import { AppContext } from "../contexts/AuthContext";

export default function App({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <AppContext.Provider value={{ isAuth, setIsAuth }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}
