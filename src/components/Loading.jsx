import styles from "../styles/components/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_test}>
      <div className={styles.loading_container}>
        <div className={styles.loading}></div>
        <div id={styles.loading_text}>loading</div>
      </div>
    </div>
  );
};

export default Loading;
