import React, { useState } from "react";
import GoogleLogin from "../components/SNS-Login/GoogleLogin";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth";

// CSS
import styles from "../styles/routes/Login.module.css";
import Logo from "../assets/logo.jpeg";

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
    <div className={styles.login_wrap}>
      <div className={styles.header}>
        <img src={Logo} className={styles.header__img} />
        <h2 className={styles.header__title}>사이트</h2>
      </div>

      <form onSubmit={onSubmitAccount} className={styles.login_form}>
        {!account ? (
          <>
            <input className={styles.login_input} type="email" placeholder="이메일" name="email" onChange={setUserInfo} value={email} />
            <input className={styles.login_input} type="password" placeholder="비밀번호" name="password" onChange={setUserInfo} value={password} />
          </>
        ) : (
          <>
            <input className={styles.login_input} type="text" placeholder="이름" name="userName" onChange={setUserInfo} value={userName} />
            <input className={styles.login_input} type="email" placeholder="이메일" name="email" onChange={setUserInfo} value={email} />
            <input className={styles.login_input} type="password" placeholder="비밀번호" name="password" onChange={setUserInfo} value={password} />
          </>
        )}
        <button className={styles.login_btn} type="submit">
          {account ? "계정생성" : "로그인"}
        </button>
        {error}
      </form>
      <div className={styles.login_footer}>
        <GoogleLogin />
        <div className={styles.login_footer_line}></div>
        <button className={styles.login_fotter_create} onClick={onChangeLJBtn}>
          {!account ? "계정생성" : "로그인"}
        </button>
      </div>
    </div>
  );
};

export default Login;
