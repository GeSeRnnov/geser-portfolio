import React from 'react';
import CredInputs from './credcalc/CredInputs';
import RezultTable from './credcalc/RezultTable';
import RezultChart from './credcalc/RezultChart';
import { MDBContainer, MDBRow, MDBCol,  MDBScrollspyBox, MDBTabContent  } from "mdbreact";
import getData from './credcalc/ProcessData'

// http://jerairrest.github.io/react-chartjs-2/

Element.prototype.getElementById = function(id) {
    return document.getElementById(id);
}


class Reactogram extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			inputs: {
				creditsum: 500000,
				period: 18,
				defaultRate: 8,
				rate: 8
			},
			calculated: false,
			tableData: {},
			dataLine: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCalculate = this.handleCalculate.bind(this);
	}


	handleCalculate = () => {
		this.setState({ tableData: getData(this.state.inputs, 'table') })
		this.setState({ dataLine: getData(this.state.inputs, 'chart') })
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
						<CredInputs inputs={this.state.inputs} handleChange={this.handleChange} handleCalculate={this.handleCalculate} handleRateChange={this.handleRateChange} />
					</MDBCol>
					<MDBCol className="p-0 m-0" lg="10" className="" style={{background: 'white', minHeight: '70vh'}} >
						<div>
							{
								this.state.calculated ? 
									<div>
											<RezultChart chartData={this.state.dataLine} /> 
											<RezultTable data={this.state.tableData} /> 
									</div>
									: 
									<div>
										<img src={"./img/PersonalLoanIner.jpg" } style={{height: '70vh'}} />
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


