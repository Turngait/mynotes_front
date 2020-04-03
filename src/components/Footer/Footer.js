import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer_box">
      <div>
        2020. MyNotes.
        <br/>
        Terms and Conditions
      </div>
      <div className="footer_box__socio">
        <img className="footer_box__socio__item" src="pic/vk.png" alt="vk"/>
        <img className="footer_box__socio__item" src="pic/fb.png" alt="fb"/>
      </div>
    </footer>
  )
}

export default Footer;