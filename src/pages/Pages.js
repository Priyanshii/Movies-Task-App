import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchedData from "./SearchedData";
import MovieDetails from "./MovieDetails";
import FilteredData from "./FilteredData";
import Error from "./Error";
function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search/:query" element={<SearchedData />} />
      <Route exact path="/moviedetail/:id" element={<MovieDetails />} />
      <Route exact path="/filterbyyear/:year" element={<FilteredData />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Pages;
