import styled from "styled-components";

export const ChoiceTypeBox = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid purple;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
  position: fixed;
  top: 50px;
  background-color: white;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const UserInput = styled.input`
  width: 100%;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 0.3px solid grey;
  &:focus {
    border: 1px solid green;
    outline: none;
  }

  @media screen and (max-width: 600px) {
    width: 68%;
    border-radius: 7px;
  }
`;

export const ChoiceBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0;
  position: fixed;
  top: 200px;
  background-color: white;
  font-size: 13px;
`;

export const SearchType = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
`;

export const MainResult = styled.div`
  padding: 200px 30px 30px 30px;
  box-sizing: border-box;
`;
