import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import SideBar from '../sidebar/side-bar';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.titleClick = this.titleClick.bind(this);
  }

  titleClick() {
    this.history.push('/');
  }

  render() {
    const styles = {
      app: {
        backgroundColor: '#6352b0',
        display: 'grid',
				gridTemplateColumns: 'min-content 1fr',
				'justifyItems': 'end',
        zIndex: 0,
        title: {
          cursor: 'pointer',
          fontSize: 32,
          marginLeft: 35,
        },
      },
    };
    const title =
      <div className="nav-wrapper">
        <h1><Link to="/">VidHub</Link></h1>
      </div>;
    return (
      <header>
        <SideBar />
        <AppBar
         title={title}
         style={styles.app}
         titleStyle={styles.app.title}
         onClick={this.titleClick}
         showMenuIconButton={false}
       />
     </header>
    );
  }

}

export default withRouter(NavBar);
