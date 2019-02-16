import React from 'react';
import '../../static/css/App.css';
import '../../static/css/Home.css';

// Components
import Header from '../Header';
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
        <Header />

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
