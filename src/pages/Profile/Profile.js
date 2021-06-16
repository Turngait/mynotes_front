import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import MyGroups from './MyGroups/MyGroups';
import Settings from './Settings';

import { getToken, getSettings, logOut, setInfo } from '../../store/User/user.actions';
import { getInitialData } from './services';
import {numberFormat} from '../../utils';

import './Profile.scss';

/*
  Profile component which render all section
*/

const Profile = props => {
  const [myGroupsOpen, setMyGroupsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(true);

  const openMyGroupsHandler = () => {
    setMyGroupsOpen(true);
    setSettingsOpen(false);
  }
  const openSettingsHandler = () => {
    setMyGroupsOpen(false);
    setSettingsOpen(true);
  }
  useEffect(() => {
    async function initProfile() {
      const token = await props.getToken();
      props.getSettings();
      if (!token) {
        props.history.push('/');
        return null;
      }
      await getInitialData(token, props.period, props.setInfo); 
    }
    initProfile();
  }, []);

  const logOut = () => {
    props.logOut();
    props.history.push('/');
  }

  return (
    <div className="flexbox">
      <Header logOut={logOut} />
      <main className="profile">
        <aside className="profile__menu">
          <LeftMenu 
            myGroupsOpen={myGroupsOpen}
            settingsOpen={settingsOpen}
            openMyGroupsHandler={openMyGroupsHandler}
            openSettingsHandler={openSettingsHandler}
            balance={numberFormat(props.balance) || 0}
            currancy={props.currancy}
          />
        </aside>
        <section className="profile__info">
          {myGroupsOpen ? <MyGroups /> : null }
          {settingsOpen ? <Settings /> : null }
        </section>
      </main>
    </div>
  )
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
    setInfo: (data) => dispatch(setInfo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
