import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  // function to allow user to logout their session on the site
  const handleSignOut = async () => {
    await signOut(auth);

    navigate("/", { replace: true });
    toast.success("sign out successful");
  };
  return (
    <form onSubmit={handleSignOut}>
      <button className="btn bg-red-600 text-gray-200 capitalize">
        logout
      </button>
    </form>
  );
};

export default Logout;
