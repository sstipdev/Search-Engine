const WebResult = ({ result }) => {
  return (
    <div>
      <h3>여긴 웹 결과물</h3>
      {result.map((info, i) => {
        {
          console.log(info);
        }
        return (
          <div key={i}>
            <h2>{info.contents}</h2>
            <div>{info.datetime}</div>
            <span>{info.url}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WebResult;
