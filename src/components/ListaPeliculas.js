const ListaPeliculas = ({peliculas, titulo}) => {
    
    return (
        <section>
            <h2>{titulo}</h2>
            <div>
                {peliculas &&
                    peliculas.map( (pelicula) => (
                        <article key={pelicula.title}>
                            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
                            <h3>{pelicula.title}
                            </h3>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default ListaPeliculas