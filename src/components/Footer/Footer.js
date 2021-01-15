import React from 'react';
import './Footer.scss';
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer_box">
      <div className="footer_box__info">
        2020. FinCloud.
        <br/>
        <NavLink target="_blank" to="/policy" className="footer_box__info_link">{t('footer.terms')}</NavLink>
      </div>
      <div className="footer_box__socio">
        <img className="footer_box__socio__item" src="pic/vk.png" alt="vk"/>
        <img className="footer_box__socio__item" src="pic/fb.png" alt="fb"/>
      </div>
    </footer>
  )
}

export default Footer;