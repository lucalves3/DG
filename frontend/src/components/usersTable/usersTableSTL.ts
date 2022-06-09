import styled from 'styled-components';

export const UsersTableSTL = styled.section`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;

.checkbox {
  -webkit-appearance: none;
	background-color: white;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
	padding: 9px;
	border-radius: 2px;
  transition: 1.5s;
}

.checkbox:checked {
  transition: 1.5s;
  border-radius: 100%;
	background-color: rgb(252, 0, 0, 1);
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
	color: #99a1a7;
}

`;