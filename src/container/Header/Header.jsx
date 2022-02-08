import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title='Chase the New Flavour' />
      <h1 className="app__header-h1">The Key to Fine Dinning</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sint?</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default Header;
