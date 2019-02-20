import React from 'react';
import { Link } from 'react-router-dom';

// Style
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import PlaceOutlined from '@material-ui/icons/PlaceOutlined';
import PowerOutlined from '@material-ui/icons/PowerOutlined';
import SearchIcon from '@material-ui/icons/Search';
import '../../static/css/Home.css';

/**
 * ホーム画面 - 検索フォーム WIP
 */
class TopSearchForm extends React.Component {
  render() {
    return (
      <div className="Home-top">
        <div className="Home-header">
          <Link to="/"><h1>(Logo)</h1></Link>
        </div>

        <div className="Home-top-content">
          <h1 className="Home-top-title">
            あなたが使える<nobr className="text-bolder">Wi-Fi</nobr>が見つかる
          </h1>

          <Card>
            <div className="Home-top-form">
              <h2 className="text-lighter">
                近くのWi-Fiを探す
              </h2>
              <div className="Home-text-row">
                <p>エリア</p><p>こだわり条件</p>
              </div>
              <PlaceOutlined />
              <Input placeholder="渋谷"></Input>
              <PowerOutlined />
              <Input placeholder="電源あり"></Input>
              <SearchIcon />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default TopSearchForm;
