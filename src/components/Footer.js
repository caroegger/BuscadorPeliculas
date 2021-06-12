import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

const Footer = () => {

    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography color="inherit">
                🎥 Movie App
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    ) 
}

export default Footer