import styled from "styled-components";

export const ChoiceTypeBox = styled.div`
  width: 100%;
`;

export const MainName = styled.p`
  position: fixed;
  text-align: center;
  width: 100%;
  background-color: white;
  font-size: 22px;
  height: 100px;
  margin: 0;
  padding-top: 30px;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid purple;
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
`;

export const UserForm = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
`;

export const UserInput = styled.input`
  width: 100%;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid blue;
  &:focus {
    border: 1px solid green;
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  padding: 15px 30px;
  border-radius: 15px;
  border: none;
`;

export const ChoiceBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0;
  position: fixed;
  top: 150px;
  background-color: white;
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
