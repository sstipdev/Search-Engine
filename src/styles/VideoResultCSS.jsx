import styled from "styled-components";

export const VideoMain = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #747474;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const VideoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const VideoTitle = styled.span`
  padding: 25px 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const VideoData = styled.div`
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

export const VideoUrl = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const VideoImg = styled.img`
  width: 100%;
  min-width: 80px;
  border-radius: 7px;
`;

export const VideoContentsTitle = styled.p`
  color: #202020;
`;

export const VideoAuthor = styled.div`
  color: #8f8f8f;
`;
