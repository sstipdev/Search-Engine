const BlogResult = ({ result }) => {
  return (
    <div>
      <h3>블로그</h3>
      {result.map((info, i) => (
        <div key={i}>
          <div>{info.blogname}</div>
          <div dangerouslySetInnerHTML={{ __html: info.title }}></div>
          <div dangerouslySetInnerHTML={{ __html: info.contents }}></div>
          <img src={info.thumbnail} />
        </div>
      ))}
    </div>
  );
};

export default BlogResult;
