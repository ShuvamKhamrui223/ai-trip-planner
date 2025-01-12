import { useState, useEffect } from "react";
const getInitialNetworkStatus = () => {
  try {
    return typeof navigator !== "undefined" && "onLine" in navigator
      ? navigator.onLine
      : true; // Assume online if the API is unavailable
  } catch {
    return true; // Fallback in case of any unexpected error
  }
};
const useNetStatus = () => {
  const [isOnline, setIsOnline] = useState(getInitialNetworkStatus);

  useEffect(() => {
    if (typeof window === "undefined" || !("addEventListener" in window)) {
      return; // Environment does not support event listeners
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useNetStatus;
