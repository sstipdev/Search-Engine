import styles from "../styles/routes/NotPage.module.css";
import { Link } from "react-router-dom";

const NotPage = () => {
  return (
    <div className={styles.page_error_wrap}>
      <div className={styles.page_error_code}>404</div>
      <div className={styles.page_error_desc}>현재 접속하신 주소는 올바른 주소가 아닙니다.</div>
      <Link to="/login" className={styles.page_error_link}>
        홈으로
      </Link>
    </div>
  );
};

export default NotPage;
