import styled from "styled-components";

export const BlogMain = styled.ul`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #747474;
  padding: 0;
`;

export const BlogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BlogTitle = styled.span`
  padding: 25px 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const BlogData = styled.li`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BlogContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const BlogName = styled.p`
  color: #505050;
`;

export const BlogContentsTitle = styled.p`
  color: #0c43b7;
  font-size: 1.3rem;
`;

export const BlogContentsDesc = styled.div`
  color: #404040;
  font-size: 1.1rem;
`;

export const BlogImg = styled.img`
  width: 200px;
  height: 130px;
`;

export const ImgLink = styled.a`
  text-decoration: none;
`;
