import { BlogMain, BlogHeaderTitle, BlogData, BlogContents, BlogName, BlogContentsTitle, ImgLink, BlogContentsDesc, BlogImg } from "../styles/BlogResultCSS";

const BlogResult = ({ result }) => {
  return (
    <BlogMain>
      <BlogHeaderTitle>📚 블로그 📚</BlogHeaderTitle>
      {result.map((info, i) => (
        <BlogData key={i}>
          <ImgLink href={info.url} target="__blank">
            <BlogContents>
              <BlogName>
                👤 {info.blogname} / ( 🕰️ {info.datetime} )
              </BlogName>
              <BlogContentsTitle dangerouslySetInnerHTML={{ __html: info.title }}></BlogContentsTitle>
              <BlogContentsDesc dangerouslySetInnerHTML={{ __html: info.contents }}></BlogContentsDesc>
            </BlogContents>
          </ImgLink>
          <BlogImg src={info.thumbnail} />
        </BlogData>
      ))}
    </BlogMain>
  );
};

export default BlogResult;
