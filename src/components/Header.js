import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../static/css/App.css';

/**
 * ヘッダー WIP
 */
class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default">
          <Typography
            variant="h2"
            color="inherit"
            component={Link}
            to="/">
            Logo.
          </Typography>
      </AppBar>
    );
  }
}

export default Header;