import React from 'react';
import { DragSource } from 'react-dnd';
// import {
// 	DragSource,
// 	ConnectDragSource,
// 	ConnectDragPreview,
// 	DragSourceConnector,
// 	DragSourceMonitor,
// 	DragSourceCollector,
// } from 'react-dnd'
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




// 
			// ♘
// export default DragSource(ItemTypes.HORSE, unitSource, collect)(Horse);





// import unitImage from './unitImage'

// const unitSource = {
// 	beginDrag() {
// 		return {}
// 	},
// }

// const unitStyle: React.CSSProperties = {
// 	fontSize: 40,
// 	fontWeight: 'bold',
// 	cursor: 'move',
// }

// const collect: DragSourceCollector<unitProps> = (
// 	connect: DragSourceConnector,
// 	monitor: DragSourceMonitor,
// ) => ({
// 	connectDragSource: connect.dragSource(),
// 	connectDragPreview: connect.dragPreview(),
// 	isDragging: monitor.isDragging(),
// })

// export interface unitProps {
// 	connectDragSource: ConnectDragSource
// 	connectDragPreview: ConnectDragPreview
// 	isDragging?: boolean
// }

// class unit extends React.Component<unitProps> {
// 	public componentDidMount() {
// 		const img = new Image()
// 		img.src = unitImage
// 		img.onload = () =>
// 			this.props.connectDragPreview && this.props.connectDragPreview(img)
// 	}

// 	public render() {
// 		const { connectDragSource, isDragging } = this.props
// 		return connectDragSource(
// 			<div
// 				style={{
// 					...unitStyle,
// 					opacity: isDragging ? 0.5 : 1,
// 				}}
// 			>
// 				♘
// 			</div>,
// 		)
// 	}
// }

