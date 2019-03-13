import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class ResultChart extends React.Component {


render() {
    return (
      <MDBContainer className='mb-5 pb-5'>
        <h5 className="mt-5">Amortization Schedule</h5>
        <Line data={this.props.chartData} 
        	options={{ responsive: true }} 
        	height={"90vh"}
        />
      
      </MDBContainer>
    );
  }
}

export default ResultChart;


