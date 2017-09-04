import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import NavBar from './components/NavBar/nav-bar';
import Footer from './components/Footer/footer';

// React View/Scenes
import Home from './scenes/Home';
import About from './scenes/About';

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
        <NavBar />
        <TransitionGroup>
          <CSSTransition
            in={this.state.show}
            timeout={500}
            classNames="fade">
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }

}

export default Routes;
