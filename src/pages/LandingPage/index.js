import React from 'react';
import Header from '../../components/Header';
import {
	Container,
	MiddleArea,
	BFText,
	BFTextContainer,
	SmallerText,
	Btn,
	BtnText,
	Img,
} from './styles';
import { useHistory } from 'react-router-dom';

// import { BrowserRouter as Link } from 'react-router-dom';

import Workers from '../../assets/workers.png';

const LandingPage = () => {
	const history = useHistory();
	return (
		<Container>
			<Header />
			<MiddleArea>
				<BFTextContainer>
					<BFText>Soluções de reciclagem para sua empresa</BFText>
					<SmallerText>
						Auxiliamos empresas a se manterem de acordo com as políticas
						ambientais, enquanto construímos um futuro mais digno para os jovens
					</SmallerText>
					<Btn onClick={() => history.push('/schedule')}>
						<BtnText>Agendar uma coleta</BtnText>
					</Btn>
				</BFTextContainer>
				<Img src={Workers}></Img>
			</MiddleArea>
		</Container>
	);
};

export default LandingPage;
