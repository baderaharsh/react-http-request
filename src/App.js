import './App.css';
import {  useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const movieList = async (movie) => {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/films/3');
    const data = await response.json();
    const response1 = await fetch('https://swapi.dev/api/films/1');
    const data1 = await response1.json();
    setMovies([{ title: data.title, opening_crowl: data.opening_crowl, release: data.release_date }, { title: data1.title, opening_crowl: data1.opening_crowl, release: data1.release_date }]);
    setLoading(false)

  }

  return (
    <div className="App">
      <header className="App-header">
        <Header getMovies={movieList} />
      </header>
      {!loading && <MovieList movies={movies} />}
      {loading && <p>Loading......</p>}
    </div>
  );
}

export default App;
