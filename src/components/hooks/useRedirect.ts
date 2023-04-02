import { useEffect, useState } from "react";

const useRedirect = (to: string, seconds: number = 5) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = `/${to}`;
    }
  }, [countdown, to]);

  return { countdown };
};

export default useRedirect;
