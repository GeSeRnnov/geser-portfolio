import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class RezultChart extends React.Component {
state = {
	dataLine: this.props.chartData,
}



render() {
    return (
      <MDBContainer >
        <h5 className="mt-0">Amortization Schedule</h5>
        <Line data={this.state.dataLine} 
        	options={{ responsive: true }} 
        	height="60vh"
    	/>
      </MDBContainer>
    );
  }
}

export default RezultChart;



