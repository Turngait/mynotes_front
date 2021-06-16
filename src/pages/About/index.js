import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const AboutPage = () => {
  return (
<div className="index">
        <nav className="index__nav">
          <NavLink to="/" className="index__nav__item">Назад</NavLink>
        </nav>
        <div className="index__box">




        </div>
        <div className="index__footer">
          {new Date().getFullYear()} © MyNotes <NavLink target="_blank" className="index__footer__link" to="/policy">"Политикой обработки конфеденциальных данных"</NavLink>
        </div>
      </div>
  )
}

export default AboutPage;