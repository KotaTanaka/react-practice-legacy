import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { commonStyle } from '../assets/style';
import '../static/css/App.css';

/**
 * ヘッダー
 */
class Header extends React.Component {
  render() {
    return (
      <AppBar
        position='static'
        classes={{ colorPrimary: this.props.classes.appBarColorDefault }}>
        <Toolbar>
          <Typography
            variant="h4"
            color="inherit"
            component={Link}
            to="/">
            Logo.
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(commonStyle)(Header);