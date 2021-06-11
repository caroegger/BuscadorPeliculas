import {useState, useEffect} from "react";
import ListaPeliculas from "./ListaPeliculas";

const Buscar = () => {

    const [busqueda, setBusqueda] = useState("")
    const [input, setInput] = useState("")
    const [resultado, setResultado] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d9a1d2ba98bd4f269229908068559f1&languaje=es-ES&query=${input}`)
        .then (res => res.json())
        .then (data => {
        setResultado(data.results)})
    }, [busqueda] )    

    const handleSubmit = (e) => {
        e.preventDefault()
        setBusqueda(input)
    }
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    console.log(busqueda)
    console.log(input)
    console.log(resultado)

    return (
        <>
        <p>Busca tu pelicula</p>
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange}></input>
            </form>
        </div>
        <div>
            <ListaPeliculas peliculas={resultado}></ListaPeliculas>
        </div>
        </>
    )
}

export default Buscar