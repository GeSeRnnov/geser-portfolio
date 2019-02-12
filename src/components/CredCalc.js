import React from 'react';
import CredInputs from './credcalc/CredInputs';
import RezultTable from './credcalc/RezultTable';
import RezultChart from './credcalc/RezultChart';
import { MDBContainer, MDBRow, MDBCol,  MDBScrollspyBox  } from "mdbreact";
import getData from './credcalc/ProcessData';
import numeral from 'numeral';


// http://jerairrest.github.io/react-chartjs-2/
// https://www.bankrate.com/calculators/mortgages/loan-calculator.aspx
// http://www.sffinance.us/personal-loan.php

Element.prototype.getElementById = function(id) {
    return document.getElementById(id);
}


class Reactogram extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			inputs: {
				creditsum: 50000,
				period: 36,
				defaultRate: 4.5,
				rate: 4.5
			},
			calculated: false,
			tableData: {},
			dataLine: {},
			totalInterestIncome: 0,
			annuity: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCalculate = this.handleCalculate.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleReset = () => {
		const inputs = {creditsum: 50000,
				period: 36,
				defaultRate: 4.5,
				rate: 4.5
		};
		this.setState({
			inputs: inputs,
			calculated: false,
			tableData: {},
			dataLine: {},
			totalInterestIncome: 0,
			annuity: 0
		});
	}

	handleCalculate = () => {
		this.setState({ calculated: false });
		let calcData = getData(this.state.inputs);
		this.setState({ 
			tableData: calcData.tableData,
			dataLine: calcData.dataLine,
			annuity: calcData.annuity,
			totalInterestIncome: calcData.totalInterestIncome
		});
		// console.log(this.state.dataLine);
		this.setState({ calculated: true });
	}

	handleChange = (e, vl, input) => {
		let inputValue = parseInt(vl) ;
		const inputs = {...this.state.inputs, [input]: Number(inputValue)};
		this.setState({
			inputs
		});
	}



	handleRateChange = e => {
		let inputValue = Number(e.target.value) ;
		const inputs = {...this.state.inputs, ['rate']: inputValue};
		this.setState({
			inputs
		});
	}

	render(){
		return(
			<MDBContainer className="mx-0 mt-0" style={{minHeight: '70vh'}} fluid>
				<MDBRow>
					<MDBCol className="" lg="2">
						<CredInputs inputs={this.state.inputs} handleChange={this.handleChange} handleCalculate={this.handleCalculate} handleReset={this.handleReset} handleRateChange={this.handleRateChange} />
					</MDBCol>
					<MDBCol className="p-0 m-0" lg="10"  style={{background: '', minHeight: '70vh', height: '70vh', overflow: 'scroll'  }} >
						<div>
							{
								this.state.calculated ? 
									<div>
										<MDBRow>
											<MDBCol className="credCalcRezultLabels" lg="3">
												Monthly payments: 
											</MDBCol>
											<MDBCol className="text-left credCalcRezultValues" lg="4">
												{numeral(this.state.annuity).format('$0,0.00')}
											</MDBCol>
										</MDBRow>
										<MDBRow>
											<MDBCol className="credCalcRezultLabels" lg="3">
												Total principal paid: 
											</MDBCol>
											<MDBCol className="text-left credCalcRezultValues" lg="4">
												{numeral(this.state.inputs.creditsum).format('$0,0.00')}
											</MDBCol>
										</MDBRow>
										<MDBRow>
											<MDBCol className="credCalcRezultLabels" lg="3">
												Total interest paid: 
											</MDBCol>
											<MDBCol className="text-left credCalcRezultValues" lg="4">
												{numeral(this.state.totalInterestIncome).format('$0,0.00')}
											</MDBCol>
										</MDBRow>
										<RezultChart chartData={this.state.dataLine} /> 
										<RezultTable data={this.state.tableData} /> 
									</div>
									: 
									<div>
										<img src={"./img/PersonalLoanIner.jpg" } alt="Loan calculator" style={{height: '70vh'}} className="credCalcImg" />
										<div className="loanText">
											Personal loans are an excellent option as payments and interest rates are predictable on personal loans, you have time to pay the loan back, making the repayment more realistic, interest rates are lower and no collateral is required on unsecured personal loans.
										</div>
									</div>
							}
						</div>
					</MDBCol>
					
				</MDBRow>
			</MDBContainer>
		);
	}
};


export default Reactogram;