import styled from "styled-components";

export const ChoiceTypeBox = styled.div`
  width: 100%;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
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
  border-top 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 0;
  margin-bottom:40px;
`;

export const SearchType = styled.li`
  width: 100%;
  text-align: center;
  color: green;
  list-style: none;
  padding: 20px;
  box-sizing: border-box;
`;

export const MainResult = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;
