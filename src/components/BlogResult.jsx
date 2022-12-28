import {
  BlogMain,
  BlogHeader,
  BlogTitle,
  BlogData,
  BlogContents,
  BlogName,
  BlogContentsTitle,
  ImgLink,
  BlogContentsDesc,
  BlogImg,
} from "../styles/components/BlogResultCSS";

const BlogResult = ({ result }) => {
  return (
    <>
      <BlogHeader>
        <BlogTitle>📚 블로그 📚</BlogTitle>
      </BlogHeader>
      <BlogMain>
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
    </>
  );
};

export default BlogResult;
