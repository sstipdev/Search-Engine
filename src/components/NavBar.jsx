import { useState } from "react";
import { signOut, getAuth, deleteUser } from "firebase/auth";
import { AiFillSetting } from "react-icons/ai";
import UpdateProfile from "./UpdateProfile.jsx";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IsModalActivated } from "../store";

// CSS
import styles from "../styles/components/NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isModalActviated, setIsModalActivated] = useRecoilState(IsModalActivated);

  // getter는 state의 값만 필요로 할때, state의 값은 업데이트할수 없음
  // const isModalActivated = useRecoilValue(IsModalActivated);

  // setter는 state의 값을 업데이트 할수 있음
  // const setIsModalActivated = useSetRecoilState(IsModalActivated);

  const path = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  /**
   * navbar 출력 상태 변환
   *
   * navbar의 숨김 여부를 저장합니다.
   */
  const showNavBarMenu = () => setNav((prev) => !prev);

  /** 로그아웃 함수 */
  const handleLogout = async () => {
    await signOut(auth);
    path("/login");
  };

  /** 닉네임 변경 함수 */
  const handleUpdateProfile = () => console.log("1");

  /** 회원탈퇴 함수 */
  const handleDeleteAccount = async () => {
    try {
      if (window.confirm("정말로 계정을 삭제하실껀가요 ?")) {
        alert("배신자 ㅂ2");
        await deleteUser(user);
        path("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <span className={styles.navbar_identity__username}>{user.displayName ? user.displayName : "익명"}</span>
              <span className={styles.navbar_identity__welcome__text}>님 반갑습니다</span>
            </div>

            <div className={styles.navbar_close} onClick={showNavBarMenu}>
              <button className={styles.navbar_close__btn}>닫기</button>
            </div>

            <div className={styles.navbar_update_profile}>
              <button onClick={handleUpdateProfile} className={styles.navbar_update_profile_btn}>
                닉네임 변경
              </button>
            </div>

            <div className={styles.navbar_logout}>
              <button onClick={handleLogout} className={styles.navbar_logout__btn}>
                로그아웃
              </button>
            </div>

            <div className={styles.navbar_logout}>
              <button onClick={handleDeleteAccount} className={styles.navbar_logout__btn}>
                회원탈퇴
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
