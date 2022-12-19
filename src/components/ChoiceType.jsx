import { useState } from "react";
import WebResult from "./WebResult";

const ChoiceType = () => {
  const [choice, setChoice] = useState("web");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const HOST = "https://dapi.kakao.com";
  const GET_URL = `${HOST}/v2/search/${choice}?query=${search}`;

  const choiceFc = (e) => {
    const {
      target: { value },
    } = e;
    return setChoice(value);
  };

  const serachResult = async (e) => {
    e.preventDefault();
    const data = await fetch(GET_URL, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    const json = await data.json();
    setResult(json.documents);
  };

  return (
    <div>
      <select onChange={choiceFc}>
        <option value="web">웹 문서</option>
        <option value="vclip">동영상</option>
        <option value="image">이미지</option>
        <option value="blog">블로그</option>
      </select>
      <form onSubmit={(e) => serachResult(e)}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
        <button type="submit">제출</button>
      </form>
      <WebResult result={result} />
    </div>
  );
};

export default ChoiceType;
