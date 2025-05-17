import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Favorites from "./pages/Favorites";
import "./css/App.css"
import { MovieProvider } from "./contexts/MovieContext";

function App() {
 

  return (
    <>
    <MovieProvider>
   <main className="Main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
   </main>
   </MovieProvider>
    </>
  );
}

export default App; 