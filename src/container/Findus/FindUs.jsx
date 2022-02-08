import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title={'Contact'} />
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{color: '#DCC87', margin: '2rem 0'}}>Lorem ipsum dolor quam cumque.</p>
        <p className="p__cormorant">Opening Hours...</p>
        <p className="p__opensans">Monday - Friday: 9:00AM - 11:00PM</p>
        <p className="p__opensans">Saturday - Sunday: 10:00AM - 9:00PM</p>
      </div>

      <button className="custom__button" style={{marginTop: '1.5rem', letterSpacing: '2px', fontSize:'20px'}}>visit Us</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find Us" />
    </div>
  </div>
);

export default FindUs;
