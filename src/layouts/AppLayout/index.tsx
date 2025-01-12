import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import NoNetworkNotification from "../../components/UI/NoNetworkNotification";
import useNetStatus from "../../hooks/useNetStatus";

const AppLayout = () => {
  const currentNetStatus = useNetStatus();

  return (
    <>
      {!currentNetStatus && <NoNetworkNotification />}
      <Header />
      <main className="min-h-screen bg-gray-950">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
