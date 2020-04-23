import React from 'react';
import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup'
import {connect} from 'react-redux';
import {openAddCost, openAddCostGroup} from '../../../store/Finance/finance.actions';
import './MyFinance.scss';

const MyFinance = props => {
  const {costs} = props;
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
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            return (
              <div key={key} className="myFin_mainBox__item">
                <div className="myFin_mainBox__item_header">
                  <span className="myFin_mainBox__item_header__info">{item.title}</span>
                  <span className="myFin_mainBox__item_header__info">Cost: {item.amount}</span>
                  <span className="myFin_mainBox__item_header__info">{item.date}</span>
                  <span className="myFin_mainBox__item_header__info">Group: Name</span>
                  <span className="myFin_mainBox__item_header__control"><i className="fas edit fa-edit"></i> <i className="fas fa-times"></i></span>
                </div>
                <p className="myFin_mainBox__item_text">
                  {item.descrition}
                </p>
              </div>
            )
          })
          :
          null
        }
      </div>
    </>
  );
}

function mapStateToProps (state) {
  return {
    isAddCostOpen: state.finance.addCostOpen,
    isAddCostGroupOpen: state.finance.addCostGroupOpen,
    costs: state.finance.costs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAddCost: () => dispatch(openAddCost()),
    openAddCostGroup: () => dispatch(openAddCostGroup())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFinance);
