import { AuthError, User } from "firebase/auth";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../config/firebase.config";
import { toast } from "react-toastify";

type TauthContext = {
  user: User | null | undefined;
  setUser: (user: User) => void;
  setLoadingAuth: (status: boolean) => void;
  loadingAuth: boolean;
  authError?: AuthError;
  setAuthError?: React.Dispatch<React.SetStateAction<AuthError | undefined>>;
};

const authContext = createContext<TauthContext | undefined>(undefined);

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>();
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [authError, setAuthError] = useState<AuthError>();

  // function to keep track user's authenticity within the app
  const isLoggedIn = async () => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
      user && toast.success("login successful");
    });
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        setLoadingAuth,
        loadingAuth,
        authError,
        setAuthError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error("auth context not found ");
  }
  return context;
};

export default AuthContextProvider;
