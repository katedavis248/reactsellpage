import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Sellpage from "./pages/Sellpage"
//import HelloDiv from "./components/HelloDiv";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Sellpage} />

    </Router>
  )
}

export default App;
