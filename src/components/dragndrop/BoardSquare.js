import React, {Component} from 'react';
import Square from './Square';
import { moveUnit, canMoveUnit } from './Observe';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

import Unstated from './Unstated';
import { Provider, Subscribe, Container } from 'unstated';
import { connect as reduxConnect } from 'react-redux';
import { movePosition } from './redux/reducers/actions';


// let newPosition = [];


// const squareTarget = {
//   canDrop(props) {
//     return canMoveUnit(props.x, props.y);
//   },

//   drop(props) {
//     moveUnit(props.x, props.y);
//     console.log('can drop to ', props.x, props.y, props);
//     // newPosition = [props.x, props.y];
//   }
// };


// function setNewPosition(newPosition){
// 	// console.log(newState);
// 	return (
// 		<Subscribe to = {[Unstated]} >
// 			{(stated) => (
// 				stated.handleSetState({ newPosition })
// 			)}
// 		</Subscribe>
// 	);
// }

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function  renderOverlay(color){
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

// let { x, y, connectDropTarget, isOver, canDrop, children } = this.props
// const black = (x + y) % 2 === 1;
class  BoardSquare extends Component{
// function BoardSquare({ x, y, connectDropTarget, isOver, canDrop, children }) {
  constructor(props){
    super(props);
    // state = {}
    // console.log('boardSquareProps ');
  }



  isBlack(x,y){
    return (x + y) % 2 === 1;
  }

  render(){
  return this.props.connectDropTarget(
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <Square black={this.isBlack(this.props.x,this.props.y)}>
        {this.props.children}
      </Square>
      {this.props.isOver && !this.props.canDrop && renderOverlay('red')}
      {!this.props.isOver && this.props.canDrop && renderOverlay('yellow')}
      {this.props.isOver && this.props.canDrop && renderOverlay('green')}
    </div>
  );
}
}


export default reduxConnect(null, {movePosition})(DropTarget(ItemTypes.HORSE, 
    // squareTarget
    { canDrop(props) {
        return canMoveUnit(props.x, props.y);
      },

      drop(props,monitor) {
        moveUnit(props.x, props.y);
        // console.log('can drop to ', props.x, props.y, props);
        // newPosition = [props.x, props.y];
        props.movePosition([props.x, props.y]);
      }
    }

    , collect)(BoardSquare));
// export default DropTarget(ItemTypes.HORSE, squareTarget, collect)(BoardSquare);
// export default connect(null, movePosition)(BoardSquare)




// interface CollectedProps {
// 	isOver: boolean
// 	canDrop: boolean
// 	connectDropTarget: ConnectDropTarget
// }
// export interface BoardSquareProps {
// 	x: number
// 	y: number
// 	children: any
// }

// const squareTarget = {
// 	canDrop(props: BoardSquareProps) {
// 		return canMoveunit(props.x, props.y)
// 	},

// 	drop(props: BoardSquareProps) {
// 		moveunit(props.x, props.y)
// 	},
// }

// const collect: DropTargetCollector<CollectedProps> = (
// 	connect: DropTargetConnector,
// 	monitor: DropTargetMonitor,
// ) => {
// 	return {
// 		connectDropTarget: connect.dropTarget(),
// 		isOver: !!monitor.isOver(),
// 		canDrop: !!monitor.canDrop(),
// 	}
// }

// class BoardSquare extends React.Component<BoardSquareProps & CollectedProps> {
// 	public render() {
// 		const { x, y, connectDropTarget, isOver, canDrop, children } = this.props
// 		const black = (x + y) % 2 === 1

// 		return connectDropTarget(
// 			<div
// 				style={{
// 					position: 'relative',
// 					width: '100%',
// 					height: '100%',
// 				}}
// 			>
// 				<Square black={black}>{children}</Square>
// 				{isOver && !canDrop && <Overlay color="red" />}
// 				{!isOver && canDrop && <Overlay color="yellow" />}
// 				{isOver && canDrop && <Overlay color="green" />}
// 			</div>,
// 		)
// 	}
// }
// export default DropTarget(ItemTypes.unit, squareTarget, collect)(BoardSquare)


