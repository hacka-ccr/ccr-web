import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
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
	font-weight: bold;
	font-size: 40px;
	text-decoration: underline;
	font-family: 'Playfair Display', serif;
`;

export const SmallerText = styled.p`
	margin-top: 30px;
	color: black;
	font-size: 23px;
	font-family: 'Playfair Display', serif;
`;

export const Img = styled.img``;

export const FormContainer = styled.div`
	width: 900px;
	height: 600px;
	margin-top: 35px;
	background-color: #07664e;
	border-radius: 24px;
	padding: 30px 40px;
`;

export const SmallInputContainer = styled.input`
	background-color: white;
	width: 400px;
	height: 42px;
	border-radius: 12px;
	margin-top: 7px;
`;

export const BigInputContainer = styled.textarea`
	background-color: white;
	width: 900px;
	height: 200px;
	border-radius: 12px;
	margin-top: 7px;
`;

export const InputContainer = styled.input`
	background-color: white;
	width: 900px;
	height: 42px;
	border-radius: 12px;
	margin-top: 7px;
`;

export const InputTitle = styled.p`
	color: white;
	font-family: 'Ubuntu', sans-serif;
	font-size: 15px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const InputWrapper = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

export const BtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const Btn = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #1f4239;
	border-color: black;
	color: white;
	border-width: 1px;
	border-radius: 24px;
	width: 120px;
	height: 42px;

	:hover {
		cursor: pointer;
	}
`;

export const BtnText = styled.p`
	color: white;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
`;
