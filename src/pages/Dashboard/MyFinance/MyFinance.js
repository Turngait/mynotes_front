import React from 'react';
import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup';
import Button from '../../../components/Button1/Button1';
import CostBox from './CostBox/CostBox';
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
          <Button onClick={props.openAddCost} title="Add Cost" />
          <Button onClick={props.openAddCostGroup} title="Add Group" />
        </div>
      </div>
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            return (
              <CostBox item={item} key={key} />
            )
          })
          :
          null
        }
    </>
  );
}

function mapStateToProps (state) {
  return {
    isAddCostOpen: state.finance.addCostOpen,
    isAddCostGroupOpen: state.finance.addCostGroupOpen,
    costs: state.finance.costs,
    groups: state.finance.groups,
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAddCost: () => dispatch(openAddCost()),
    openAddCostGroup: () => dispatch(openAddCostGroup())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFinance);
