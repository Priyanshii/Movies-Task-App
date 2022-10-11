import React, { useEffect } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
const Home = () => {
  const { moviesList, page, setPage, FetchMovies } =
    React.useContext(AppContext);

  useEffect(() => {
    FetchMovies();
  }, [page]);

  const handlerNextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage === 11) {
        nextPage = 1;
      }
      return nextPage;
    });
  };

  const handlerPrevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage === 0) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  if (!moviesList.results) {
    return <Loading />;
  }
  return (
    <Container>
      <Grid>
        {moviesList.results.map((movie) => {
          return (
            <React.Fragment key={movie.id}>
              <MovieCard {...movie} />
            </React.Fragment>
          );
        })}
      </Grid>
      <Button onClick={() => handlerPrevPage()}>Go to Previous Page</Button>
      <Button onClick={() => handlerNextPage()}>Go to Next Page</Button>
    </Container>
  );
};
const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  position: relative;
  padding: 2rem;
  margin: 1rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
const Button = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 10rem;
  text-align: center;
  font-size: 1rem;
  background-color: #18a0a5;
  margin: 2rem auto;
  color: #e7eef1;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;
export default Home;
