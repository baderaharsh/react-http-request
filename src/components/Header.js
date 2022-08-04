import classes from './Header.module.css'

const Header = props => {
    return <div className={classes['header-section']}>
        <button className={classes.button} onClick={props.getMovies} >
            Fetch Movies
          </button>
    </div>
}

export default Header;