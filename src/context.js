import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [moviesList, setMoviesList] = useState({});
  const [movieDetail, setMovieDetail] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [filteredMovieList, setFilteredMovieList] = useState({});
  const [page, setPage] = useState(1);
  const [searchedMovieList, setSearchedMovieList] = useState({});

  const FetchMovies = async () => {
    try {
      setIsLoading(true);
      setError({ show: false, msg: "" });

      const response = await fetch(
        `https://movie-task.vercel.app/api/popular?page=${page}`
      );
      const data = await response.json();
      console.log(data.data);
      setMoviesList(data.data);
      setIsLoading(false);
    } catch (error) {
      setError({ show: true, msg: "Can't fetch movies" });
      console.log(error);
    }
  };

  const FetchSingleMovie = async (id) => {
    try {
      setIsLoading(true);
      setError({ show: false, msg: "" });

      const response = await fetch(`
      https://movie-task.vercel.app/api/movie?movieId=${id}
      `);
      if (!response.ok) {
        setIsLoading(false);
        setError({
          show: true,
          msg: "Can't fetch movie Details. Wrong Movie ID",
        });
      } else {
        const detail = await response.json();
        console.log(detail.data);

        setMovieDetail(detail.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FetchSearchedMovie = async (query) => {
    try {
      setIsLoading(true);
      setError({ show: false, msg: "" });
      const response = await fetch(`
        https://movie-task.vercel.app/api/search?page=1&query=${query}`);
      const data = await response.json();

      console.log(data.data);
      if (!data.data.results.length) {
        setIsLoading(false);
        setError({
          show: true,
          msg: "Can't fetch movies. No movies with given name",
        });
      } else {
        setSearchedMovieList(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const FetchFiteredData = async (releaseYear) => {
    try {
      setIsLoading(true);
      const response = await fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=f6e0489f427ee0f5deae79ebaa13cd11&sort_by=popularity.desc&page=1&primary_release_year=${releaseYear}
`);
      const data = await response.json();
      console.log(data);
      console.log(data);
      setFilteredMovieList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        setError,
        moviesList,
        movieDetail,
        searchQuery,
        setSearchQuery,
        page,
        setPage,
        FetchMovies,
        FetchSearchedMovie,
        FetchSingleMovie,
        searchedMovieList,
        releaseYear,
        setReleaseYear,
        filteredMovieList,
        setFilteredMovieList,
        FetchFiteredData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
