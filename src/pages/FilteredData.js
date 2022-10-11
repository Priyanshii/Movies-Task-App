import React, { useEffect } from "react";
import Loading from "../components/Loading";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";

const FilteredData = () => {
  const { filteredMovieList, FetchFiteredData, isLoading } =
    React.useContext(AppContext);

  const params = useParams();
  useEffect(() => {
    FetchFiteredData(params.year);
  }, [params.year]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid>
      {filteredMovieList.results?.map((movie) => {
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

export default FilteredData;
