import React from 'react';
import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup';
import Button from '../../../components/Button1/Button1'
import {connect} from 'react-redux';
import {formateDate} from '../../../helpers';
import {openAddCost, openAddCostGroup, showGroupName, deleteCostItem} from '../../../store/Finance/finance.actions';
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

      <div className="myFin_mainBox">
        <span className="myFin_mainBox__date">April 15, 2020</span>
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            const group_name = props.showGroupName({item, groups:props.groups});

            return (
              <div key={key} className="myFin_mainBox__item">
                <div className="myFin_mainBox__item_header">
                  <span className="myFin_mainBox__item_header__info">{item.title}</span>
                  <span className="myFin_mainBox__item_header__info">Cost: {item.amount}</span>
                  <span className="myFin_mainBox__item_header__info">{formateDate(item.date)}</span>
                  <span className="myFin_mainBox__item_header__info">Group: {group_name}</span>
                  <span className="myFin_mainBox__item_header__control"><i className="fas edit fa-edit"></i> <i onClick={(event) => props.deleteCostItem({target: event.target, token: props.token})} data-item-id={item._id} className="fas deleteCostItem fa-times"></i></span>
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
    costs: state.finance.costs,
    groups: state.finance.groups,
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAddCost: () => dispatch(openAddCost()),
    openAddCostGroup: () => dispatch(openAddCostGroup()),
    showGroupName: (data) => dispatch(showGroupName(data)),
    deleteCostItem: (data) => dispatch(deleteCostItem(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFinance);
