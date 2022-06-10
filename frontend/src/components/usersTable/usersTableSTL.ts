import styled from 'styled-components';

export const UsersTableSTL = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .divTrue {
    width: 90%;
    display: flex;
    font-family: 'Poppins';
    background-color: #34364f;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
		border-radius: 10px;
		padding: 0 70px 0 70px;
  }
  .divFalse {
    width: 90%;
    display: flex;
    font-family: 'Poppins';
    background-color: inherit;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
		border-radius: 10px;
		padding: 0 70px 0 70px;
  }

  .col-2 {
    margin-left: 20px;
    width: 35%;
    display: flex;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col-3 {
    width: 25%;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col-4 {
    width: 18%;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col-5 {
    width: 15%;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .col-6 {
    width: var(--col-6);
    box-sizing: border-box;
    padding-right: 50px;
  }

  .checkbox {
    -webkit-appearance: none;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 2px;
    transition: 1.5s;
  }

  .checkbox:checked {
    transition: 1.5s;
    border-radius: 100%;
    background-color: rgb(252, 0, 0, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #99a1a7;
  }
`;
