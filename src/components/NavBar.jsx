import { useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { AiFillSetting } from "react-icons/ai";

// CSS
import styles from "../styles/components/NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [nav, setNav] = useState(false);
  const showNavBarMenu = () => setNav((prev) => !prev);
  const path = useNavigate();
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    path("/login");
  };

  const handleChangeName = () => console.log(1);

  return (
    <div className={styles.navbar_wrap} id={nav ? styles.show : ""}>
      <div className={styles.navbar_textbox}>
        <span onClick={showNavBarMenu}>
          {!nav && (
            <span>
              <AiFillSetting className={styles.icon_setting} />
            </span>
          )}
        </span>
      </div>
      <div id={nav ? styles.showNavBar : ""}>
        {nav && (
          <div className={styles.navbar_info}>
            <div className={styles.navbar_text}>
              <span className={styles.navbar_identity__username}>{props.userNickName}</span>
              <span className={styles.navbar_identity__welcome__text}>님 반갑습니다</span>
            </div>

            <div className={styles.navbar_close} onClick={showNavBarMenu}>
              <button className={styles.navbar_close__btn}>닫기</button>
            </div>

            <div className={styles.navbar_update_profile}>
              <button onClick={handleChangeName} className={styles.navbar_update_profile_btn}>
                닉네임 변경
              </button>
            </div>

            <div className={styles.navbar_logout}>
              <button onClick={handleLogout} className={styles.navbar_logout__btn}>
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
