import { Third } from "./third";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "./second.css";
import { AuthContext } from "../contexts/AuthContext";

// const [token] = useContext(AuthContext);

export const Second = () => {
  const { token } = useContext(AuthContext);
  const storedValue = useContext(AppContext);
  console.log(storedValue);

  return (
    <>
      <div id="navbar">
        <h4>User Logged In with Token Number "{token}"</h4>
        <Third />
        <br />
        <button>Log Out</button>
      </div>
    </>
  );
};
