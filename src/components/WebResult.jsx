const WebResult = ({ result }) => {
  return (
    <div>
      <h3>여긴 웹 결과물</h3>
      {result.map((info, i) => {
        return (
          <div key={i}>
            <p dangerouslySetInnerHTML={{ __html: info.contents }}></p>
            <span>{info.url}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WebResult;
