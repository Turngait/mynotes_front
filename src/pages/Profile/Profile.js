import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import MyData from './MyData/MyData';
import MyGroups from './MyGroups/MyGroups';

import { getToken, getSettings, logOut } from '../../store/User/user.actions';
import {getUserInfo} from '../../store/User/user.actions';

import './Profile.scss';

/*
  Profile component which render all section
*/

class Profile extends Component {
  state = {
    myDataOpen: true,
    myGroupsOpen: false
  }

  openMyDataHandler = () => {
    this.setState({
      myDataOpen: true,
      myGroupsOpen: false
    })
  }
  openMyGroupsHandler = () => {
    this.setState({
      myDataOpen: false,
      myGroupsOpen: true
    })
  }
  componentDidMount() {
    const token = this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/');
      return null;
    } else {
      this.props.getUserInfo(token)
    }
  }

  componentDidUpdate() {
    const token = this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/');
      return null;
    }
  }

  logOut = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="flexbox">
        <Header logOut={this.logOut} />
        <main className="profile">
          <aside className="profile__menu">
            <LeftMenu 
              myDataOpen={this.state.myDataOpen}
              myGroupsOpen={this.state.myGroupsOpen}
              openMyDataHandler={this.openMyDataHandler}
              openMyGroupsHandler={this.openMyGroupsHandler}
            />
          </aside>
          <section className="profile__info">
            {this.state.myDataOpen ? <MyData /> : null}

            {this.state.myGroupsOpen ? <MyGroups /> : null }
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token
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
