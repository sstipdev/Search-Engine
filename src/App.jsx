import Home from "./routes/Home";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Login from "./routes/Login";
import NotPage from "./routes/NotPage";
import Loading from "./components/Loading";
import { RecoilRoot } from "recoil";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Auth";

// 로그인 되었을때 /main 컴포넌트가 아닌 -> /login 컴포넌트에 머무름
// /main/* 또는 /main* 주소 아무꺼나 적었을때 /NotPage 컴포넌트가 렌더링이 안됨

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 경로 검증 -> 로그인 여부 확인

    /** path 유효성 */
    const pathValidity = ["/main", "/login"].includes(location.pathname);

    // console.log(`location.pathname:`, location.pathname);
    // console.log(`pathValidity:`, pathValidity);

    // 로그인이 되었는지 여부 체크
    pathValidity &&
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // navigate("/main");
          // 로그인이 되었다면 state 함수 true로 업뎃
          setLogin(true);
          // 로그인이 되었을경우 main 컴포넌트로 이동.
        } else {
          // 아니면 false로 업뎃
          setLogin(false);
          // 로그인이 안되었을 경우 / 로그인 페이지로 이동
        }
        setLoading(false);
      });
  });

  if (loading) return <Loading />;

  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/main/*" element={<NotPage />} />
          <Route path="*" element={<NotPage />} />
        </Routes>
        {/* {login ? (
          <Routes>
            <Route path="/main" element={<Home />} />
            <Route path="/main/*" element={<NotPage />} />
            <Route path="*" element={<NotPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotPage />} />
          </Routes>
        )} */}
      </div>
    </RecoilRoot>
  );
}

export default App;
