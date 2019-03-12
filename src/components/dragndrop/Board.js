import React, {Component} from 'react';
import Unit from './Unit';
import BoardSquare from './BoardSquare';
import { canMoveUnit, moveUnit } from './Observe';
import { connect } from 'react-redux';
import { movePosition } from './redux/reducers/actions';



function handleSquareClick(toX, toY) {
  if (canMoveUnit(toX, toY)) {
    moveUnit(toX, toY);
  }
}


function renderPiece(x, y, [unitX, unitY]) {
	if (x === unitX && y === unitY) {
		return <Unit />;
	}
}

function renderSquare(i, unitPosition) {
	const x = i % 8;
	const y = Math.floor(i / 8);
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
	return {unitPosition};
}

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			position: this.props.unitPosition.position
		}
	}


	render(){
		let squares = [];
		for(let i = 0; i < 64; i++){
			squares.push(renderSquare(i, this.props.unitPosition.position));
		}
		return(
			<div>
				<div
					style={{
						width: '100%',
						height: '79.8vh',
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


