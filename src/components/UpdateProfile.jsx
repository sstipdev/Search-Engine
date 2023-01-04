import styles from "../styles/components/UpdateProfile.module.css";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { IsModalActivated } from "../store";
import { getAuth, updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const auth = getAuth();
  const [isModalActviated, setIsModalActivated] = useRecoilState(IsModalActivated);
  const [currentUserName, setCurrentUserName] = useState(auth.currentUser.displayName);
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState("");

  const handleCloseModal = () => setIsModalActivated(false);

  const getNewUserNameValue = (e) => {
    const {
      target: { value },
    } = e;
    value.length > 8 ? setError("닉네임 길이수 초과 8글자 이내로 작성 해주세요") : setNewUserName(value);
  };

  const handleSetNewUserName = async () => {
    if (currentUserName === newUserName) return setError("기존 닉네임과 동일 합니다.");
    if (newUserName === "") return setError("공백 닉네임은 금지 입니다.");
    try {
      await updateProfile(auth.currentUser, {
        displayName: newUserName,
      });
      alert("닉네임이 변경되었습니다.");
      handleCloseModal();
    } catch (error) {
      console.log(`에러발생 ${error}`);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__info}>
        <div className={styles.modal__info_title}>프로필 업데이트</div>
        <div className={styles.modal_currentUser}>
          <div className={styles.modal_currentUser__title}>현재 닉네임</div>
          <input className={styles.modal_currentUser__input} type="text" placeholder={currentUserName} disabled />
        </div>
        <div className={styles.modal_newUser}>
          <div className={styles.modal_newUser__title}>변경할 닉네임</div>
          <input className={styles.modal_newUser__input} type="text" placeholder="*변경하실 닉네임" onInput={getNewUserNameValue} />
          <div className={styles.modal_errorMsg}>{error && error}</div>
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.modal_changeUserName_btn} onClick={handleSetNewUserName}>
            닉네임 변경
          </button>
          <button className={styles.modal_close_btn} onClick={handleCloseModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
