import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../utilities/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
