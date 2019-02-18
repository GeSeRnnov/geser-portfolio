import * as React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Board from './dragndrop/Board';
import { observe } from './dragndrop/Observe';
import Unstated from './dragndrop/Unstated';
import { Provider, Subscribe, Container } from 'unstated';

// http://react-dnd.github.io/react-dnd/docs/tutorial
// https://www.spriters-resource.com/pc_computer/heroes3/
// https://simonsarris.com/making-html5-canvas-useful/

function Dragndrop(){
		return (
			<Subscribe to={ [Unstated] } >
				{ (stated) => (<div
					style={{
						width: "100%",
						height: "70vh",
						border: '1px solid gray',
					}}
				>
					<Board unitPosition={stated.state.unitPosition}  />
				</div>)}
			</Subscribe>
		);
	}

class DragNDrop extends React.Component{
	// public state: ChessboardTutorialAppState = { knightPosition: [1, 7] }
	state = { 
		unitPosition: [1,7]
	}
	
	



	handleChange = (unitPosition) => {
		const nextState = { unitPosition }
		if (this.state) {
			this.setState(nextState)
		} else {
			this.state = nextState
		}
	}

	
	
	render() {
		return(
		<Provider>
			<Dragndrop />
		</Provider>
		);
	}

}


export default DragNDrop;




// 
// render() {
// 		return (
// 			<Subscribe to={ [Unstated] } >
// 				{ (stated) => (<div
// 					style={{
// 						width: "100%",
// 						height: "70vh",
// 						border: '1px solid gray',
// 					}}
// 				>
// 					<Board unitPosition={stated.state.unitPosition}  />
// 				</div>)}
// 			</Subscribe>
// 		);
// 	}

// 
		// const { knightPosition } = this.state


// // 
// // tslint:disable member-ordering
// import * as React from 'react'
// import Board from './Board'
// import { observe } from './Game'



// /**
//  * Unlike the tutorial, export a component so it can be used on the website.
//  */
// export default class ChessboardTutorialApp extends React.Component<
// 	{},
// 	ChessboardTutorialAppState
// > {
// 	public state: ChessboardTutorialAppState = { knightPosition: [1, 7] }
// 	private unobserve?: (() => void)

// 	public componentDidMount() {
// 		this.unobserve = observe(this.handleChange)
// 	}
// 	public componentWillUnmount() {
// 		if (this.unobserve) {
// 			this.unobserve()
// 		}
// 	}

// 	public render() {
// 		const { knightPosition } = this.state
// 		return (
// 			<div
// 				style={{
// 					width: 500,
// 					height: 500,
// 					border: '1px solid gray',
// 				}}
// 			>
// 				<Board knightPosition={knightPosition} />
// 			</div>
// 		)
// 	}

// 	private handleChange = (knightPosition: [number, number]) => {
// 		const nextState = { knightPosition }
// 		if (this.state) {
// 			this.setState(nextState)
// 		} else {
// 			this.state = nextState
// 		}
// 	}
// }


