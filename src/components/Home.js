import useFetch from "../hooks/useFetch";
import ListaPeliculas from "./ListaPeliculas";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Carrusel from "./Carrusel";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
      height: 600,
      padding: 50
    }
  }));

const Home = () => {

    const populares = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")
    const mejorPuntuadas = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")

    const classes = useStyles();

    return (
        <>
        {/* //CARRUSEL */}
        <div>
            <Carrusel/>
        </div>
        <div className={classes.root}>
            <GridList cellHeight={600} className={classes.gridList}>
                {/* //peliculas populares */}
                <GridListTile>
                    <ListaPeliculas titulo="Peliculas Populares" peliculas={populares}/>
                </GridListTile>
                <GridListTile>
                    {/* //mejor puntuadas */}
                    <ListaPeliculas titulo="Peliculas Populares" peliculas={mejorPuntuadas}/>
                </GridListTile>
            </GridList>
        </div>
        </>
    )
}

export default Home