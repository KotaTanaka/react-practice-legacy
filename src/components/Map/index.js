import React from 'react';
import '../../static/css/Map.css';

// Components
import Header from '../Header';
import Footer from '../Footer';

/**
 * マップ画面
 */
class Map extends React.Component {
  render() {
    return (
      <div className="Map">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Map;
