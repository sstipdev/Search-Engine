import { useState } from "react";
import WebResult from "./WebResult";
import VideoResult from "./VideoResult";
import ImageResult from "./ImageResult";
import BlogResult from "./BlogResult";

const ChoiceType = () => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const HOST = "https://dapi.kakao.com";
  const GET_URL = `${HOST}/v2/search/${choice}?query=${search}`;

  const searchResult = async (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("공백은 금지 입니다.");
    }
    if (choice === "") {
      setSearch("");
      return alert("검색 항목을 선택해주셔야 합니다 !");
    }

    const data = await fetch(GET_URL, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    const json = await data.json();
    setResult(json.documents);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={(e) => searchResult(e)}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
        <button type="submit">제출</button>
      </form>
      <div>
        <div onClick={() => setChoice("web")}>웹 문서</div>
        <div onClick={() => setChoice("blog")}>블로그</div>
        <div onClick={() => setChoice("vclip")}>동영상</div>
        <div onClick={() => setChoice("image")}>이미지</div>
      </div>

      {choice === "web" && <WebResult result={result} />}
      {choice === "vclip" && <VideoResult result={result} />}
      {choice === "image" && <ImageResult result={result} />}
      {choice === "blog" && <BlogResult result={result} />}
    </div>
  );
};

export default ChoiceType;
