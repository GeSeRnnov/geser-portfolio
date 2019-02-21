import React from 'react';
// import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';
// import AnimatedSpriteSheet from './AnimateSpriteSheet';


// https://www.w3schools.com/howto/howto_css_flip_image.asp

import Spritesheet from 'react-responsive-spritesheet';


function Probe() {
	const desc = {	
		filename: './img/pixie.png',
		initialFrame: 6,
		frame: {width: 80, height: 90},
		bounds: {x:110, y:130, width: 60, height: 20},
		isPlaying: false,
		loop: false,
		speed: 300
	};
	
	return (
		<div style={{height: '70vh' }} >
			<div >

			<Spritesheet
				image={'./img/pixie.png'}
				widthFrame={80}
				heightFrame={100}
				
				steps={10}
				fps={5}
				loop={true}
				direction={`forward`}
	        	timeout={1000} 
	        	style={{width: '6%' }}
			/>
			</div>
		</div>
	);
};

export default Probe;


		// <div style={{height: '70vh' }} >
		// 	<AnimatedSpriteSheet
		// 		{...desc}
		// 	/>
		// </div>

// const unitSource = {
//   beginDrag(props) {
//     return {};
//   }
// };

// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   }
// }

// 790*1095
// function Probe({ connectDragSource, isDragging }) {
// 	return connectDragSource(

// function Probe() {
// 	return (
// 		<div style={{height: '70vh'}} >
// 			<AnimatedSpriteSheet
// 				filename="../../img/pixie.png"
// 				initialFrame={0}
// 				frame={{width: 79, height: 120}}
// 				bounds={{x:0, y:0, width: 790, height: 120}}
// 				isPlaying
// 				loop
// 				speed={300}
// 			/>
// 		</div>
// 	);
// };

// export default Probe;


// 
// export default DragSource(ItemTypes.HORSE, unitSource, collect)(Horse)




// 			style={{
// 		      opacity: isDragging ? 0.5 : 1,
// 		      fontSize: '2em',
// 		      fontWeight: 'bold',
// 		      cursor: 'move'
// 		    }}






