import styles from "../styles/components/NavBar.module.css";

import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const showNavBarMenu = () => setNav((prev) => !prev);
  return (
    <div className={styles.btn} id={nav ? styles.show : ""}>
      <div className={styles.test}>
        <span onClick={showNavBarMenu}>{!nav && "메뉴"}</span>
      </div>
      <div id={nav ? styles.showModal : ""}>
        {nav && (
          <div onClick={showNavBarMenu} className={styles.modalText}>
            반갑습니다
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
