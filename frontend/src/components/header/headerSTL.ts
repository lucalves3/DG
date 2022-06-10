import styled from 'styled-components';

export const HeaderSTL = styled.header`
  background-color: #34364f;
  width: 100%;
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
    width: 100px;
    color: white;
    font-family: 'Poppins';
    margin-top: -20px;
    cursor: default;
  }

  .bottomBar {
    background-color: cyan;
    border-radius: 10px;
    margin-top: -30px;
    margin-left: 50px;
    width: 150px;
    height: 10px;
    animation: shake 5s ease infinite both;
    transform-origin: 50% 50%;
    transition: 1s;
  }

  .bottomBar:hover {
    background-color: #b8fc1c;
    transition: 1s;
    background-image: linear-gradient(to right, cyan, cyan, #b8fc1c);
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
    transition: 1s;
  }

  .PipeBar {
    height: 50px;
    padding: 0.5px;
    margin: 0 5px 0 5px;
    background-color: cyan;
    border: 1px solid cyan;
    border-radius: 2px;
    transition: 1s;
  }

  .PipeBar:hover,
  a:hover {
    transition: 1s;
    margin: 0 15px 0 15px;
  }

  .PipeBar:hover {
    background-color: cyan;
    border: 1px solid cyan;
    transform: rotate(30deg);
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(5px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(5px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(5px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
