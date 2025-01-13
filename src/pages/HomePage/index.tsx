import { lazy } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const LoginWithGoogle = lazy(() => import("../../features/LoginWithGoogle"));
const HomePage = () => {
  const { loadingAuth, user } = useAuthContext();
  return (
    <>
      {" "}
      <div className="">
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-300 sm:text-7xl">
                Your Ultimate Travel Companion: Plan Smarter with AI
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              {!loadingAuth && user == null && (
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <LoginWithGoogle />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
