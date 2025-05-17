import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css"; // Import your CSS file for styling\

import { searchpopularMovies, getpopularMovies } from "../services/api";
import { useSearchParams } from "react-router-dom";
function Home() {
  const [SearchQuery, setSearchQuery] = useState("");

  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadpopularMovies = async () => {
      try {
        const popularmovies = await getpopularMovies();
        setmovies(popularmovies);
      } catch (err) {
        seterror("Failed to load");
        console.log(err);
      } finally {
        setloading(false);
      }
    };

    loadpopularMovies();
  }, []);

  const HandleSearch = (e) => {
    // Prevent default form submission
    e.preventDefault();
    if (!SearchQuery.trim()) return;
    if (loading) return;

    setloading(true);
    try {
      seterror(null);
      const searchreuslts = searchpopularMovies(search);
      setmovies(searchreuslts);
      seterror(null);
    } catch (err) {
      console.log(err);
      seterror("failed to search movies");
    } finally {
      setloading(false);
    }
    setSearchQuery("");
    // Handle search logic here
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="home">
        <form className="search-form" onSubmit={HandleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search for Movies..."
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="Search-button">
            Search
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">Loading</div>
        ) : (
          <div className="movies-grid">
            {movies.map(
              (movie) =>
                movie.title.toLowerCase().startsWith(SearchQuery) && (
                  <MovieCard key={movie.id} movie={movie} />
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
