import styles from "../styles/components/ImageResult.module.css";

const ImageResult = (props) => {
  return (
    <div>
      <div className={styles.image_header}>
        <span className={styles.image_header__title}>🌆 이미지 🌆</span>
      </div>
      <div className={styles.image_main}>
        {props.result.map((info, i) => (
          <div key={i} className={styles.image_contents}>
            <a href={info.doc_url} target="_blank" className={styles.image_link}>
              <img src={info.thumbnail_url} className={styles.image__link__thumbnail} />
              <div className={styles.image__link__identity}>👤 {info.display_sitename}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageResult;
