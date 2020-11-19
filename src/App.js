import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Intro, Footer, Projects } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Intro} />
        </Switch>
        <Projects />
        <Footer />
      </Router>
    </>
  );
};

export default App;
