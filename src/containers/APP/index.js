import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "../Home/Homepage";
import AssessmentPage from "../Assessment/AssessmentPage";
import ChatbotPage from "../Assessment/Chatbot/ChatbotPage"

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/assessment-page" component={AssessmentPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
  );
}

export default App;
