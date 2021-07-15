import React, {useEffect} from "react";
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';
// import Chart from 'chart.js/auto'

import Statistics from "./Statistics/Statistics";
import InputDataPicker from "components/Input2/Input2";

import "./index.scss";

const MyData = props => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   var speedCanvas = document.getElementById("popChart").getContext("2d");
  //   var dataFirst = {
  //     label: "Car A - Speed (mph)",
  //     data: [0, 59, 75, 20, 20, 55, 40],
  //     lineTension: 0.3,
  //     // Set More Options
  //   };
       
  //   var dataSecond = {
  //     label: "Car B - Speed (mph)",
  //     data: [20, 15, 60, 60, 65, 30, 70],
  //     // Set More Options
  //   };
       
  //   var speedData = {
  //     labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  //     datasets: [dataFirst, dataSecond]
  //   };
     
     
  //   var lineChart = new Chart(speedCanvas, {
  //     type: 'line',
  //     data: speedData
  //   });
  // }, []);


  return (
    <>
      <div className="myFin_headerBox">
        <div className="myFin_headerBox__periodAmount">
          {/* {t('budgets.balance')}: {props.total} {props.currency} */}
        </div>
        <div>
          <InputDataPicker
            onChange={(event) =>
              props.getFinDataByPeriod(event.target.value)
            }
            value={props.period}
            type="month"
            name="date"
          />
        </div>
      </div>
      <div className="profileBox">
        <Statistics />
        	
        {/* <canvas id="popChart" width="500" height="200"></canvas> */}
      </div>
    </>
  );
};
function mapStateToProps (state) {
  return {
    period: state.user.month,
    incomeItems: state.income.incomes,
    token: state.user.token,
    currency: state.user.settings.currency
  }
}
export default connect(mapStateToProps, null)(MyData);
