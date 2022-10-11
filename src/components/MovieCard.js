import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const MovieCard = (props) => {
  const { id, title, vote_average, poster_path } = props;
  const imgLink = `https://image.tmdb.org/t/p/original/${poster_path}`;
  if (!imgLink) {
    return <Loading />;
  }
  return (
    <Card>
      <Link to={"/moviedetail/" + id}>
        <ImageCard>
          <img src={imgLink} alt={title} />
        </ImageCard>
        <h4>{title}</h4>
        <p>Rating: {vote_average}</p>
      </Link>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  width: 15rem;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  a {
    text-decoration: none;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    color: rgb(56, 93, 84);
    font-weight: 500;
  }
  h4 {
    text-align: center;
    color: rgb(56, 93, 84);
  }
`;
const ImageCard = styled.div`
  width: 100%;
  flex-basis: 70%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
`;
export default MovieCard;
