import React from 'react';
import NavBar from '../components/Navigation/navbar'
import ContainerMaterial from '@material-ui/core/Container'
import CreatePage from '../components/CreateAccount/createAccountPage'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from '../components/Footer/footer'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#374949",
        light: "#c2c5cc"
      },
      secondary: {
          main: "#ffffff"
      }
    },
  });

export default function Container() {
    return(
        <div>
            <ThemeProvider theme={theme}>
            <NavBar/>
            <ContainerMaterial maxWidth="md">
                {/* Insert creation of account here */}
                <CreatePage/>
            </ContainerMaterial>
            {/* <Footer/> */}
            </ThemeProvider>
        </div>
    );
}