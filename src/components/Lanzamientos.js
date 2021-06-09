import useFetch from '../hooks/useFetch'
import ListaPeliculas from './ListaPeliculas'

const Lanzamientos = () => {

    const peliculasLanzamiento = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")

    return(
        <ListaPeliculas peliculas={peliculasLanzamiento} titulo="Ultimos Lanzamientos"/>
    )
}

export default Lanzamientos