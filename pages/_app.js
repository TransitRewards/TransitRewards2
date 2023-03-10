import "../styles/home.css";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";
import { AppContext } from "../contexts/AuthContext";

export default function App({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      
      <AppContext.Provider value={{ isAuth, setIsAuth }}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}
