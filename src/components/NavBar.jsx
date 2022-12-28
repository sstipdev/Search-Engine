import styles from "../styles/components/NavBar.module.css";

import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const showNavBarMenu = () => setNav((prev) => !prev);
  return (
    <div className={styles.btn} id={nav ? styles.show : styles.hide} onClick={showNavBarMenu}>
      <div>메뉴</div>
    </div>
  );
};
export default NavBar;
