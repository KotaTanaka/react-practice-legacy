import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/App.css';

/**
 * ヘッダー
 */
class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Header;