import React from "react";
import Container from "./components/Container";

import Header from "./components/Header";
import MainTable from "./components/MainTable/MainTable";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <MainTable />
      </Container>
    </div>
  );
};

export default App;
