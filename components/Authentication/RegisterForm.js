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

        <form
          style={{ height: "60%", width: "50%" }}
          className={"mt-4 " + styles.form}
        >
          <div className={styles.inputGroup}>
            <input
              id="registerFullNames"
              type="text"
              className={styles.inputText}
              required
            />
            <label
              htmlFor="registerFullNames"
              className={styles.floating_label}
            >
              <img src="./svgs/user-check.svg"></img>
              <p>Full Names</p>
            </label>
          </div>

          <div className={styles.inputGroup}>
            <input
              id="registerUsername"
              type="text"
              className={styles.inputText}
              required
            />
            <label htmlFor="registerUsername" className={styles.floating_label}>
              <img src="./svgs/username.svg"></img>
              <p>Username</p>
            </label>
          </div>

          <div className={styles.inputGroup}>
            <input
              id="registerEmail"
              type="text"
              className={styles.inputText}
              required
            />
            <label htmlFor="registerEmail" className={styles.floating_label}>
              <img src="./svgs/mail.svg"></img>
              <p>Email</p>
            </label>
          </div>

          <div className={styles.inputGroup}>
            <input
              id="registerPassword"
              type="password"
              className={styles.inputText}
              required
            />
            <label htmlFor="registerPassword" className={styles.floating_label}>
              <img src="./svgs/lock.svg"></img>
              <p>Password</p>
            </label>
          </div>

          <button className={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
}
