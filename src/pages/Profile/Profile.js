import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import MyData from './MyData/MyData';
import MyGroups from './MyGroups/MyGroups';
import { getToken, logOut } from '../../store/User/user.actions';

/*
  Profile component which render all section
*/

class Profile extends Component {
  componentDidMount() {
    const token = this.props.getToken()
    if (!token) {
      this.props.history.push('/')
    }
  }

  componentDidUpdate() {
    const token = this.props.getToken()
    if (!token) {
      this.props.history.push('/')
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
        <main className="main_box">
          <aside className="main_box__menu">
            <LeftMenu />
          </aside>
          <section className="main_box__info">
            {
              this.props.isMyDataOpen ?
              <MyData />
              :
              null
            }

            {
              this.props.isMyGroupsOpen ?
              <MyGroups />
              :
              null
            }
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isMyDataOpen: state.profile.isMyDataOpen,
    isMyGroupsOpen: state.profile.isMyGroupsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    logOut: () => dispatch(logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
