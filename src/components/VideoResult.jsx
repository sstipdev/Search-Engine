import styles from "../styles/components/VideoResult.module.css";

const VideoResult = (props) => {
  return (
    <div>
      <div className={styles.video_header}>
        <span className={styles.video_header__title}>📽️ 동영상 📽️</span>
      </div>
      <div className={styles.video_main}>
        {props.result.map((info, i) => {
          return (
            <div key={i} className={styles.video_contents}>
              <a href={info.url} target="__blank" className={styles.video_link}>
                <img src={info.thumbnail} className={styles.video_link__img} />
                <p className={styles.video_link__title}>{info.title}</p>
                <div className={styles.video_link__identity}>👤 {info.author}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoResult;
