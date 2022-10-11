import React from "react";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import FilterByYear from "./components/FilterByYear";

function App() {
  return (
    <MainContainer>
      <Router>
        <Search />
        <FilterByYear />
        <Pages />
      </Router>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

export default App;
