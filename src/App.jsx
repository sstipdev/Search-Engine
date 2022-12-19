import { useState } from "react";
import ChoiceType from "./components/ChoiceType";
import WebResult from "./components/WebResult";

function App() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const HOST = "https://dapi.kakao.com";
  let getChoice = (e) => setOption(e);
  const GET_URL = `${HOST}/v2/search/${option}?query=${search}`;

  const serachResult = async (e) => {
    e.preventDefault();
    const data = await fetch(GET_URL, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    const json = await data.json();
    console.log(json);
  };
  console.log(GET_URL);

  return (
    <div className="App">
      <ChoiceType getChoice={getChoice} />
      <form onSubmit={(e) => serachResult(e)}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
        <button type="submit">제출</button>
      </form>
      {option === "web" ? <WebResult /> : null}
    </div>
  );
}

export default App;
