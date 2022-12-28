import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Auth";

import styles from "../../styles/components/SNS-Login/GoogleLogin.module.css";

const GoogleLogin = () => {
  const onClickGoogleLogin = async (e) => {
    let provider;
    const {
      target: { name },
    } = e;
    if (name === "google") {
      provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    }
  };
  return (
    <div className={styles.goole_login_wrap}>
      <button name="google" onClick={onClickGoogleLogin} className={styles.google_connect}>
        Google 로그인
      </button>
    </div>
  );
};

export default GoogleLogin;
