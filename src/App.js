import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import report from "./pages/report";
const TITLE = 'My Page Title'

function App(){

  
  return(
    <Router>
      <Route component={Login} exact path="/"/>
      <Route component={report} exact path="/report"/>
    </Router>
    

  )

}
export default App;