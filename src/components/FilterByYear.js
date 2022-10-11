import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

const FilterByYear = () => {
  const { releaseYear, setReleaseYear } = React.useContext(AppContext);

  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) => year - index);
  const navigate = useNavigate();
  console.log(years);

  return (
    <DropDown>
      <select
        defaultValue={""}
        value={releaseYear}
        onChange={(e) => {
          setReleaseYear(e.target.value);
          navigate("/filterbyyear/" + e.target.value);
          setReleaseYear("");
        }}
      >
        <option value="" disabled hidden>
          Year
        </option>
        {years.map((year, index) => {
          return <option value={year}>{year}</option>;
        })}
      </select>
    </DropDown>
  );
};

const DropDown = styled.div`
  padding: 10px;

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(210, 210, 210);
    background-color: aliceblue;
    :focus {
      border: 1px solid rgb(210, 210, 210);
    }
  }
`;
export default FilterByYear;
