import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup';
import CostBox from './CostBox/CostBox';
import FilteredCosts from 'components/FilteredItems';
import InputDataPicker from 'components/Input2/Input2';

import {setCostsForPeriod} from 'store/Costs/costs.actions';
import {costsFilterService, getCostsByPeriodService, saveCost, saveGroup, deleteCostItemService} from './services';

import './Costs.scss';

const Costs = props => {
  const {costs} = props;
  const { t } = useTranslation();
  const [isAddCostOpen, setIsAddCostOpen] = React.useState(false);
  const [isAddCostGroupOpen, setIsAddCostGroupOpen] = React.useState(false);
  const [isFilteredCostsOpen, setIsFilteredCostsOpen] = React.useState(false);

  const [filteredCosts, setFilteredCosts] = React.useState([]);
  const [filteredGroup, setFilteredGroup] = React.useState('');

  function filterCostsHandler(groupName, groupId) {
    setFilteredGroup(groupName);
    setFilteredCosts(costsFilterService(costs, groupId));
    setIsFilteredCostsOpen(true);
  }

  return (
    <div className="costs">
      { isAddCostOpen ? <AddCost saveCost={saveCost} openAddGroup={setIsAddCostGroupOpen} setIsAddCostOpen={setIsAddCostOpen}/> : null }
      { isAddCostGroupOpen ? <AddGroup saveGroup={saveGroup} setIsAddCostGroupOpen={setIsAddCostGroupOpen}/> : null }
      { 
        isFilteredCostsOpen ? 
          <FilteredCosts 
            currancy={props.currency} 
            items={filteredCosts} 
            period={props.period} 
            groupName={filteredGroup} 
            setIsFilteredItemsOpen={setIsFilteredCostsOpen}
          /> 
        : null 
      }
      <div className="myFin_headerBox">
        <div className="myFin_headerBox__periodAmount">
          В этом месяце: {props.periodAmount} {props.currency}
        </div>
        <div className="myFin_headerBox__dateBox">
          <InputDataPicker 
            onChange={(event) => getCostsByPeriodService(event.target.value, props.token, props.setCostsForPeriod)}
            value={props.period}
            type="month"
            name="date"
          />
        </div>
      </div>
      <div className="allCosts">
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            return (
              <CostBox deleteCostItemService={deleteCostItemService} filterCostsHandler={filterCostsHandler} item={item} key={key} />
            )
          })
          :
          <p className="myFin__noContent">{t('costs.noCosts')}</p>
        }
      </div>
      <button onClick={setIsAddCostOpen} className="costs__openAddCostBtn">+</button>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    costs: state.costs.costs,
    groups: state.costs.groups,
    period: state.user.month,
    token: state.user.token,
    currency: state.user.settings.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCostsForPeriod: (costs, period) => dispatch(setCostsForPeriod(costs, period))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costs);
