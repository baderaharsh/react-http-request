import classes from './MovieList.module.css'

import Movie from "./Movie";

const MovieList = (props) => {
    return <ul className={classes.list}> {props.movies.map((movie) => <Movie key={movie.title} title={movie.title} opening={movie.opening_crawl} release={movie.release} />)}</ul>
}

export default MovieList;