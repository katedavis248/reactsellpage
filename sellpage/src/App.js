import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home"
//import HelloDiv from "./components/HelloDiv";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />

    </Router>
  )
}

export default App;
