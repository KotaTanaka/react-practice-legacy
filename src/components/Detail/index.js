import React from 'react';
import '../../static/css/Detail.css';

// Components
import Header from '../Header';
import Footer from '../Footer';

/**
 * 店舗詳細画面
 */
class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <Header />        
        <Footer />
      </div>
    );
  }
}

export default Detail;
