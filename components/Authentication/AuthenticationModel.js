import React, { useState } from "react";
import styles from "../../styles/Authentication.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthenticationModel({
  isModalShown,
  changeModalShown,
}) {
  if (!isModalShown) {
    return <div className="d-none"></div>;
  }

  const [register, setregister] = useState(true);
  const changeRoute = () => {
    setregister(!register);
  };
  return (
    <div className={styles.modal}>
      {register ? (
        <RegisterForm
          changeRoute={changeRoute}
          closeModal={changeModalShown}
        ></RegisterForm>
      ) : (
        <LoginForm
          changeRoute={changeRoute}
          closeModal={changeModalShown}
        ></LoginForm>
      )}
    </div>
  );
}
