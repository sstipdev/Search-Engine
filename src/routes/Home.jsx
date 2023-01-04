import React, { useState } from "react";
import WebResult from "../components/WebResult";
import VideoResult from "../components/VideoResult";
import ImageResult from "../components/ImageResult";
import BlogResult from "../components/BlogResult";
import NavBar from "../components/NavBar";
import styles from "../styles/routes/Home.module.css";

const Home = (props) => {
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
    <div className={styles.home}>
      <NavBar />
      <div className={styles.header}>
        <div className={styles.MainName}>SBDM</div>
      </div>

      <div className={styles.search_main}>
        <input className={styles.search_main_input} onInput={(e) => setSearch(e.target.value)} type="text" placeholder="검색어를 기입해주세요" value={search} />
      </div>

      <ul className={styles.search_list}>
        <li onClick={(e) => setChangeResult("web")} className={`${choice === "web" ? "active" : ""} ${styles.search_list_item}`}>
          🌐 웹 문서 🌐
        </li>
        <li onClick={(e) => setChangeResult("blog")} className={`${choice === "blog" ? "active" : ""} ${styles.search_list_item}`}>
          📚 블로그 📚
        </li>
        <li onClick={(e) => setChangeResult("vclip")} className={`${choice === "vclip" ? "active" : ""} ${styles.search_list_item}`}>
          📽️ 동영상 📽️
        </li>
        <li onClick={(e) => setChangeResult("image")} className={`${choice === "image" ? "active" : ""} ${styles.search_list_item}`}>
          🌆 이미지 🌆
        </li>
      </ul>

      <div className={styles.article_result}>
        {choice === "web" && result && <WebResult result={result} />}
        {choice === "blog" && result && <BlogResult result={result} />}
        {choice === "vclip" && result && <VideoResult result={result} />}
        {choice === "image" && result && <ImageResult result={result} />}
      </div>
    </div>
  );
};

export default Home;
