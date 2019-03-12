import React from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';
import Spritesheet from 'react-responsive-spritesheet';


const unitSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function Unit({ connectDragSource, isDragging }) {
	return connectDragSource(
		<div 
			style={{
		      opacity: isDragging ? 0.5 : 1,
		      fontSize: '2em',
		      fontWeight: 'bold',
		      cursor: 'move'
		    }}
	    >
	    	<Spritesheet
				image={'./img/pixie.png'}
				widthFrame={80}
				heightFrame={100}
				steps={10}
				fps={5}
				loop={true}
				direction={`forward`}
	        	timeout={1000} 
	        	style={{width: '90%',zIndex: '100' }}
			/>
		</div>
	);
};

export default DragSource(ItemTypes.HORSE, unitSource, collect)(Unit)



