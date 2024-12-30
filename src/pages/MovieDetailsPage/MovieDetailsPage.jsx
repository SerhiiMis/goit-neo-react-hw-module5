import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../../utilities/api";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className={styles.detailsWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        <div className={styles.detailsContent}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <h3>Additional Information</h3>
          <ul className={styles.additionalLinks}>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
