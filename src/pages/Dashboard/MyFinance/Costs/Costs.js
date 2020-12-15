import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import AddCost from './AddCost/AddCost';
import AddGroup from './AddGroup/AddGroup';
import CostBox from './CostBox/CostBox';

import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import Heading from '../../../../components/Heading1/Heading1';

import {getCostForPeriod, getCostItems} from '../../../../store/Costs/costs.actions';

import './Costs.scss';

const Costs = props => {
  const {costs} = props;
  const { t } = useTranslation();
  const [isAddCostOpen, setIsAddCostOpen] = React.useState(false);
  const [isAddCostGroupOpen, setIsAddCostGroupOpen] = React.useState(false);

  return (
    <>
      { isAddCostOpen ? <AddCost setIsAddCostOpen={setIsAddCostOpen}/> : null }
      { isAddCostGroupOpen ? <AddGroup setIsAddCostGroupOpen={setIsAddCostGroupOpen}/> : null }
      <div className="myFin_headerBox">
        <Heading title={t("costs.header")} />
        <div className="myFin_headerBox__periodBox">
        </div>
        <div className="myFin_headerBox__btnBox">
          <Input2 onChange={(event) => props.getCostForPeriod({period:event.target.value, token: props.token})} value={props.costPeriod} type="month" name="date"/>

          {
            props.isCostsFiltered ?
              <Button onClick={() => props.getCostItems(props.token)} title="Сбросить фильтр" />
            : null
          }
          <Button onClick={setIsAddCostOpen} title={t('costs.addCost')} />
          <Button onClick={setIsAddCostGroupOpen} title={t('costs.addGroup')} />
        </div>
      </div>
        {
          costs.length > 0 ?
          costs.map((item, key) => {
            console.log(item)
            return (
              <CostBox item={item} key={key} />
            )
          })
          :
          <p className="myFin__noContent">{t('costs.noCosts')}</p>
        }
    </>
  );
}

function mapStateToProps (state) {
  return {
    costs: state.costs.costs,
    groups: state.costs.groups,
    costPeriod: state.costs.costPeriod,
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
