import React from 'react';
import { Link } from 'react-router-dom';
import '../../static/css/App.css';
import '../../static/css/Home.css';

// Components
import TopSearchForm from './TopSearchForm';
import About from './About';

/**
 * ホーム画面
 */
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* ヘッダー部 */}
        <div className="App-header">
          <Link to="/"><h1>(Logo)</h1></Link>
        </div>

        <div className="Home">
          {/* 検索フォーム */}
          <TopSearchForm />
          
          {/* サービス説明 */}
          <About />
        </div>
      </div>
    );
  }
}

export default Home;
