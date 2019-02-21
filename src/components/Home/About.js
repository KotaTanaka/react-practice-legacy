import React from 'react';

// Style
import '../../static/css/Home.css';

/**
 * ホーム画面 - サービス説明
 */
class About extends React.Component {
  render() {
    return (
      <div className="Home-about">
        <div className="Home-about-text">
          <h1>身近なWi-Fiを見つける</h1>
          全国のWi-Fiから近くのWi-Fiまで<br />
          マップ上で一覧を見ることができます
        </div>
      </div>
    );
  }
}

export default About;
