import React from "react";
import { Switch, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import MovieCreate from "./pages/MovieCreate";
function App() {
  return (
    <div >
      <Switch>

      <Route exact path="/" component={MoviesList} />
      <Route exact path="/movie/create" component={MovieCreate} />
      </Switch>
    </div>
  );
}

export default App;
