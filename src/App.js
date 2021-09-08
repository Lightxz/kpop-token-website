import React from "react";
import "styles/App.css";

import HomePage from "pages/home";
import PlayPage from "pages/play";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/play">
            <PlayPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
