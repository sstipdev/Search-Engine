import { useState } from "react";

const ChoiceType = ({ getChoice }) => {
  const [choice, setChoice] = useState("web");

  const choiceFc = (e) => {
    const {
      target: { value },
    } = e;
    return setChoice(value);
  };

  getChoice(choice);

  return (
    <select onChange={choiceFc}>
      <option value="web">웹 문서</option>
      <option value="vclip">동영상</option>
      <option value="image">이미지</option>
      <option value="blog">블로그</option>
    </select>
  );
};

export default ChoiceType;
