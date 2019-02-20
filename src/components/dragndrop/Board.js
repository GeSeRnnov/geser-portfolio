import React, {Component} from 'react';
import Horse from './Horse';
import Square from './Square';
import BoardSquare from './BoardSquare';
import { canMoveUnit, moveUnit } from './Observe';
// import handleSquareClick from './redux/ClickMoving';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { movePosition } from './redux/reducers/actions';



function handleSquareClick(toX, toY) {
  if (canMoveUnit(toX, toY)) {
    moveUnit(toX, toY);
  	console.log('handleSquareClick',[toX, toY]);
    // movePosition([toX, toY]);
  }
}


function renderPiece(x, y, [unitX, unitY]) {
	if (x === unitX && y === unitY) {
		return <Horse />;
	}
}

function renderSquare(i, unitPosition) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	// console.log('unitPosition ', unitPosition);
	// const isUnitHere = (x === unitX && y === unitY);
	// const black = (x + y) % 2 === 1;
	// const piece = isUnitHere ? <Horse /> : null;
		// <div onClick={() => this.handleSquareClick(x, y)}>
	return(
		<div key={i} onClick={() => handleSquareClick(x, y)}  style={{width: '12.5%', height: '12.5%'}} >
			<BoardSquare x={x} y={y} >
				{renderPiece(x,y,unitPosition)}
			</BoardSquare>
		</div>
	);
}

function mapStateToProps(state) {
	const unitPosition = state.positions;
	// const unitPosition2 = unitPosition;
	// console.log('mapStateToProps', unitPosition);
	return {unitPosition};
}

// export default function Board({ unitPosition }) {
class Board extends Component {
	constructor(props){
		super(props);
		// for(let i = 0; i < 64; i++){
		// 	squares.push(renderSquare(i, this.props.unitPosition.position));
		// }
		this.state = {
			position: this.props.unitPosition.position
		}
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('nextProps, nextState ', nextProps, nextState);
	// 	if (nextProps.unitPosition.position !== this.state.position){
	// 		console.log('comparsion', nextProps.unitPosition.position, this.state.position);
	// 		// squares = [];
	// 		// for(let i = 0; i < 64; i++){
	// 		// 	squares.push(renderSquare(i, nextProps.unitPosition.position));
	// 		// }
	// 		return true;
	// 	}
	// }



	render(){
		let squares = [];
		for(let i = 0; i < 64; i++){
			// squares.push(renderSquare(i, [1,7]));
			squares.push(renderSquare(i, this.props.unitPosition.position));
		}
		return(
					<div>
						<div>
							{this.props.unitPosition.position[0]}, {this.props.unitPosition.position[1]}
						</div>
				<div
					style={{
						width: '100%',
						height: '70vh',
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					
					{squares}
				</div>
					</div>
		);
}};


export default connect(mapStateToProps, movePosition)(Board);
// export default connect(mapStateToProps, null)(Board);


			// <DragDropContextProvider backend={HTML5Backend}>
			// </DragDropContextProvider>





// export interface BoardProps {
// 	unitPosition: [number, number]
// }

// const Container = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	flex-wrap: wrap;
// `

// export default class Board extends React.Component<BoardProps> {
// 	public render() {
// 		const squares = []
// 		for (let i = 0; i < 64; i += 1) {
// 			squares.push(this.renderSquare(i))
// 		}

// 		return <Container>{squares}</Container>
// 	}

// 	private renderSquare(i: number) {
// 		const x = i % 8
// 		const y = Math.floor(i / 8)

// 		return (
// 			<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
// 				<BoardSquare x={x} y={y}>
// 					{this.renderPiece(x, y)}
// 				</BoardSquare>
// 			</div>
// 		)
// 	}

// 	private renderPiece(x: number, y: number) {
// 		const [unitX, unitY] = this.props.unitPosition
// 		const isunitHere = x === unitX && y === unitY
// 		return isunitHere ? <unit /> : null
// 	}
// }




