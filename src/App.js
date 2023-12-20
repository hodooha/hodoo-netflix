import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import ErrorRender from "./components/ErrorRender";

function App() {
  const { error } = useSelector((state) => state.movie);
  return (
    <div>
      <Navigation></Navigation>
      {error ? (
        <ErrorRender></ErrorRender>
      ) : (
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/movie" element={<Movies></Movies>} />
          <Route path="/movie/:id" element={<MovieDetail></MovieDetail>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
