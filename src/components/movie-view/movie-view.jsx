import { userParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

// export const MovieView = ({ movie, onBackClick }) => {
//   return (
//     <div>
//       <div>
//         <img src={movie.image} width={100} />
//       </div>
//       <div>
//         <span>Title: </span>
//         <span>{movie.title}</span>
//       </div>
//       <div>
//         <span>Director: </span>
//         <span>{movie.director}</span>
//       </div>
//       <button onClick={onBackClick} className="back-button" style={{ cursor: "pointer" }}>
//         Back
//       </button>
//     </div>
//   );
// };

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);


  return (
    <div>
      <div>
        <img className="w-100" src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};