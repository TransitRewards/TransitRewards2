import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useRouter } from "next/router";

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
        <Link> </Link>

        {!isAuth ? (
          <>
            <Link href="/">Login</Link>
          </>
        ) : (
          <>
            {/* <Link
              href="/dashboard"
            >
              Dashboard
            </Link> */}
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
