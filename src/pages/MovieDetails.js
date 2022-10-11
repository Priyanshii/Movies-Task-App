import React, { useEffect } from "react";
import { AppContext } from "../context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import Error from "./Error";
const MovieDetails = () => {
  const { movieDetail, FetchSingleMovie, isLoading, error } =
    React.useContext(AppContext);
  const {
    title,
    genres,
    overview,
    vote_average,
    tagline,
    release_date,
    runtime,
    spoken_languages,
    backdrop_path,
  } = movieDetail;
  const imgLink = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const params = useParams();

  useEffect(() => {
    FetchSingleMovie(params.id);
  }, [params.id]);

  if (isLoading) {
    return <Loading />;
  } else if (error.show) {
    return <Error />;
  }
  return (
    <Container>
      <img src={imgLink} alt={title} />
      <Info>
        <h2>{title}</h2>
        <p>{overview}</p>
        <Genre>
          <h3>Genre</h3>
          {genres?.map((genre) => {
            return <span>{genre.name}</span>;
          })}
        </Genre>
        <Langauages>
          <h3>Available in</h3>
          {spoken_languages?.map((item) => {
            return <span>{item.english_name}</span>;
          })}
        </Langauages>
        <AdditionalInfo>
          <h3>Rating:</h3>
          <span>{vote_average}</span>
        </AdditionalInfo>
        <AdditionalInfo>
          <h3>Running Time:</h3>
          <span>{runtime} mins</span>
        </AdditionalInfo>
        <AdditionalInfo>
          <h3>Release Date:</h3>
          <span>{release_date}</span>
        </AdditionalInfo>
        <Tagline>{tagline && <h4>"{tagline}"</h4>}</Tagline>
      </Info>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  margin: 2rem 2rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    height: 30vw;
    width: auto;
  }
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 2rem;
  p {
    padding: 4px;
    font-size: 0.9rem;
    padding: 1rem;
  }
`;
const Genre = styled.article`
  display: flex;
  flex-direction: row;
  padding: 4px;
  margin: 4px;
  align-items: center;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-right: 8px;
  }
  span {
    margin: 4px;
    padding: 2px 8px;
    color: #5f5b5b;
    border: 1px solid #9e9b9b;
    border-radius: 12px;
  }
`;
const Langauages = styled.article`
  display: flex;
  flex-direction: row;
  padding: 4px;
  margin: 4px;
  align-items: center;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-right: 8px;
  }
  span {
    margin: 4px;
    padding: 2px 8px;
    width: fit-content;
    color: #5f5b5b;
    border: 1px solid #9e9b9b;
    border-radius: 12px;
  }
`;

const AdditionalInfo = styled.article`
  display: flex;
  align-items: center;
  padding: 4px;
  margin: 4px;
  h3 {
    font-weight: 500;
    font-size: 18px;
    margin-right: 8px;
  }
  span {
    padding: 2px;
  }
`;
const Tagline = styled.div`
  align-self: center;
  font-size: 16px;
  padding: 1rem;
  text-align: center;
`;
export default MovieDetails;
