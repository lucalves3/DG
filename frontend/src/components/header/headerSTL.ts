import styled from 'styled-components';

export const HeaderSTL = styled.header`
  background-color: #34364f;
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: white;
    font-family: 'Poppins';
    margin-top: -20px;
  }

  .bottomBar {
    background-color: #b8fc1c;
    border-radius: 10px;
    margin-top: -30px;
    width: 100%;
    height: 10px;
    animation: shake 5s ease infinite both;
    transform-origin: 50% 50%;
    transition: 1s;
  }

  .bottomBar:hover {
    background-color: red;
    transition: 1s;
  }

  .profileImg {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10%;
  }

  a {
    color: white;
    font-family: 'Poppins';
    text-decoration: none;
  }

  .PipeBar {
  height: 50px;
  background-color: #b8fc1c;
  border: 1px solid #b8fc1c;
  margin: 0 10px 0 10px
  }

  @keyframes shake {
   0% { transform:translate(0,0) }
  1.78571% { transform:translate(5px,0) }
  3.57143% { transform:translate(0,0) }
  5.35714% { transform:translate(5px,0) }
  7.14286% { transform:translate(0,0) }
  8.92857% { transform:translate(5px,0) }
  10.71429% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
}
`;
