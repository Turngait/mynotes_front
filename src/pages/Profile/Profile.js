import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import MyData from './MyData/MyData';
import MyGroups from './MyGroups/MyGroups';
import Settings from './Settings';

import { getToken, getSettings, logOut } from '../../store/User/user.actions';
import { getUserInfo } from '../../store/User/user.actions';
import {numberFormat} from '../../utils';

import './Profile.scss';

/*
  Profile component which render all section
*/

class Profile extends Component {
  state = {
    myDataOpen: true,
    myGroupsOpen: false,
    settingsOpen: false,
    pageTitle: 'Статистика'
  }

  openMyDataHandler = () => {
    this.setState({
      myDataOpen: true,
      myGroupsOpen: false,
      settingsOpen: false,
      pageTitle: 'Статистика'
    })
  }
  openMyGroupsHandler = () => {
    this.setState({
      myDataOpen: false,
      myGroupsOpen: true,
      settingsOpen: false,
      pageTitle: 'Группы'
    })
  }
  openSettingsHandler = () => {
    this.setState({
      myDataOpen: false,
      myGroupsOpen: false,
      settingsOpen: true,
      pageTitle: 'Настройки'
    })
  }
  async componentDidMount() {
    const token = await this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/');
      return null;
    }
    await this.props.getUserInfo({token, period: this.props.period}); 
  }

  async componentDidUpdate() {
    const token = await this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/');
      return null;
    }
    await this.props.getUserInfo({token, period: this.props.period});
  }

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="flexbox">
        <Header logOut={this.logOut} pageName={this.state.pageTitle}/>
        <main className="profile">
          <aside className="profile__menu">
            <LeftMenu 
              myDataOpen={this.state.myDataOpen}
              myGroupsOpen={this.state.myGroupsOpen}
              settingsOpen={this.state.settingsOpen}
              openMyDataHandler={this.openMyDataHandler}
              openMyGroupsHandler={this.openMyGroupsHandler}
              openSettingsHandler={this.openSettingsHandler}
              balance={numberFormat(this.props.balance) || 0}
              currancy={this.props.currancy}
            />
          </aside>
          <section className="profile__info">
            {this.state.myDataOpen ? <MyData /> : null}
            {this.state.myGroupsOpen ? <MyGroups /> : null }
            {this.state.settingsOpen ? <Settings /> : null }
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
    balance: state.user.balance,
    currancy: state.user.settings.currency,
    period: state.user.month
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    getSettings: () => dispatch(getSettings()),
    logOut: () => dispatch(logOut()),
    getUserInfo: (token) => dispatch(getUserInfo(token)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
