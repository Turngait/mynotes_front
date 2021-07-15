import React from 'react';

import PopUp from 'components/PopUp/PopUp';

import {numberFormat, formatMonth} from 'utils';

import './index.scss';

const FilteredItems = ({items, sum, period, groupName, currancy, setIsFilteredItemsOpen}) => {
  return (
    <PopUp>
      <i onClick={() => setIsFilteredItemsOpen(false)} className="fas fa-times close"></i>
      <h3 className="filteredItems_header">Расходы по группе "{groupName}" <br/>за период {formatMonth(period)}</h3>
      <h3 className="filteredItems_header">Всего: {sum} {currancy}</h3>
      {
        items.map(item => {
          return (
            <div className="filteredItems__item" key={item._id}>
              <div>{item.title}</div>
              <div>{numberFormat(item.amount)} {currancy}</div>
            </div>
          )
        })
      }
    </PopUp>
  )
}

export default FilteredItems;
