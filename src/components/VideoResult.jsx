const VideoResult = ({ result }) => {
  return (
    <div>
      <h3>비디오</h3>
      {result.map((info, i) => {
        return (
          <div key={i}>
            <div>{info.author}</div>
            <div>{info.title}</div>
            <div>
              <img src={info.thumbnail} />
            </div>
            <div>{info.url}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoResult;
