import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup';
import CostBox from './CostBox/CostBox';

import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';

import {getCostForPeriod, getCostItems} from '../../../../store/Costs/costs.actions';

import './Costs.scss';

const Costs = props => {
  const {costs} = props;
  const { t } = useTranslation();
  const [isAddCostOpen, setIsAddCostOpen] = React.useState(false);
  const [isAddCostGroupOpen, setIsAddCostGroupOpen] = React.useState(false);

  return (
    <div className="costs">
      { isAddCostOpen ? <AddCost setIsAddCostOpen={setIsAddCostOpen}/> : null }
      { isAddCostGroupOpen ? <AddGroup setIsAddCostGroupOpen={setIsAddCostGroupOpen}/> : null }
      <div className="myFin_headerBox">
        <div className="myFin_headerBox__dateBox">
          <Input2 onChange={(event) => props.getCostForPeriod({period:event.target.value, token: props.token})} value={props.period} type="month" name="date"/>
        </div>
        <div className="myFin_headerBox__ctrlBox">
          {props.isCostsFiltered ? <Button onClick={() => props.getCostItems(props.token)} title="Сбросить фильтр" /> : null}
        </div>
        <div className="myFin_headerBox__btnBox">
          <Button onClick={setIsAddCostOpen} title={t('costs.addCost')} />
          <Button onClick={setIsAddCostGroupOpen} title={t('costs.addGroup')} />
        </div>
      </div>
      <div className="allCosts">
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            return (
              <CostBox item={item} key={key} />
            )
          })
          :
          <p className="myFin__noContent">{t('costs.noCosts')}</p>
        }
      </div>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    costs: state.costs.costs,
    groups: state.costs.groups,
    period: state.user.month,
    token: state.user.token,
    isCostsFiltered: state.costs.isCostsFiltered
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCostForPeriod: (period) => dispatch(getCostForPeriod(period)),
    getCostItems: (data) => dispatch(getCostItems(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costs);
