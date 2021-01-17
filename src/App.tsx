import logo from './assets/logo.png';
import workers from './assets/workers.png';
import React from 'react';
import { Button } from '@material-ui/core';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Cores:
// #71BA45
// #C7D631
// #437F5B

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#437F5B'
    },
    secondary: {
      main: '#C7D631'
    }
  }
});


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1>Baixar o app</h1>
          <h1>Soluções para sua empresa</h1>
          <h1>Loja</h1>
          <h1>Serviços</h1>
          <h1>Sobre</h1>
          <Button variant="outlined" color="primary">
            Login
        </Button>
        </header>

        <h1>Soluções de reciclagem para sua empresa</h1>
        <p>Auxiliamos empresas a se manterem de acordo com as políticas ambientais, enquanto construímos um futuro mais digno para os jovens</p>

        <img src={workers} alt=""/>
        <Button variant="contained" color="primary">
          Agende uma coleta
        </Button>

      </MuiThemeProvider>
    </div>
  );
}

export default App;
