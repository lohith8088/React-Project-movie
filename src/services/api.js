const API_KEY="1a33f8782103a56d383bc57e7e5b2108";
const BASE_URL="https://api.themoviedb.org/3";


export const getpopularMovies=async ()=>{
  const response =await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json()
  return data.results;
}
export const searchpopularMovies=async ()=>{
  const response =await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json()
  return data.results;
}