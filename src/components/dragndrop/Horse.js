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

function Horse({ connectDragSource, isDragging }) {
	return connectDragSource(
		<div 
			style={{
		      opacity: isDragging ? 0.5 : 1,
		      fontSize: '2em',
		      fontWeight: 'bold',
		      cursor: 'move'
		    }}
	    >
			♘
		</div>
	);
};

export default DragSource(ItemTypes.HORSE, unitSource, collect)(Horse)




// 
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

