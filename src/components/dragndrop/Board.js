import React from 'react';
import Horse from './Horse';
import Square from './Square';
import BoardSquare from './BoardSquare';
import { moveUnit, canMoveUnit } from './Observe';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



function handleSquareClick(toX, toY) {
  if (canMoveUnit(toX, toY)) {
    moveUnit(toX, toY);
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

export default function Board({ unitPosition }) {
	const squares = [];
	for(let i = 0; i < 64; i++){
		squares.push(renderSquare(i, unitPosition));
	}
	return(
		<DragDropContextProvider backend={HTML5Backend}>
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
		</DragDropContextProvider>
	);
};


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



