import React, {Component} from 'react';
import './Dashboard.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';

/*
  Dashboard component which render all section
*/

class Dashboard extends Component {
  render() {
    return (
      <div className="flexbox">
        <Header />
        <main className="main_box">
          <aside className="main_box__menu">
            <LeftMenu />
          </aside>
          <section className="main_box__info">
            <MyFinance/>
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Dashboard;
