import { WebMain, WebHeader, WebTitle, WebData, WebContents, WebLink, WebShortCut } from "../styles/WebResultCSS";
import { AiOutlineCheck } from "react-icons/ai";

const WebResult = ({ result }) => {
  return (
    <>
      <WebHeader>
        <WebTitle>🌐 웹 🌐</WebTitle>
      </WebHeader>
      <WebMain>
        {result.map((info, i) => {
          return (
            <WebData key={i}>
              <WebContents dangerouslySetInnerHTML={{ __html: info.contents }}></WebContents>
              <WebShortCut>
                <WebLink href={info.url} target="_blank">
                  <AiOutlineCheck size="24" style={{ color: "green" }} />
                  바로가기
                </WebLink>
              </WebShortCut>
            </WebData>
          );
        })}
      </WebMain>
    </>
  );
};

export default WebResult;
