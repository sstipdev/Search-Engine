import ChoiceType from "./routes/ChoiceType";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./routes/Login";
import NotPage from "./routes/NotPage";
import Loading from "./components/Loading";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    // 로그인이 되었는지 여부 체크.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인이 되었다면 state 함수 true로 업뎃
        setIsLoggedIn(true);
        // 로그인이 되었을경우 main 컴포넌트로 이동.
        navigate("/main");
      } else {
        // 아니면 false로 업뎃
        setIsLoggedIn(false);
        // 로그인이 안되었을 경우 / 로그인 페이지로 이동
        navigate("/login");
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="App">
      {isLoggedIn ? (
        <Routes>
          <Route path="/main" element={<ChoiceType />} />
          <Route path="/*" element={<NotPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
