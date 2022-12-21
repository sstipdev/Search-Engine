import { useState } from "react";
import Logo from "../assets/logo.jpeg";
import WebResult from "./WebResult";
import VideoResult from "./VideoResult";
import ImageResult from "./ImageResult";
import BlogResult from "./BlogResult";

import { ChoiceTypeBox, LogoImg, Header, UserForm, UserInput, SubmitBtn, ChoiceBox, SearchType, MainResult } from "../styles/ChoiceTypeCSS";

const ChoiceType = () => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const HOST = "https://dapi.kakao.com";
  const GET_URL = `${HOST}/v2/search/${choice}?query=${search}`;

  const getApiData = async () => {
    // Fetch를 통해 API랑 통신.
    const data = await fetch(GET_URL, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    console.log(data);

    // JSON으로 파일 변환.
    const json = await data.json();
    console.log(json);

    // 변환된 JSON 객체를 State함수에 저장.
    setResult(json.documents);
  };

  const searchResult = async (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("공백은 금지 입니다.");
    }
    if (choice === "") {
      setSearch("");
      return alert("검색 항목을 선택해주셔야 합니다 !");
    }
    getApiData();
  };

  return (
    <ChoiceTypeBox>
      <Header>
        <LogoImg src={Logo} />
        <UserForm onSubmit={(e) => searchResult(e)} id="submit-info">
          <UserInput onChange={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
        </UserForm>
        <SubmitBtn type="submit" form="submit-info">
          검색
        </SubmitBtn>
      </Header>

      <ChoiceBox>
        <SearchType onClick={() => setChoice("web")}>웹 문서</SearchType>
        <SearchType onClick={() => setChoice("blog")}>블로그</SearchType>
        <SearchType onClick={() => setChoice("vclip")}>동영상</SearchType>
        <SearchType onClick={() => setChoice("image")}>이미지</SearchType>
      </ChoiceBox>

      <MainResult>
        {choice === "web" && result ? <WebResult result={result} /> : null}
        {choice === "vclip" && result ? <VideoResult result={result} /> : null}
        {choice === "image" && result ? <ImageResult result={result} /> : null}
        {choice === "blog" && result ? <BlogResult result={result} /> : null}
      </MainResult>
    </ChoiceTypeBox>
  );
};

export default ChoiceType;
