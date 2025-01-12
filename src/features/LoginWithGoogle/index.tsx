import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase.config";
import { saveUserToFireStoreDb } from "../../utils/firebase.utils";

const LoginWithGoogle = () => {
  const { setLoadingAuth, setUser } = useAuthContext();

  // function for allow user to login to the site with their oauth google
  const handleLogin = async () => {
    setLoadingAuth(true);
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        setLoadingAuth(false);
        setUser(result.user);
        saveUserToFireStoreDb(result.user);
        toast.success(`Login successful`);
      })
      .catch(() => {
        setLoadingAuth(false);
        toast.error(`Failed login, please try later`);
      });
  };

  return (
    <Link
      onClick={handleLogin}
      to="#"
      className="rounded-md bg-indigo-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Get started
    </Link>
  );
};

export default LoginWithGoogle;
