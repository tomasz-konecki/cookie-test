import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function Applications() {
  const [, , removeCookie] = useCookies(["idx_cookie"]);
  const { push } = useHistory();

  return (
    <div style={{ color: "limegreen", fontSize: 30 }}>
      APPLICATIONS
      <div>
        <button
          onClick={() => {
            removeCookie("idx_cookie");
            push("/");
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Applications;
