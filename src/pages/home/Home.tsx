import { useEffect } from "react";
import { useCookies } from "react-cookie";
import useUserinfo from "../../hooks/useUserinfo";
import { useHistory } from "react-router-dom";

import classes from "./Home.module.scss";

function Home() {
  const [status, loading] = useUserinfo();
  const [cookie, , removeCookie] = useCookies(["idx_cookie"]);
  const { push } = useHistory();

  const handleLogOut = () => {
    console.log("log out");
    removeCookie("idx_cookie");
  };

  useEffect(() => {
    console.log("cookie:", !!cookie["idx_cookie"]);
    console.log("status:", status);

    if (status === "success" && !!cookie["idx_cookie"]) {
      console.log("OK ==> APPLICATIONS");
      push("/applications");
    } else if (status === "error") {
      console.log("NOT OK ==> LOGIN PAGE");
      push("/login");
    }
  }, [cookie, status]);

  return (
    <div className={classes.container}>
      {cookie["idx_cookie"] && (
        <div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
      {loading && <div className={classes.loader}>Loading...</div>}
    </div>
  );
}

export default Home;
