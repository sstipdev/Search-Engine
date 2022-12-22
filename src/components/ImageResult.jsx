import { ImageHeader, ImageTitle, ImageMain, ImageData, ImageLink, Image, ImageSiteName } from "../styles/ImageResultCSS";

const ImageResult = ({ result }) => {
  return (
    <>
      <ImageHeader>
        <ImageTitle>🌆 이미지 🌆</ImageTitle>
      </ImageHeader>
      <ImageMain>
        {result.map((info, i) => (
          <ImageData key={i}>
            {console.log(info)}
            <ImageLink href={info.doc_url} target="_blank">
              <Image src={info.thumbnail_url} />
              <ImageSiteName>👤 {info.display_sitename}</ImageSiteName>
            </ImageLink>
          </ImageData>
        ))}
      </ImageMain>
    </>
  );
};

export default ImageResult;
