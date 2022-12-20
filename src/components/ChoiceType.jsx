import { useState } from "react";
import Logo from "../assets/logo.jpeg";
import WebResult from "./WebResult";
import VideoResult from "./VideoResult";
import ImageResult from "./ImageResult";
import BlogResult from "./BlogResult";

import { ChoiceTypeBox, LogoImg, Header, UserForm, UserInput, SubmitBtn, ChoiceBox, SearchType, MainResult } from "../styles/\bChoiceTypeCSS";

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
        {choice === "web" && <WebResult result={result} />}
        {choice === "vclip" && <VideoResult result={result} />}
        {choice === "image" && <ImageResult result={result} />}
        {choice === "blog" && <BlogResult result={result} />}
      </MainResult>
    </ChoiceTypeBox>
  );
};

export default ChoiceType;
