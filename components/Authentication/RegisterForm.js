import React from "react";
import styles from "../../styles/Authentication.module.css";

export default function RegisterForm({ closeModal, changeRoute }) {
  const icons = [
    { id: 1, path: "./svgs/facebook.svg" },
    { id: 2, path: "./svgs/google.svg" },
    { id: 3, path: "./svgs/twitter.svg" },
  ];
  return (
    <div className={"relative " + styles.modalContent}>
      <img
        onClick={() => closeModal()}
        src="./svgs/close.svg"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          cursor: "pointer",
        }}
        className="absolute top-2 right-2"
      ></img>
      <div className={styles.modalLeft}>
        <h1 className={styles.modalTitle + " font-bold text-2xl"}>
          Welcome to E-shop
        </h1>
        <p className="text-sm my-4">Login for more privileges</p>
        <p className="text-xs mt-2 mb-4">Don’t have an account?</p>
        <button
          style={{ outline: "none" }}
          onClick={changeRoute}
          className="rounded-full border-2 border-gray-50 border-solid px-6 py-2"
        >
          Login
        </button>
      </div>
      <div className={styles.modalRight + " p-4"}>
        <h1 className={"font-bold text-2xl"}>Sign Up</h1>
        <p
          style={{
            color: "#838383",
            fontStyle: "normal",
            fontWeight: "bold",
          }}
          className="my-2 text-base"
        >
          or sign up with
        </p>
        <div className="flex flex-row mt-4">
          {icons.map((icon) => (
            <div key={icon.id} className="mx-2">
              <img src={icon.path}></img>
            </div>
          ))}
        </div>
        <form style={{ height: "50%" }}></form>
      </div>
    </div>
  );
}
