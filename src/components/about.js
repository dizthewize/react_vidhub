import React, { Component } from 'react';
import Footer from './footer/footer';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <div className="about-title">
            <h2>About VidHub</h2>
          </div>
          <div className="about-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum at magnam quis sequi odio quaerat totam aliquam sed itaque provident fuga ipsum, dolore optio obcaecati, impedit voluptate quia consequatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse voluptatibus voluptas, ipsum laborum magnam nesciunt amet minima est eveniet veritatis ullam sit incidunt aliquam, quas, odit dolorem illum dolorum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas hic magnam iure rem, ullam veniam doloribus reiciendis ipsa ut ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse voluptatibus voluptas, ipsum laborum magnam nesciunt amet minima est eveniet veritatis ullam sit incidunt aliquam, quas, odit dolorem illum dolorum!</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
