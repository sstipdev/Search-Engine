import { VideoMain, VideoHeader, VideoTitle, VideoData, VideoUrl, VideoImg, VideoAuthor, VideoContentsTitle } from "../styles/VideoResultCSS";

const VideoResult = ({ result }) => {
  return (
    <>
      <VideoHeader>
        <VideoTitle>📽️ 동영상 📽️</VideoTitle>
      </VideoHeader>
      <VideoMain>
        {result.map((info, i) => {
          return (
            <VideoData key={i}>
              <VideoUrl href={info.url} target="__blank">
                <VideoImg src={info.thumbnail} />
                <VideoContentsTitle>{info.title}</VideoContentsTitle>
                <VideoAuthor>👤 {info.author}</VideoAuthor>
              </VideoUrl>
            </VideoData>
          );
        })}
      </VideoMain>
    </>
  );
};

export default VideoResult;
