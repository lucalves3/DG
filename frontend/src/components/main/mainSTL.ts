import styled from 'styled-components';
import trash from '../../images/trash.svg';

export const MainSTL = styled.main`
  background-color: #41436a;
  /* width: 100vw;
height: 100vh; */
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
    /* margin-left: 20%; */
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
