import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../assets/sponsors/redbull.png';
import img2 from '../../../assets/sponsors/sub.png';
import img3 from '../../../assets/sponsors/hut.png';
import img4 from '../../../assets/sponsors/mac.png';
import img5 from '../../../assets/sponsors/suzu.png';
import img7 from '../../../assets/sponsors/sbi.png';
import img8 from '../../../assets/sponsors/lic.png';
import img9 from '../../../assets/sponsors/dom.png';
import img10 from '../../../assets/sponsors/ola.png';
import './sponsors.css';

function Sponsors() {
  return (
    <div className="Sponsors">
      <div className="title">
        <h1 className="text-3xl italic font-crossFly rounded-tl-4xl text-rose-500 glow-text">Title Sponsors</h1>
      </div>
      <div className="marquee-container">
        <Marquee direction="right" speed={100}>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>

      <div className="title gold-sponsors-title mt-10">
        <h1 className="text-3xl italic font-crossFly rounded-tl-4xl text-rose-500 glow-text">Gold Sponsors</h1>
      </div>
      <div className="marquee-container">
        <Marquee direction="left" speed={80}>
          <div className="image_wrapper">
            <img src={img1} alt="Gold Sponsor 1" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="Gold Sponsor 2" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="Gold Sponsor 3" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="Gold Sponsor 4" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="Gold Sponsor 5" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Sponsors;
