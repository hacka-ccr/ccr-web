import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	height: 10%;
`;

export const HeaderLogo = styled.img`
	margin-left: 50px;
	width: 40px;
	height: 40px;
`;

export const HeaderTitle = styled.div`
	color: #275e4d;
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	font-size: 20px;
	width: 300px;
	margin-left: 10px;
`;

export const HeaderUserSettings = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	margin-right: 20px;
`;

export const NavItem = styled.p`
	margin: 0 30px;
	color: black;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
	align-self: center;
`;

export const BtnText = styled.p`
	color: black;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
`;

export const NavBtn = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border-color: black;
	border-width: 1px;
	border-radius: 24px;
	width: 100px;
	height: 37px;
	margin-right: 50px;
`;
