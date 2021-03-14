import React from "react";
import styles from "../../styles/Authentication.module.css";
import RegisterForm from "./RegisterForm";

export default function AuthenticationModel({
  isModalShown,
  changeModalShown,
}) {
  if (!isModalShown) {
    return <div className="d-none"></div>;
  }
  return (
    <div className={styles.modal}>
      <RegisterForm closeModal={changeModalShown}></RegisterForm>
    </div>
  );
}
