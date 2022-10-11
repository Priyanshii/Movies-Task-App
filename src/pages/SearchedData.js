import React, { useEffect } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "./Error";
const SearchedData = () => {
  const { searchedMovieList, FetchSearchedMovie, isLoading, error } =
    React.useContext(AppContext);

  const params = useParams();
  useEffect(() => {
    FetchSearchedMovie(params.query);
  }, [params.query]);

  if (isLoading) {
    return <Loading />;
  } else if (error.show) {
    return <Error />;
  }
  return (
    <Grid>
      {searchedMovieList.results?.map((movie) => {
        return (
          <React.Fragment key={movie.id}>
            <MovieCard {...movie} />
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
export default SearchedData;
