import React, { useState } from 'react';
import {
	Container,
	HeaderTitle,
	HeaderLogo,
	HeaderUserSettings,
	NavItem,
	NavBtn,
	BtnText,
} from './styles';
import { IconContext } from 'react-icons';
import { BiUser } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';
import logo from '../../assets/logo.png';

const Header = () => {
	return (
		<Container>
			<HeaderLogo src={logo} />
			<HeaderTitle>NOVO DE NOVO</HeaderTitle>
			<HeaderUserSettings>
				<NavItem>Baixar o app</NavItem>
				<NavItem>Soluções para sua empresa</NavItem>
				<NavItem>Loja</NavItem>
				<NavItem>Serviços</NavItem>
				<NavItem>Sobre</NavItem>
				<NavBtn>
					<BtnText>Login</BtnText>
				</NavBtn>
			</HeaderUserSettings>
		</Container>
	);
};

export default Header;
