// import React from 'react';
// import PropTypes from 'prop-types';
import { Provider, Subscribe, Container } from 'unstated';

type StateContainer={
	unitPosition: [number, number]
};

class Unstated extends Container<StateContainer>{
	
	state = { 
		unitPosition: [1,6]
	}

	handleSetState( newPosition: [number, number] ){
		console.log('newPosition ', newPosition);
		this.setState({ newPosition })
	}

}


export default Unstated;