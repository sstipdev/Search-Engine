import styled from "styled-components";

export const WebMain = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #747474;
`;

export const WebHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    margin-top: 140px;
  }
`;

export const WebTitle = styled.span`
  padding: 25px 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 30px;
  border-radius: 10px;
`;
export const WebData = styled.div`
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
`;

export const WebContents = styled.div`
  color: black;
  margin-bottom: 40px;
  width: 100%;
  max-width: 80%;
`;

export const WebShortCut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WebLink = styled.a`
  text-decoration: none;
`;

export const WebLinkSpan = styled.span`
  color: grey;
  position: relative;
  bottom: 5px;
  font-size: 15px;
  z-index: -1;
`;

export const WebDescTitle = styled.span`
  color: ##8f8f8f;
  max-width: 70%;
`;
