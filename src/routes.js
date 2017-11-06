import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
// import NavBar from './components/NavBar/nav-bar';
// import Footer from './components/footer/footer';
import SideBar from './components/nav/side_bar';

import App from './components/app';
import About from './components/about';
import NotFound from './components/notfound';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    setInterval(() => {
      this.setState({ show: !this.state.show });
    }, 4000);
  }

  render() {
    let { location } = this.props;
    return (
      <div>
        <SideBar />
        <TransitionGroup>
          <CSSTransition
            in={this.state.show}
            timeout={500}
            classNames="fade">
            <Switch location={location}>
              <Route exact path='/' component={App} />
              <Route path='/about' component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

}

export default Routes;
