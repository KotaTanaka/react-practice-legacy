import React from 'react';

// Style
import '../../static/css/App.css';
import '../../static/css/Home.css';

// Components
import Footer from '../Footer';
import TopSearchForm from './TopSearchForm';
import About from './About';

/**
 * ホーム画面
 */
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          {/* 検索フォーム */}
          <TopSearchForm />
          
          {/* サービス説明 */}
          <About />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
