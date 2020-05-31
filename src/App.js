import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

import "./assets/css/argon-design-system-react.min.css";
import "./assets/css/argon-design-system-react.css.map";

function App() {
  return (
    <Router>
      <div className="contaoner">
        <Header />
        <Route exact path="/" component={Body} />
        <Route exact path="/news" component={News} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
