import classes from './Movie.module.css'

const Movie = props => {
    return <li className={classes.item}>
        <h3 className={classes.header}>
            {props.title}
        </h3>
        <main className={classes.main}>
            {props.opening}
        </main>
        <footer className={classes.footer}>
            {props.release}
        </footer>
    </li>
}

export default Movie;