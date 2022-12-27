import React, { useState } from "react";
import GoogleLogin from "../components/SNS-Login/GoogleLogin";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../Auth";

const Login = () => {
  const [account, setAccount] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeLJBtn = () => setAccount((prev) => !prev);

  const onSubmitAccount = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (!account) {
        // account 값이 false일 경우 로그인 함수 호출
        user = await signInWithEmailAndPassword(auth, email, password);
      } else {
        // account 값이 true 경우 회원가입 함수 호출
        user = await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const setUserInfo = (e) => {
    // 구조 분해할당으로 name, value 값 얻어오기
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      return setEmail(value);
    }

    if (name === "password") {
      return setPassword(value);
    }

    if (name === "userName") {
      return setUserName(value);
    }
  };

  return (
    <div>
      <h2>여기는 로그인 화면 입니다.</h2>
      <form onSubmit={onSubmitAccount}>
        {!account ? (
          <>
            <input type="email" placeholder="이메일" name="email" onChange={setUserInfo} />
            <input type="password" placeholder="비밀번호" name="password" onChange={setUserInfo} />
          </>
        ) : (
          <>
            <input type="text" placeholder="이름" name="userName" onChange={setUserInfo} />
            <input type="email" placeholder="이메일" name="email" onChange={setUserInfo} />
            <input type="password" placeholder="비밀번호" name="password" onChange={setUserInfo} />
          </>
        )}
        <button type="submit">{account ? "계정생성" : "로그인"}</button>
        {error}
      </form>
      <button onClick={onChangeLJBtn}>{!account ? "계정생성" : "로그인"}</button>

      <GoogleLogin />
    </div>
  );
};

export default Login;
