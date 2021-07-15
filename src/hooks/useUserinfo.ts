import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function useUserinfo() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [, setCookie] = useCookies(["idx_cookie"]);

  useEffect(() => {
    setIsLoading(true); // getting user Data

    setTimeout(() => {
      setIsLoading(false);

      if (true) {
        setCookie("idx_cookie", "isAuthenticated", { path: "/" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2000);
  }, []);

  return [status, isLoading];
}

export default useUserinfo;
