const ImageResult = ({ result }) => {
  return (
    <div>
      <h3>이미지</h3>
      {result.map((info, i) => (
        <div key={i}>
          <div>{info.display_sitename}</div>
          <img src={info.thumbnail_url} />
        </div>
      ))}
    </div>
  );
};

export default ImageResult;
