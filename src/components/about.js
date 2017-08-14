import React, { Component } from 'react';
import NavBar from './nav/nav_bar';


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
      </div>
    );
  }
}

export default About;
