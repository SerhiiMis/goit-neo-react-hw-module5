import { useState } from "react";
import { searchMovies } from "../../utilities/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query).then((results) => {
      setMovies(results);
      if (results.length === 0) {
        setQuery("");
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter movie title"
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>
          Search
        </button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
