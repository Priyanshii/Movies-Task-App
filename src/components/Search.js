import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

function Search() {
  const { searchQuery, setSearchQuery } = React.useContext(AppContext);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + searchQuery);
    setSearchQuery("");
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
        placeholder="Search"
      />
    </FormStyle>
  );
}
const FormStyle = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;

  input {
    border: 1px solid rgb(210, 210, 210);
    padding: 1rem;
    padding-left: 2.4rem;
    border-radius: 2rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 35%;
    left: 10px;
    color: rgb(210, 210, 210);
  }
`;
export default Search;
