// import React from 'react';
import numeral from 'numeral';

export default function getData( inputs, type ) {

let tableData = {
	columns:[
		{
			label:"Month",
			field:"month",
			sort:"asc",
			width: 10
		},
		{
			label:"Payment",
			field:"payment",
			sort:"asc",
			width: 180
		},
		{
			label:"Principal",
			field:"principal",
			sort:"asc",
			width: 180
		},
		{
			label:"Interest",
			field:"interest",
			sort:"asc",
			width: 180
		},
		{
			label:"Total Interest",
			field:"totalTnterest",
			sort:"asc",
			width: 180
		},
		{
			label:"Balance",
			field:"balance",
			sort:"asc",
			width: 180
		},

	]
};

let chartLabels = [];
let datasetTemplate = {
	label: "My First dataset",
	fill: true,
	lineTension: 0.1,
	backgroundColor: "rgba(75,192,192,0.4)",
	borderColor: "rgba(75,192,192,1)",
	borderCapStyle: "butt",
	borderDash: [],
	borderDashOffset: 0.0,
	borderJoinStyle: "miter",
	pointBorderColor: "rgba(75,192,192,1)",
	pointBackgroundColor: "#fff",
	pointBorderWidth: 1,
	pointHoverRadius: 5,
	pointHoverBackgroundColor: "rgba(75,192,192,1)",
	pointHoverBorderColor: "rgba(220,220,220,1)",
	pointHoverBorderWidth: 2,
	pointRadius: 3,
	pointHitRadius: 10,
	data: []
};

let amount = inputs.creditsum;
let period = inputs.period;
let rate = inputs.rate / 1200;
let annuity = amount *  rate * Math.pow((1 + rate),period)/( Math.pow((1 + rate),period) - 1 ) ;
let interestIncome = amount * rate;
let totalInterestIncome = 0;

let dataRows = [];
let dataRow = {};

switch(type){
	case 'table': {
		for ( let i = 1; i <= period; i++ ){
			interestIncome = amount * rate;
			totalInterestIncome += interestIncome;
			amount -= annuity - interestIncome;
			dataRow = {
				month: i,
				payment: numeral(annuity).format('$0,0.00'),
				principal: numeral(annuity - interestIncome).format('$0,0.00'),
				interest: numeral(interestIncome).format('$0,0.00'),
				totalTnterest: numeral(totalInterestIncome).format('$0,0.00'),
				balance: numeral(amount.toFixed(2)).format('$0,0.00')
			}

			dataRows.push(dataRow);
		}
		tableData.rows = dataRows;
		return tableData;
	}
	case 'chart': {
		dataRow['payment'] = [];
		dataRow['principal'] = [];
		dataRow['interest'] = [];
		dataRow['totalTnterest'] = [];
		dataRow['balance'] = [];
		for ( let i = 1; i <= period; i++ ){
			interestIncome = amount * rate;
			totalInterestIncome += interestIncome;
			amount -= annuity - interestIncome;

			chartLabels.push(i);
			dataRow['payment'].push(Math.round(annuity));
			dataRow['principal'].push(Math.round(annuity - interestIncome));
			dataRow['interest'].push(Math.round(interestIncome));
			dataRow['totalTnterest'].push(Math.round(totalInterestIncome));
			dataRow['balance'].push(Math.round(amount));
		}
		dataRows = {
			labels: chartLabels,
			datasets: [
				{...datasetTemplate, label: 'Interest', data: dataRow['interest'], borderColor: "rgba(56,142,60,1)", pointBorderColor: "rgba(27,94,32,1)"
					,pointHoverBackgroundColor: "rgba(255,255,255,1)", pointHoverBorderColor: "rgba(46,125,50,1)",backgroundColor: "rgba(200,230,201,0.4)"},
				{...datasetTemplate, label: 'Total interest', data: dataRow['totalTnterest'], borderColor: "rgba(245,124,0,1)", pointBorderColor: "rgba(230,81,0,1)"
					,pointHoverBackgroundColor: "rgba(255,255,255,1)", pointHoverBorderColor: "rgba(239,108,0,1)",backgroundColor: "rgba(255,224,178,0.4)"},
				{...datasetTemplate, label: 'Payment', data: dataRow['payment'], borderColor: "rgba(76,76,76,1)", pointBorderColor: "rgba(0,0,0,1)"
					,pointHoverBackgroundColor: "rgba(255,255,255,1)", pointHoverBorderColor: "rgba(33,33,33,1)",backgroundColor: "rgba(245,245,245,0.4)"},
				{...datasetTemplate, label: 'Principal', data: dataRow['principal'], borderColor: "rgba(123,31,162,1)", pointBorderColor: "rgba(74,20,140,1)"
					,pointHoverBackgroundColor: "rgba(255,255,255,1)", pointHoverBorderColor: "rgba(106,27,154,1)",backgroundColor: "rgba(255,190,231,0.4)"},
			]
		}
		return dataRows;
	}
 }

};