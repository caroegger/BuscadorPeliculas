import useFetch from "../hooks/useFetch"
import ListaPeliculas from "./ListaPeliculas"

const Home = () => {7

    const Populares = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")
    const MejorPuntuadas = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")

    return (
        <>
        <div>ESTOY EN HOME</div>
        {/* //CARRUSEL */}
        {/* //peliculas populares */}

        <ListaPeliculas peliculas={Populares}/>

        {/* //mejor puntuadas */}

        <ListaPeliculas peliculas={MejorPuntuadas}/>
        </>
    )
}

export default Home