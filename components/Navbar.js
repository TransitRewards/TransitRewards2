import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

function Navbar(props) {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const router = useRouter();

  const signUserOut = () => {
    router.push("/");
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  return (
    <nav>
      <div>
        <div className={styles.Header}>
          <p>TransitRewards</p>
          {/* <Link> </Link> */}

          {!isAuth ? (
            <>
              <Link className={styles.Login} href="/">
                Sign In &#62;
              </Link>
            </>
          ) : (
            <>
              {/* <Link
              href="/dashboard"
            >
              Dashboard
            </Link> */}

              <Link className={styles.Login} href="/location">
                Stops &#62;
              </Link>
              <button className={styles.Logout} onClick={signUserOut}>
                Log Out &#62;
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
