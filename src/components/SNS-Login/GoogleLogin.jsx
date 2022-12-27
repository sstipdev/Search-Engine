import React from "react";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  return (
    <div>
      <button>구글로 로그인</button>
    </div>
  );
};

export default GoogleLogin;
