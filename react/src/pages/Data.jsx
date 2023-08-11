import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../store/app-context";
import useHttp from "../hooks/use-http";
import { refreshContextError } from "../utils/constants";
import MoviesTable from "../components/moviesTable/MoviesTable";
import axios from "axios";

const Data = (props) => {
  const { fallback } = props;
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const { link, setLink } = ctx;
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleMovies = (response) => {
      const { Search: movies } = response;
      setMovies(movies);
      axios
        .post("http://127.0.0.1:8000/api/post", movies)
        .then((response) => console.log("Stocat in baza de date"))
        .catch((error) => console.log(error));
    };

    fetchMovies({ url: link }, handleMovies);
  }, [link]);

  let content = <MoviesTable movies={movies} />;

  if (isLoading) {
    content = fallback;
  }

  if (error === refreshContextError) {
    navigate("/welcome");
  }

  if (error) {
    content = (
      <section className="centered">
        <p>{error}</p>
      </section>
    );
  }

  return <>{content}</>;
};

export default Data;
