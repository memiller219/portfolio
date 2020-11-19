import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Intro, Footer, Projects } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Intro />
        <Projects />
        <Footer />
      </Router>
    </>
  );
};

export default App;
