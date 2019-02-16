import React from 'react';
import '../../static/css/Home.css';

// Components
import Header from '../Header';
import Footer from '../Footer';
import SearchForm from './SearchForm';
import About from './About';

/**
 * ホーム画面
 */
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />

        {/* 検索フォーム */}
        <SearchForm />
        
        {/* サービス説明 */}
        <About />
        
        <Footer />
      </div>
    );
  }
}

export default Home;
