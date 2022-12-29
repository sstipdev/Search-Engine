import { useState } from "react";

import { signOut, getAuth } from "firebase/auth";

// CSS
import styles from "../styles/components/NavBar.module.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const showNavBarMenu = () => setNav((prev) => !prev);

  const LogOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <div className={styles.btn} id={nav ? styles.show : ""}>
      <div className={styles.test}>
        <span onClick={showNavBarMenu}>{!nav && "메뉴"}</span>
      </div>
      <div id={nav ? styles.showNavBar : ""}>
        {nav && (
          <div className={styles.navbar_info}>
            <div className={styles.navbar_text}>반갑습니다</div>

            <div className={styles.navbar_footer} onClick={showNavBarMenu}>
              <button className={styles.navbar_footer_text}>닫기</button>
            </div>
            <div>
              <button onClick={LogOut} className={styles.logout_btn}>
                로그아웃
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
