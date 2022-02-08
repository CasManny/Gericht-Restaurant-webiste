import React from 'react';
import { FooterOverlay, Newsletter} from '../../components'
import  { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import {images} from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> No. 23hd Tasha II Abuja Nigeria</p>
        <p className="p__opensans"> +o9156264044</p>
        <p className="p__opensans"> +o9154104024</p>

      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} className='spoon_img' alt="" style={{marginTop: '1.5rem'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
         <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans"> 9:00AM - 11:00PM</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">10:00AM - 9:00PM</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Righs Reserved.</p>
    </div>
  </div>
);

export default Footer;
