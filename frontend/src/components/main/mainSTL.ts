import styled from 'styled-components';
import trash from '../../images/trash.svg';

export const MainSTL = styled.main`
  background-color: #41436a;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;

  .tagName {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 80%;
  }

  .addUser {
    display: flex;
    background-color: #34364f;
    border: 2px solid cyan;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    width: 400px;
    height: 200px;
    transition: 1s;
  }

  .buttonSubmit {
    width: 200px;
    margin: 20px 0 -30px 75px;
    background-color: cyan;
    border: none;
    cursor: pointer;
    font-family: 'Poppins';
    border-radius: 10px;
    transition: 1s;
  }

  .buttonSubmit:hover {
    transition: 1s;
    background-color: #b8fc1c;
  }

  .buttonCallFormik {
    width: 200px;
    margin: 20px 50px 20px 0;
    border: none;
    background-color: cyan;
    cursor: pointer;
    border-radius: 8px;
    font-family: 'Poppins';
  }

  .buttonClose {
    color: white;
    background-color: inherit;
    border: none;
    font-family: 'Poppins';
    font-weight: 700;
    cursor: pointer;
    margin: -15px -350px 0 0;
  }

  .inputFormik {
    background-color: #eff0f6;
    color: #14142b;
    width: 98%;
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    border: none;
    height: 30px;
    font-family: 'Poppins';
    text-align: start;
    align-self: center;
    outline: none;
  }

  .spanFormik {
    margin-left: 15px;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .addUser:hover {
    transition: 1s;
    border: 2px dashed cyan;
  }

  .buttonDelete {
    display: block;
    background-image: url(${trash});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: inherit;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 20px;
  }
`;
