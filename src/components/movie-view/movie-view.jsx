import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <div>
        <img className="w-100" src={movie.image} alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director?.name || movie.director || ""}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};