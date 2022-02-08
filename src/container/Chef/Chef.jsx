import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's Word" />
      <h1 className="headtext__cormorant">What we believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde corporis voluptates veritatis, nobis pariatur dolores necessitatibus corrupti deleniti magni natus incidunt mollitia molestiae aliquam iusto.</p>
          <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo magnam hic ratione illum velit libero.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kelvin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
