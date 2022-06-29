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
    width: 100%;
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
    position: fixed;
    box-shadow: 0 0 10em cyan;
    transition: 1s;
  }

  .addUser:hover {
    transition: 1s;
    border: 2px dashed cyan;
  }

  .buttonSubmit {
    width: 180px;
    margin: 20px 0 0 55px;
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
    margin-left: -40px;
    margin-top: 5px;
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

  h2 {
    margin: -20px 0 0 0;
    font-size: 18px;
  }

  .inputFormik {
    background-color: #eff0f6;
    color: #14142b;
    padding-left: 3px;
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

  .col3 {
    width: 33.33%;
    text-align: center;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col4 {
    width: 33.33%;
    text-align: center;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col5 {
    width: 33.33%;
    text-align: center;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col6 {
    width: var(--col-6);
    box-sizing: border-box;
    padding-right: 50px;
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

  h3 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
  }
`;
