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
	Wallpaper,
	Square,
	SquareContainer,
	SquareTitle,
	Squares,
} from './styles';

import Paper from '../../assets/wallpaper.jpg';
import Mouse from '../../assets/mouse.jpg';
import Monitor from '../../assets/monitor.jpg';
import Case from '../../assets/case.webp';
import Pecas from '../../assets/pecas.jpg';

const Schedule = () => {
	return (
		<Container>
			<Header />
			<BFText>Loja</BFText>
			<Wallpaper src={Paper}></Wallpaper>
			<Squares>
				<SquareContainer>
					<Square src={Mouse}></Square>
					<SquareTitle>Acessórios</SquareTitle>
				</SquareContainer>

				<SquareContainer>
					<Square src={Monitor}></Square>
					<SquareTitle>Monitores</SquareTitle>
				</SquareContainer>

				<SquareContainer>
					<Square src={Case}></Square>
					<SquareTitle>Gabinetes</SquareTitle>
				</SquareContainer>

				<SquareContainer>
					<Square src={Pecas}></Square>
					<SquareTitle>Peças sobressalentes</SquareTitle>
				</SquareContainer>
			</Squares>

			{/* <FormContainer>
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
					<Btn
						onClick={() =>
							swal(
								'Concluído',
								'Nossa equipe irá entrar em contato!',
								'success'
							)
						}
					>
						<BtnText>Enviar</BtnText>
					</Btn>
				</BtnContainer>
			</FormContainer> */}
		</Container>
	);
};

export default Schedule;
