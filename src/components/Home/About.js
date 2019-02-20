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
        <h1>身近なWi-Fiを見つける</h1>
        <p>全国のWi-Fiから近くのWi-Fiまでマップ上で一覧を見ることができます。</p>
      </div>
    );
  }
}

export default About;
