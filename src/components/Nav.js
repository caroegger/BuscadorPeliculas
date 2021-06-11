import {Link} from 'react-router-dom'

import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    link: {
        textDecoration:"none"
    }
}))

const Nav = () => {

    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                {/* <li>
                    IMG POCHOCLOS???
                </li> */}

                <Link to="/" className={classes.link}>
                    <Button variant="contained" color="primary" disableElevation>Home</Button>
                </Link>

                <Link to="/lanzamientos" className={classes.link}>
                    <Button variant="contained" color="primary" disableElevation>Ultimos Lanzamientos</Button>
                </Link>

                <Link to="/populares" className={classes.link}>
                    <Button variant="contained" color="primary" disableElevation>Populares</Button>
                </Link>

                <Link to="/buscar" className={classes.link}>
                    <Button variant="contained" color="primary" disableElevation>Buscar</Button>
                </Link>
            </Toolbar>
        </AppBar>
    ) 
}

export default Nav