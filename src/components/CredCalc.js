import React from 'react';
import CredInputs from './credcalc/CredInputs';
import ResultTable from './credcalc/RezultTable';
import ResultChart from './credcalc/RezultChart';
import { MDBContainer, MDBRow, MDBCol  } from "mdbreact";
import ProcessData from './credcalc/ProcessData';
import numeral from 'numeral';
import { debounce } from 'lodash';

Element.prototype.getElementById = function(id) {
    return document.getElementById(id);
}


export default class CreditCalc extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			inputs: {
				creditsum: 50000,
				period: 36,
				defaultRate: 4.5,
				rate: 4.5,
				rateError: '',
			},
			calculated: false,
			tableData: {},
			dataLine: {},
			totalInterestIncome: 0,
			annuity: 0,
			rate: 4.5
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCalculate = this.handleCalculate.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleRateChange = this.handleRateChange.bind(this);
		this.checkRate = this.checkRate.bind(this);
		this.setParams = this.setParams.bind(this);
	}

	setParams = (inputs, key = undefined, val = undefined) => this.setState({ inputs, [key]: Number(val) });

	handleChange = (e, vl, input) => {
		const inputs = {...this.state.inputs, [input]: parseInt(vl)};
		this.setParams(inputs);
	}
	
	handleCalculate = () => {
		if( this.state.inputs.rateError === '' ){
			this.setState({...this.state, ...ProcessData(this.state.inputs), calculated: true, });
		}
	}
	
	handleReset = () => {
		const inputs = {
			creditsum: 50000,
			period: 36,
			defaultRate: 4.5,
			rate: 4.5
		};
		this.setParams(inputs, 'calculated', false);
	}

	handleRateChange = debounce(
		val => {
			const checked = this.checkRate(val);
			if(checked === "Ok"){
				const inputs = {...this.state.inputs, rate: Number(val), rateError: '' };
				this.setParams(inputs);
			} else {
				const inputs = {...this.state.inputs, rateError: checked }
				this.setParams(inputs);
			}
		}
	, 100);

	checkRate = (val) => {
		switch(true){
			case (Number(val) > 0):
				return 'Ok';				
			case (Number(val) <= 0):
				return 'The loan rate should be more than zero.';
			case (val.slice(-1) !== '.' && (val * 1).toString() !== val):
				return 'The loan rate should be a number.';
			default: 
				return 'Ok';
		}
	}

	render(){
		return(
			<MDBContainer className="mx-0 mt-0" style={{minHeight: '80vh'}} fluid>
				<MDBRow>
					<MDBCol className="" lg="2">
						<CredInputs 
							inputs={this.state.inputs} 
							handleChange={this.handleChange} 
							handleCalculate={this.handleCalculate} 
							handleReset={this.handleReset} 
							handleRateChange={this.handleRateChange} 
						/>
					</MDBCol>
					<MDBCol className="p-0 m-0" lg="10"  style={{background: '', minHeight: '70vh', height: '70vh', overflow: 'scroll'  }} >
						<div>
							{ this.state.calculated ? 
								<ComplexResult annuity ={this.state.annuity} 
									creditsum={this.state.inputs.creditsum} 
									totalInterestIncome={this.state.totalInterestIncome}
									dataLine={this.state.dataLine}
									tableData={this.state.tableData}
								 />
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

// Element of counting complex result
const ComplexResult = ({ annuity, creditsum, totalInterestIncome, dataLine, tableData }) => {
	return <div>
		<MDBRow>
			<MDBCol className="credCalcRezultLabels" lg="3">
				Monthly payments: 
			</MDBCol>
			<MDBCol className="text-left credCalcRezultValues" lg="4">
				{numeral(annuity).format('$0,0.00')}
			</MDBCol>
		</MDBRow>
		<MDBRow>
			<MDBCol className="credCalcRezultLabels" lg="3">
				Total principal paid: 
			</MDBCol>
			<MDBCol className="text-left credCalcRezultValues" lg="4">
				{numeral(creditsum).format('$0,0.00')}
			</MDBCol>
		</MDBRow>
		<MDBRow>
			<MDBCol className="credCalcRezultLabels" lg="3">
				Total interest paid: 
			</MDBCol>
			<MDBCol className="text-left credCalcRezultValues" lg="4">
				{numeral(totalInterestIncome).format('$0,0.00')}
			</MDBCol>
		</MDBRow>
		<ResultChart chartData={dataLine} /> 
		<ResultTable data={tableData} /> 
	</div>
}





