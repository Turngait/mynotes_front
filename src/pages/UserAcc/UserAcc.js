import React, {Component} from 'react';
import './UserAcc.scss';
import Header from '../../components/Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';


class UserAcc extends Component {
  render() {
    return (
      <>
        <Header />

        <main className="userAcc_box">
          <aside className="userAcc_box__menu">
            <LeftMenu />
          </aside>
          <section className="userAcc_box__info">
            <MyFinance/>
          </section>
        </main>
      </>
    )
  }
}

export default UserAcc;
