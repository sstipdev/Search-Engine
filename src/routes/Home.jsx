import { useState } from "react";
import Logo from "../assets/logo.jpeg";
import WebResult from "../components/WebResult";
import VideoResult from "../components/VideoResult";
import ImageResult from "../components/ImageResult";
import BlogResult from "../components/BlogResult";
import NavBar from "../components/NavBar";
import styles from "../styles/routes/Home.module.css";
import { ChoiceTypeBox, LogoImg, Header, UserInput, ChoiceBox, SearchType, MainResult } from "../styles/routes/HomeCSS";

const ChoiceType = () => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;

  const getApiData = async (choice) => {
    const HOST = `https://dapi.kakao.com/v2/search/${choice}?query=${search}`;

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
    console.log(result);
    return setResult(json.documents);
  };

  const setChangeResult = (type) => {
    if (search === "") {
      return alert("공백은 금지 입니다.");
    }

    // setChangeResult 함수가 호출되면 인수로 받은 type으로 choice 함수 state값 변경
    setChoice(type);

    // 인수로 받은 type이 choice의 state의 값과 동일하지 않다면 getApiData() 호출
    if (type !== choice) {
      return getApiData(type);
    }
  };

  return (
    <ChoiceTypeBox>
      <div className={styles.header}>
        <NavBar />
        <p className={styles.MainName}>SBDM</p>
      </div>
      <Header>
        <LogoImg src={Logo} />
        <UserInput onInput={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
      </Header>

      <ChoiceBox>
        {/* 클릭시 CSS 기능 추가 예정 */}
        <SearchType onClick={(e) => setChangeResult("web")} className={choice === "web" ? "active" : ""}>
          🌐 웹 문서 🌐
        </SearchType>
        <SearchType onClick={(e) => setChangeResult("blog")} className={choice === "blog" ? "active" : ""}>
          📚 블로그 📚
        </SearchType>
        <SearchType onClick={(e) => setChangeResult("vclip")} className={choice === "vclip" ? "active" : ""}>
          📽️ 동영상 📽️
        </SearchType>
        <SearchType onClick={(e) => setChangeResult("image")} className={choice === "image" ? "active" : ""}>
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
