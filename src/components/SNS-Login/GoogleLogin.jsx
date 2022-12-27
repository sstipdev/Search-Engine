import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Auth";
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
    <div>
      <button name="google" onClick={onClickGoogleLogin}>
        구글로 로그인
      </button>
    </div>
  );
};

export default GoogleLogin;
