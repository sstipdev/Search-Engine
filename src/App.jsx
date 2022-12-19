import { useState } from "react";
import ChoiceType from "./components/ChoiceType";

function App() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("web");
  const API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const HOST = "https://dapi.kakao.com";

  let getChoice = (e) => setOption(e);
  let GET_URL = `${HOST}/v2/search/${option}?query=${search}`;

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
    </div>
  );
}

export default App;
