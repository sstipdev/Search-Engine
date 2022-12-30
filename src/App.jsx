import Home from "./routes/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./routes/Login";
import NotPage from "./routes/NotPage";
import Loading from "./components/Loading";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Auth";

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // 로그인이 되었는지 여부 체크.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(auth.currentUser.displayName);

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
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="App">
      {login ? (
        <Routes>
          <Route path="/main" element={<Home userNickName={userName} />} />
          <Route path="/*" element={<NotPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
