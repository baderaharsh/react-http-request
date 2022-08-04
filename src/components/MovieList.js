const MovieList = (props) => {
    return props.movies.map((movie) => <p>
        {movie.title}
    </p>)
}

export default MovieList;