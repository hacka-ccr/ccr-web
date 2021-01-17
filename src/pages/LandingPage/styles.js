import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const MiddleArea = styled.div`
	display: flex;
	flex-direction: row;
	width: 1700px;
	margin-top: 40px;
	align-self: center;
	height: 700px;
	align-items: center;
	justify-content: space-between;
`;

export const BFTextContainer = styled.div`
	width: 720px;
	margin-left: 100px;
`;

export const BFText = styled.p`
	color: black;
	font-size: 65px;
	font-family: 'Playfair Display', serif;
`;

export const SmallerText = styled.p`
	margin-top: 30px;
	color: black;
	font-size: 23px;
	font-family: 'Playfair Display', serif;
`;

export const Btn = styled.button`
	margin-top: 30px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #1f4239;
	border-color: black;
	color: white;
	border-width: 1px;
	border-radius: 24px;
	width: 344px;
	height: 88px;
	margin-right: 50px;

	:hover {
		cursor: pointer;
	}
`;

export const BtnText = styled.p`
	color: white;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
`;

export const Img = styled.img``;
