import { useState } from "react";
import Logo from "../assets/logo.jpeg";
import WebResult from "./WebResult";
import VideoResult from "./VideoResult";
import ImageResult from "./ImageResult";
import BlogResult from "./BlogResult";

import {
  ChoiceTypeBox,
  MainName,
  LogoImg,
  Header,
  UserInput,
  ChoiceBox,
  SearchType,
  MainResult,
} from "../styles/ChoiceTypeCSS";

const ChoiceType = () => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  // loading시 로딩 아이콘 처리 state
  const [isLoading, setLoading] = useState();

  const getApiData = async (choice) => {
    const HOST = `https://dapi.kakao.com/v2/search/${choice}?query=${search}`;
    const API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
    // Fetch를 통해 API랑 통신 및 promise 반환
    const data = await fetch(HOST, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    // JSON으로 파일 변환.
    const json = await data.json();

    // 변환된 JSON 객체를 State함수에 저장.
    setResult(json.documents);
  };

  // category = "web", "blog", "vclicb","image"
  const changeChoiceResult = (category) => {
    // 만일 지금 category와 choice state가 다르다면 fetch 한번 더
    if (search === "") {
      return alert("공백은 금지 입니다.");
    }

    if (category !== choice) {
      console.log("카테고리 다름");
      setChoice(category);
      getApiData(category);
    } else {
      setChoice(category);
    }
  };

  return (
    <ChoiceTypeBox>
      <MainName>SBDM</MainName>
      <Header>
        <LogoImg src={Logo} />
        <UserInput
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="검색어를 기입해주세요"
          value={search}
        />
      </Header>

      <ChoiceBox>
        {/* 클릭시 CSS 기능 추가 예정 */}
        <SearchType
          onClick={() => changeChoiceResult("web")}
          className={choice === "web" ? "active" : ""}
        >
          🌐 웹 문서 🌐
        </SearchType>
        <SearchType
          onClick={() => changeChoiceResult("blog")}
          className={choice === "blog" ? "active" : ""}
        >
          📚 블로그 📚
        </SearchType>
        <SearchType
          onClick={() => changeChoiceResult("vclip")}
          className={choice === "vclip" ? "active" : ""}
        >
          📽️ 동영상 📽️
        </SearchType>
        <SearchType
          onClick={() => changeChoiceResult("image")}
          className={choice === "image" ? "active" : ""}
        >
          🌆 이미지 🌆
        </SearchType>
      </ChoiceBox>

      <MainResult>
        {choice === "web" && result ? <WebResult result={result} /> : null}
        {choice === "blog" && result ? <BlogResult result={result} /> : null}
        {choice === "vclip" && result ? <VideoResult result={result} /> : null}
        {choice === "image" && result ? <ImageResult result={result} /> : null}
      </MainResult>
    </ChoiceTypeBox>
  );
};

export default ChoiceType;
