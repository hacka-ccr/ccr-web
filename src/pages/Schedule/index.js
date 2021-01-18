import React from 'react';
import Header from '../../components/Header';
import {
	Container,
	FormContainer,
	BFText,
	SmallInputContainer,
	InputTitle,
	InputWrapper,
	Row,
	BigInputContainer,
	InputContainer,
	Btn,
	BtnText,
	BtnContainer,
} from './styles';

const Schedule = () => {
	return (
		<Container>
			<Header />
			<BFText>Agendar coleta</BFText>
			<FormContainer>
				<Row>
					<InputWrapper>
						<InputTitle>Nome</InputTitle>
						<SmallInputContainer></SmallInputContainer>
					</InputWrapper>

					<InputWrapper>
						<InputTitle>CNPJ</InputTitle>
						<SmallInputContainer></SmallInputContainer>
					</InputWrapper>
				</Row>

				<InputWrapper>
					<InputTitle>
						Que tipo de material está disponível para coleta?
					</InputTitle>
					<BigInputContainer></BigInputContainer>
				</InputWrapper>

				<InputWrapper>
					<InputTitle>Endereço</InputTitle>
					<InputContainer></InputContainer>
				</InputWrapper>

				<InputWrapper>
					<InputTitle>E-mail</InputTitle>
					<InputContainer></InputContainer>
				</InputWrapper>

				<BtnContainer>
					<Btn>
						<BtnText>Enviar</BtnText>
					</Btn>
				</BtnContainer>
			</FormContainer>
		</Container>
	);
};

export default Schedule;
