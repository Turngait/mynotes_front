import React from 'react';
import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup'
import {connect} from 'react-redux';
import {openAddCost, openAddCostGroup} from '../../../store/Finance/finance.actions';
import './MyFinance.scss';

const MyFinance = props => {
  return (
    <>
    {
      props.isAddCostOpen ? 
        <AddCost/>
        :
        null
    }
    {
      props.isAddCostGroupOpen ?
        <AddGroup />
        : 
        null
    }
      <div className="myFin_headerBox">
        <h3 className="myFinance__logo">MyFinance</h3>
        <p className="myFin_headerBox__sorting">
          Sort by: 
          <button className="myFin_headerBox__sortBtn"><i className="fas fa-caret-up"></i>priority</button>
          <button className="myFin_headerBox__sortBtn"><i className="fas fa-caret-up"></i>status</button>
          <button className="myFin_headerBox__sortBtn"><i className="fas fa-caret-up"></i>group</button>
          <button className="myFin_headerBox__sortBtn"><i className="fas fa-caret-up"></i>date</button>
        </p>
        <div>
          <button onClick={props.openAddCostGroup} className="myFin_headerBox__addButton">Add Group</button>
          <button onClick={props.openAddCost} className="myFin_headerBox__addButton">Add Cost</button>
        </div>
      </div>

      <div className="myFin_mainBox">
        <span className="myFin_mainBox__date">April 15, 2020</span>

        <div className="myFin_mainBox__item">
            <div className="myFin_mainBox__item_header">
              <span className="myFin_mainBox__item_header__info">3. Item name.</span>
              <span className="myFin_mainBox__item_header__info">Price: 20 000</span>
              <span className="myFin_mainBox__item_header__info">02.10.2019</span>
              <span className="myFin_mainBox__item_header__info">Group: Name</span>
              <span className="myFin_mainBox__item_header__control"><i className="fas edit fa-edit"></i> <i className="fas fa-times"></i></span>
            </div>
            <p className="myFin_mainBox__item_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>

      </div>
    </>
  );
}

function mapStateToProps (state) {
  return {
    isAddCostOpen: state.finance.addCostOpen,
    isAddCostGroupOpen: state.finance.addCostGroupOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAddCost: () => dispatch(openAddCost()),
    openAddCostGroup: () => dispatch(openAddCostGroup())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFinance);
