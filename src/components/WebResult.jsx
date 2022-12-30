import { AiOutlineCheck } from "react-icons/ai";
import styles from "../styles/components/WebResult.module.css";

const WebResult = ({ result }) => {
  return (
    <div>
      <div className={styles.web_header}>
        <span className={styles.web_header__title}>🌐 웹 🌐</span>
      </div>
      <div className={styles.web_main}>
        {result.map((info, i) => {
          return (
            <div key={i} className={styles.web_contents}>
              <div dangerouslySetInnerHTML={{ __html: info.contents }} className={styles.web_contents__desc}></div>
              <div className={styles.web_shortcut}>
                <span dangerouslySetInnerHTML={{ __html: info.title }} className={styles.web_desc__title}></span>
                <a href={info.url} target="_blank" className={styles.web_link}>
                  <AiOutlineCheck size="24" className={styles.web_link__icons} />
                  <span className={styles.web_link__text}>바로가기</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebResult;
