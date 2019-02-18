import React from 'react';

export default function Square({ black, children }) {
	const fill = black ? 'black' : 'white';
	const stroke = black ? 'white' : 'black';

	return(
		
		<div style={{
			backgroundColor: fill,
			color: stroke,
			width: '100%',
			height: '100%',
		}}>
			{children}
		</div>
	);
};

// export default Square;




// 
// export interface SquareProps {
// 	black: boolean
// 	children: JSX.Element
// }

// const squareStyle = {
// 	width: '100%',
// 	height: '100%',
// }

// const Square: React.SFC<SquareProps> = ({ black, children }) => {
// 	const backgroundColor = black ? 'black' : 'white'
// 	const color = black ? 'white' : 'black'
// 	return (
// 		<div
// 			style={{
// 				...squareStyle,
// 				color,
// 				backgroundColor,
// 			}}
// 		>
// 			{children}
// 		</div>
// 	)
// }
