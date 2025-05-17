import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>My Favorite Movies</h2>
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="favorites-empty">
        <h2>No Favrite Movie yet</h2>
        <p>Start adding movies to your favorites and they will appear hear</p>
      </div>
    </>
  );
}

export default Favorites;
