import styled from "styled-components";

export const ImageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageTitle = styled.span`
  padding: 25px 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const ImageMain = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #747474;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const ImageData = styled.div`
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  width: 25%;
  @media screen and (max-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ImageLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Image = styled.img`
    width:100%;
    max-width:75%;
    margin:15px; 0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ImageSiteName = styled.div`
  color: #505050;
  font-weight: bold;
  font-size: 14px;
`;
