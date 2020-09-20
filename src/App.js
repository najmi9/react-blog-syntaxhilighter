import React from 'react';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Post1 from './pages/blog/post1'
import Post2 from './pages/blog/post2'

const App = () => {


    return (
    <Router>
      <Switch>
        <Route path="/" component= { Home} exact />     
        <Route path="/blog/post1" component={Post1} />
        <Route path="/blog/post2" component={Post2} />
      </Switch>
    </Router>
    );
};

export default App;
