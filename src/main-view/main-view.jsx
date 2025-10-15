import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkM8CdEzi1ETGZgwkTgPgR9OOirqY2ljIMg8a-Vvx0stnMCHzO",
      director: "Christopher Nolan",
    },
    {
      id: 2,
      title: "Inception",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaTHAbTa2MTEGM_PwqBU61jEzjEcQfx-Zb39fyctMdZheq2Uj",
      director: "Christopher Nolan",
    },
    {
      id: 3,
      title: "The Matrix",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmNiOGVlZWQtODU5MC00YWQxLTg4OGEtNmUyMjc2ZTRkMmIyXkEyXkFqcGc@._V1_.jpg",
      director: "The Wachoskis",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
