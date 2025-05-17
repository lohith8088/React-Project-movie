import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"; 
function MovieCard({movie}){


const {addtofavorites,removefromfavroites,isfavorite} = useMovieContext();
const Favorite = isfavorite(movie.id);
function handleClick(e){
  e.preventDefault();
  if(Favorite){
    removefromfavroites(movie.id);}
  else{
    addtofavorites(movie);
  }
  

}

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${Favorite ? "active" : ""}`} onClick={handleClick} >
              ❤ 
            </button>
          </div>

        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  )
}
export default MovieCard;