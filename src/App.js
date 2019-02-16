import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/css/App.css';

// Components
import Home from './components/Home';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path={'/'} component={Home} />
            <Route path={'/map'} component={Map} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
