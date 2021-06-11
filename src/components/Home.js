import useFetch from "../hooks/useFetch"
import ListaPeliculas from "./ListaPeliculas"

import Grid from '@material-ui/core/Grid';

const Home = () => {

    const populares = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")
    const mejorPuntuadas = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")

    return (
        <>
        <div>ESTOY EN HOME</div>
        {/* //CARRUSEL */}
        <Grid container direction="row" justify="space-around">
            {/* //peliculas populares */}
            <Grid>
                <p>Populares</p>
                <ListaPeliculas peliculas={populares}/>
            </Grid>

            <Grid item>
                {/* //mejor puntuadas */}
                <p>Mejor Puntuadas</p>
                <ListaPeliculas peliculas={mejorPuntuadas}/>
            </Grid>
        </Grid>
        </>
    )
}

export default Home