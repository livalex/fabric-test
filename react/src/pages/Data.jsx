import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../store/app-context";
import useHttp from "../hooks/use-http";
import { postLink, refreshContextError } from "../utils/constants";
import MoviesTable from "../components/moviesTable/MoviesTable";
import axios from "axios";
import SortByMenu from "../components/sortByMenu/SortByMenu";

const Data = (props) => {
  const { fallback } = props;
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const { link, sortBy } = ctx;
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleMovies = (response) => {
      const { Search: movies } = response;
      setMovies(movies);
      axios
        .post(postLink, movies)
        .then((response) => console.log("Database updated"))
        .catch((error) => alert(error));
    };

    fetchMovies({ url: link }, handleMovies);
  }, [link]);

  useEffect(() => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => {
        const nameA = a[sortBy];
        const nameB = b[sortBy];
        if (typeof nameA === "string") {
          return nameA.localeCompare(nameB);
        } else {
          return nameA - nameB;
        }
      })
    );
  }, [sortBy]);

  let content = (
    <>
      <SortByMenu />
      <MoviesTable movies={movies} />
    </>
  );

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
